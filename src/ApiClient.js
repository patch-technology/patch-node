/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import superagent from 'superagent';
import querystring from 'querystring';

class ApiClient {
  constructor() {
    this.basePath = 'https://api.usepatch.com'.replace(/\/+$/, '');
    this.authentications = {
      bearer_auth: { type: 'bearer' }
    };

    this.defaultHeaders = {};

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;

    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */
    this.cache = true;

    this.enableCookies = false;

    /*
     * Used to save and return cookies in a node.js (non-browser) setting,
     * if this.enableCookies is set to true.
     */
    if (typeof window === 'undefined') {
      this.agent = new superagent.agent();
    }

    /*
     * Allow user to override superagent agent
     */
    this.requestAgent = null;

    /*
     * Allow user to add superagent plugins
     */
    this.plugins = null;
  }

  paramToString(param) {
    if (param == undefined || param == null) {
      return '';
    }
    if (param instanceof Date) {
      return param.toJSON();
    }

    return param.toString();
  }

  buildUrl(path, pathParams) {
    if (!path.match(/^\//)) {
      path = '/' + path;
    }

    var url = this.basePath + path;

    url = url.replace(/\{([\w-]+)\}/g, (fullMatch, key) => {
      var value;
      if (pathParams.hasOwnProperty(key)) {
        value = this.paramToString(pathParams[key]);
      } else {
        value = fullMatch;
      }

      return encodeURIComponent(value);
    });

    return url;
  }

  isJsonMime(contentType) {
    return Boolean(
      contentType != null && contentType.match(/^application\/json(;.*)?$/i)
    );
  }

  jsonPreferredMime(contentTypes) {
    for (var i = 0; i < contentTypes.length; i++) {
      if (this.isJsonMime(contentTypes[i])) {
        return contentTypes[i];
      }
    }

    return contentTypes[0];
  }

  isFileParam(param) {
    // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
    if (typeof require === 'function') {
      let fs;
      try {
        fs = require('fs');
      } catch (err) {}
      if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
        return true;
      }
    }

    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
      return true;
    }

    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
      return true;
    }

    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
      return true;
    }

    return false;
  }

  normalizeParams(params) {
    var newParams = {};
    for (var key in params) {
      if (
        params.hasOwnProperty(key) &&
        params[key] != undefined &&
        params[key] != null
      ) {
        var value = params[key];
        if (this.isFileParam(value) || Array.isArray(value)) {
          newParams[key] = value;
        } else {
          newParams[key] = this.paramToString(value);
        }
      }
    }

    return newParams;
  }

  buildCollectionParam(param, collectionFormat) {
    if (param == null) {
      return null;
    }
    switch (collectionFormat) {
      case 'csv':
        return param.map(this.paramToString).join(',');
      case 'ssv':
        return param.map(this.paramToString).join(' ');
      case 'tsv':
        return param.map(this.paramToString).join('\t');
      case 'pipes':
        return param.map(this.paramToString).join('|');
      case 'multi':
        //return the array directly as SuperAgent will handle it as expected
        return param.map(this.paramToString);
      default:
        throw new Error('Unknown collection format: ' + collectionFormat);
    }
  }

  applyAuthToRequest(request, authNames) {
    authNames.forEach((authName) => {
      var auth = this.authentications[authName];
      switch (auth.type) {
        case 'basic':
          if (auth.username || auth.password) {
            request.auth(auth.username || '', auth.password || '');
          }

          break;
        case 'bearer':
          if (auth.accessToken) {
            request.set({ Authorization: 'Bearer ' + auth.accessToken });
          }

          break;
        case 'apiKey':
          if (auth.apiKey) {
            var data = {};
            if (auth.apiKeyPrefix) {
              data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
            } else {
              data[auth.name] = auth.apiKey;
            }

            if (auth['in'] === 'header') {
              request.set(data);
            } else {
              request.query(data);
            }
          }

          break;
        case 'oauth2':
          if (auth.accessToken) {
            request.set({ Authorization: 'Bearer ' + auth.accessToken });
          }

          break;
        default:
          throw new Error('Unknown authentication type: ' + auth.type);
      }
    });
  }

  deserialize(response, returnType) {
    if (response == null || returnType == null || response.status == 204) {
      return null;
    }

    // Rely on SuperAgent for parsing response body.
    // See http://visionmedia.github.io/superagent/#parsing-response-bodies
    var data = response.body;
    if (
      data == null ||
      (typeof data === 'object' &&
        typeof data.length === 'undefined' &&
        !Object.keys(data).length)
    ) {
      // SuperAgent does not always produce a body; use the unparsed response as a fallback
      data = response.text;
    }

    return ApiClient.convertToType(data, returnType);
  }

  callApi(
    path,
    httpMethod,
    pathParams,
    queryParams,
    headerParams,
    formParams,
    bodyParam,
    authNames,
    contentTypes,
    accepts,
    returnType
  ) {
    var url = this.buildUrl(path, pathParams);
    var request = superagent(httpMethod, url);

    if (this.plugins !== null) {
      for (var index in this.plugins) {
        if (this.plugins.hasOwnProperty(index)) {
          request.use(this.plugins[index]);
        }
      }
    }

    // apply authentications
    this.applyAuthToRequest(request, authNames);

    // set query parameters
    if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
      queryParams['_'] = new Date().getTime();
    }

    request.query(this.normalizeParams(queryParams));

    // set header parameters
    request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

    // set requestAgent if it is set by user
    if (this.requestAgent) {
      request.agent(this.requestAgent);
    }

    // set request timeout
    request.timeout(this.timeout);

    var contentType = this.jsonPreferredMime(contentTypes);
    if (contentType) {
      // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
      if (contentType != 'multipart/form-data') {
        request.type(contentType);
      }
    } else if (!request.header['Content-Type']) {
      request.type('application/json');
    }

    if (contentType === 'application/x-www-form-urlencoded') {
      request.send(querystring.stringify(this.normalizeParams(formParams)));
    } else if (contentType == 'multipart/form-data') {
      var _formParams = this.normalizeParams(formParams);
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          if (this.isFileParam(_formParams[key])) {
            // file field
            request.attach(key, _formParams[key]);
          } else {
            request.field(key, _formParams[key]);
          }
        }
      }
    } else if (bodyParam !== null && bodyParam !== undefined) {
      request.send(bodyParam);
    }

    var accept = this.jsonPreferredMime(accepts);
    if (accept) {
      request.accept(accept);
    }

    if (returnType === 'Blob') {
      request.responseType('blob');
    } else if (returnType === 'String') {
      request.responseType('string');
    }

    // Attach previously saved cookies, if enabled
    if (this.enableCookies) {
      if (typeof window === 'undefined') {
        this.agent._attachCookies(request);
      } else {
        request.withCredentials();
      }
    }

    return new Promise((resolve, reject) => {
      request.end((error, response) => {
        var data = this.deserialize(response, returnType);
        if (error) {
          reject(data);
        } else {
          if (this.enableCookies && typeof window === 'undefined') {
            this.agent._saveCookies(response);
          }
          resolve(data);
        }
      });
    });
  }

  static parseDate(str) {
    return new Date(str);
  }

  static convertToType(data, type) {
    if (data === null || data === undefined) return data;

    switch (type) {
      case 'Boolean':
        return Boolean(data);
      case 'Integer':
        return parseInt(data, 10);
      case 'Number':
        return parseFloat(data);
      case 'String':
        return String(data);
      case 'Date':
        return ApiClient.parseDate(String(data));
      case 'Blob':
        return data;
      default:
        if (type === Object) {
          // generic object, return directly
          return data;
        } else if (typeof type.constructFromObject === 'function') {
          // for model type like User and enum class
          return type.constructFromObject(data);
        } else if (Array.isArray(type)) {
          // for array type like: ['String']
          var itemType = type[0];

          return data.map((item) => {
            return ApiClient.convertToType(item, itemType);
          });
        } else if (typeof type === 'object') {
          // for plain object type like: {'String': 'Integer'}
          var keyType, valueType;
          for (var k in type) {
            if (type.hasOwnProperty(k)) {
              keyType = k;
              valueType = type[k];
              break;
            }
          }

          var result = {};
          for (var k in data) {
            if (data.hasOwnProperty(k)) {
              var key = ApiClient.convertToType(k, keyType);
              var value = ApiClient.convertToType(data[k], valueType);
              result[key] = value;
            }
          }

          return result;
        } else {
          // for unknown type, return the data directly
          return data;
        }
    }
  }

  hostSettings() {
    return [
      {
        url: 'https://{api.usepatch.com}',
        description: 'No description provided',

        variables: {
          defaultHost: {
            description: 'No description provided',
            default_value: 'api.usepatch.com',
            enum_values: []
          }
        }
      }
    ];
  }

  getBasePathFromSettings(index, variables = {}) {
    var servers = this.hostSettings();

    // check array index out of bound
    if (index < 0 || index >= servers.length) {
      throw new Error(
        'Invalid index ' +
          index +
          ' when selecting the host settings. Must be less than ' +
          servers.length
      );
    }

    var server = servers[index];
    var url = server['url'];

    // go through variable and assign a value
    for (var variable_name in server['variables']) {
      if (variable_name in variables) {
        let variable = server['variables'][variable_name];
        if (
          !('enum_values' in variable) ||
          variable['enum_values'].includes(variables[variable_name])
        ) {
          url = url.replace(
            '{' + variable_name + '}',
            variables[variable_name]
          );
        } else {
          throw new Error(
            'The variable `' +
              variable_name +
              '` in the host URL has invalid value ' +
              variables[variable_name] +
              '. Must be ' +
              server['variables'][variable_name]['enum_values'] +
              '.'
          );
        }
      } else {
        // use default value
        url = url.replace(
          '{' + variable_name + '}',
          server['variables'][variable_name]['default_value']
        );
      }
    }
    return url;
  }

  static constructFromObject(data, obj, itemType) {
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        if (data.hasOwnProperty(i))
          obj[i] = ApiClient.convertToType(data[i], itemType);
      }
    } else {
      for (var k in data) {
        if (data.hasOwnProperty(k))
          obj[k] = ApiClient.convertToType(data[k], itemType);
      }
    }
  }
}

ApiClient.CollectionFormatEnum = {
  CSV: ',',
  SSV: ' ',
  TSV: '\t',
  PIPES: '|',
  MULTI: 'multi'
};

ApiClient.instance = new ApiClient();
export default ApiClient;
