/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from '../ApiClient';

class Disclaimer {
  constructor(header, severity) {
    Disclaimer.initialize(this, header, severity);
  }

  static initialize(obj, header, severity) {
    obj['header'] = header;
    obj['severity'] = severity;
  }

  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Disclaimer();

      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }

      if (data.hasOwnProperty('header')) {
        obj['header'] = ApiClient.convertToType(data['header'], 'String');
      }

      if (data.hasOwnProperty('severity')) {
        obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
      }

      if (data.hasOwnProperty('link_text')) {
        obj['link_text'] = ApiClient.convertToType(data['link_text'], 'String');
      }

      if (data.hasOwnProperty('link_destination')) {
        obj['link_destination'] = ApiClient.convertToType(
          data['link_destination'],
          'String'
        );
      }
    }
    return obj;
  }
}

Disclaimer.prototype['body'] = undefined;

Disclaimer.prototype['header'] = undefined;

Disclaimer.prototype['severity'] = undefined;

Disclaimer.prototype['link_text'] = undefined;

Disclaimer.prototype['link_destination'] = undefined;

export default Disclaimer;
