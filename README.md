# Patch Javascript SDK

![Test](https://github.com/patch-technology/patch-node/workflows/Test/badge.svg)
[![npm version](https://badge.fury.io/js/%40patch-technology%2Fpatch@2x.svg)](https://www.npmjs.com/package/@patch-technology/patch)
[![Discord](https://img.shields.io/discord/733029448558837792)](https://discord.gg/M23NnGR)

The official Javascript package for the [Patch API](https://www.usepatch.com)

## Documentation

For a complete API reference, check out [Patch's API Reference.](https://docs.usepatch.com/docs/patch/openapi/v1/swagger.yaml)

## Installation

### NPM

```shell
npm install @patch-technology/patch --save
```

### Yarn

```shell
yarn add @patch-technology/patch
```

### Requirements

- Node 10 +

## Usage

### Configuration

After installing the package, you'll have to configure it with your API key which is available from the API key page in the Patch dashboard:

```javascript
// ES6+
import Patch from '@patch-technology/patch'
const patch = Patch('key_test_1234')

// ES5
var patch = require('@patch-technology/patch').default('key_test_1234')
```

### Orders

In Patch, orders represent a purchase of carbon offsets or negative emissions by mass. Place orders directly if you know the amount of carbon dioxide you would like to sequester. If you do not know how much to purchase, use an estimate.

[API Reference](https://docs.usepatch.com/docs/patch/openapi/v1/swagger.yaml/paths/~1v1~1orders/get)

#### Examples

```javascript
// Create an order
const mass = 1000000 // Pass in the mass in grams (i.e. 1 metric tonne)
patch.orders.createOrder({ mass_g: mass })

// You can also specify a project-id field (optional) to be used instead of the preferred one
const projectId = 'pro_test_1234' // Pass in the project's ID
patch.orders.createOrder({ mass_g: mass, project_id: projectId })

// Orders also accept a metadata field (optional)
const metadata = { user: 'john doe' }
patch.orders.createOrder({ mass_g: mass, metadata: metadata })

// Retrieve an order
const orderId = 'ord_test_1234' // Pass in the order's id
patch.orders.retrieveOrder(orderId)

// Place an order
const orderId = 'ord_test_1234' // Pass in the order's id
patch.orders.placeOrder(orderId)

// Cancel an order
const orderId = 'ord_test_1234' // Pass in the order's id
patch.orders.cancelOrder(orderId)

// Retrieve a list of orders
const page = 1 // Pass in which page of orders you'd like
patch.orders.retrieveOrders({ page })
```

### Estimates

Estimates allow API users to get a quote for the cost of compensating a certain amount of CO2. When creating an estimate, an order in the `draft` state will also be created, reserving the allocation of a project for 5 minutes. If you don't place your draft order within those 5 minutes, the order will automatically be cancelled.

[API Reference](https://docs.usepatch.com/docs/patch/openapi/v1/swagger.yaml/paths/~1v1~1estimates/get)

#### Examples

```javascript
// Create an estimate
const mass = 1000000 // Pass in the mass in grams (i.e. 1 metric tonne)
patch.estimates.createMassEstimate({ mass_g: mass })

// You can also specify a project-id field (optional) to be used instead of the preferred one
const projectId = 'pro_test_1234' // Pass in the project's ID
patch.estimates.createMassEstimate({ mass_g: mass, project_id: projectId })

// Retrieve an estimate
const estimateId = 'est_test_1234'
patch.estimates.retrieveEstimate(estimate_id)

// Retrieve a list of estimates
const page = 1 // Pass in which page of estimates you'd like
patch.estimates.retrieveEstimates({ page })
```

### Projects

Projects are the ways Patch takes CO2 out of the air. They can represent reforestation, enhanced weathering, direct air carbon capture, etc. When you place an order via Patch, it is allocated to a project.

[API Reference](https://docs.usepatch.com/docs/patch/openapi/v1/swagger.yaml/paths/~1v1~1projects/get)

#### Examples

```javascript
// Retrieve a project
const projectId = 'pro_test_1234' // Pass in the project's ID
patch.projects.retrieveProject(projectId)

// Retrieve a list of projects
const page = 1 // Pass in which page of projects you'd like
patch.projects.retrieveProjects({ page })
```

### Preferences

Preferences are how you route your orders in Patch. If you don't have a preference, Patch will allocate your order to the least expensive option. If you do have a preference, all of your orders will be sent to that project. You can set your preferences via API, or through the [Patch Dashboard](https://dashboard.usepatch.com/projects).

[API Reference](https://docs.usepatch.com/docs/patch/openapi/v1/swagger.yaml/paths/~1v1~1preferences/post)

#### Examples

```javascript
// Create a preference
const projectId = 'pro_test_1234' // Pass in the project_id for your preference
patch.preferences.createPreference({ project_id: projectId })

// Retrieve a preference
const preferenceId = 'pre_test_1234' // Pass in the preferences's id
patch.preferences.retrievePreference(preferenceId)

// Delete a preference
const preferenceId = 'pre_test_1234' // Pass in the preferences's id
patch.preferences.deletePreference(preferenceId)

// Retrieve a list of preferences
const page = 1 // Pass in which page of preferences you'd like
patch.preferences.retrievePreferences({ page })
```

## Development

Install node modules

```
$ npm install
```

Set required environment variables:

```
$ export SANDBOX_API_KEY=<SANDBOX API KEY>
```

Build:

```
$ npm run build
```

Run tests:

```
$ npm test
```
