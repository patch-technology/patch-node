/**
 * Patch API V1
 * The core API used to integrate with Patch's service
 *
 * Contact: developers@usepatch.com
 */

import ApiClient from './ApiClient';
import EstimatesApi from './api/EstimatesApi';
import OrdersApi from './api/OrdersApi';
import PreferencesApi from './api/PreferencesApi';
import ProjectsApi from './api/ProjectsApi';

export default function Patch(accessToken) {
  if (!(this instanceof Patch)) return new Patch(accessToken);

  this.client = ApiClient.instance;
  this.client.authentications['bearer_auth'].accessToken = accessToken;

  this.estimates = new EstimatesApi(this.client);

  this.orders = new OrdersApi(this.client);

  this.preferences = new PreferencesApi(this.client);

  this.projects = new ProjectsApi(this.client);
}
