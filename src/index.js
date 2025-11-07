/**
 * Patch API V2
 * The core API used to integrate with Patch's service
 *
 * Contact: engineering@usepatch.com
 */

import ApiClient from './ApiClient';
import OrderLineItemsApi from './api/OrderLineItemsApi';
import OrdersApi from './api/OrdersApi';
import ProjectsApi from './api/ProjectsApi';
import TechnologyTypesApi from './api/TechnologyTypesApi';

export default function Patch(accessToken) {
  if (!(this instanceof Patch)) return new Patch(accessToken);

  this.client = ApiClient.instance;
  this.client.authentications['bearer_auth'].accessToken = accessToken;

  this.orderlineitems = new OrderLineItemsApi(this.client);

  this.orders = new OrdersApi(this.client);

  this.projects = new ProjectsApi(this.client);

  this.technologytypes = new TechnologyTypesApi(this.client);
}
