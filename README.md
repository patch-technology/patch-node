# Patch JavaScript SDK

![Test](https://github.com/patch-technology/patch-node/workflows/Test/badge.svg)
[![npm version](https://badge.fury.io/js/%40patch-technology%2Fpatch@2x.svg)](https://www.npmjs.com/package/@patch-technology/patch)
[![Discord](https://img.shields.io/discord/733029448558837792)](https://discord.gg/M23NnGR)

The official JavaScript package for the [Patch API](https://www.patch.io).

## Documentation

For a complete API reference, check out [Patch's API Reference.](https://docs.patch.io)

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

- Node 10+

## Usage

### Configuration

After installing the package, you'll have to configure it with your API key which is available from the API key page in the Patch dashboard:

```javascript
// ES6+
import Patch from '@patch-technology/patch';
const patch = Patch('key_test_1234');

// ES5
var patch = require('@patch-technology/patch').default('key_test_1234');
```

#### Peer dependencies

For environments that do not include the Node Standard Library, such as React Native, you will need to install the listed peer dependencies in order for the package to work as expected. You can install the peer dependencies by running:

```
npm install install-peers
```

### Orders

In Patch, orders represent a purchase of carbon offsets or negative emissions by mass.
Place orders directly if you know the amount of carbon dioxide you would like to sequester.
If you do not know how much to purchase, use an estimate.
You can also create an order with a maximum desired price, and we'll allocate enough mass to
fulfill the order for you.

[API Reference](https://docs.patch.io/#/?id=orders)

#### Examples

```javascript
// Create an order - you can create an order
// providing either amount (and unit) or total_price (and currency), but not both

// Create order with amount
const amount = 1_000_000; // Pass in the amount in unit specified
const unit = 'g';
patch.orders.createOrder({ amount: amount, unit: unit });

// Create an order with total price
const totalPrice = 500; // Pass in the total price in smallest currency unit (ie cents for USD).
const currency = 'USD';
patch.orders.createOrder({ total_price: totalPrice, currency: currency });

// Create order with the issued_to field (optional)
const amount = 1_000_000; // Pass in the amount in unit specified
const unit = 'g';
const issued_to = { email: 'issuee@companya.com', name: 'Olivia Jones' };
patch.orders.createOrder({ amount: amount, unit: unit, issued_to: issued_to });

// Retrieve an order
orderId = 'ord_test_1234'; // Pass in the order's id
patch.orders.retrieveOrder(orderId);

// Place an order
const orderId = 'ord_test_1234'; // Pass in the order's id
patch.orders.placeOrder(orderId);

// Place an order with the issued_to field (optional)
const orderId = 'ord_test_1234'; // Pass in the order's id
const issued_to = { email: 'issuee@companya.com', name: 'Olivia Jones' };
patch.orders.placeOrder(orderId, { issued_to: issued_to });

// Cancel an order
const orderId = 'ord_test_1234'; // Pass in the order's id
patch.orders.cancelOrder(orderId);

// Retrieve a list of orders
const page = 1; // Pass in which page of orders you'd like
patch.orders.retrieveOrders({ page });
```

### Estimates

Estimates allow API users to get a quote for the cost of compensating a certain amount of CO2. When creating an estimate, an order in the `draft` state will also be created, reserving the allocation of a project for 5 minutes. If you don't place your draft order within those 5 minutes, the order will automatically be cancelled.

[API Reference](https://docs.patch.io/#/?id=estimates)

#### Examples

```javascript
// Create a mass estimate
const mass_g = 1000000; // Pass in the mass in grams (i.e. 1 metric tonne)
patch.estimates.createMassEstimate({ mass_g });

// Create a flight estimate
const distance_m = 9000000; // Pass in the distance traveled in meters
patch.estimates.createFlightEstimate({ distance_m });

// Create an ecommerce estimate
const distance_m = 9000000;
// Pass in the shipping distance in meters, the transportation method, and the package mass
patch.estimates.createEcommerceEstimate({
  distance_m,
  package_mass_g: 1000,
  transportation_method: 'air'
});

// Create a bitcoin estimate
const transaction_value_btc_sats = 1000; // [Optional] Pass in the transaction value in satoshis
patch.estimates.createBitcoinEstimate({
  transaction_value_btc_sats
});

// Create a vehicle estimate
const distance_m = 9000000;
// Pass in the driving distance in meters and the model/make/year of the vehicle
patch.estimates.createVehicleEstimate({
  distance_m,
  make: 'Toyota',
  model: 'Corolla',
  year: 1995
});

// Retrieve an estimate
const estimateId = 'est_test_1234';
patch.estimates.retrieveEstimate(estimate_id);

// Retrieve a list of estimates
const page = 1; // Pass in which page of estimates you'd like
patch.estimates.retrieveEstimates({ page });
```

### Projects

Projects are the ways Patch takes CO2 out of the air. They can represent reforestation, enhanced weathering, direct air carbon capture, etc. When you place an order via Patch, it is allocated to a project.

When fetching Projects, you can add filters to the query to narrow the result. Currently supported filters are:

- `country`
- `type`
- `minimumAvailableMass`

You can also set the `acceptLanguage` option to retrieve projects in a different language.

[API Reference](https://docs.patch.io/#/?id=projects)

#### Examples

```javascript
// Retrieve a project
const projectId = 'pro_test_1234'; // Pass in the project's ID
patch.projects.retrieveProject(projectId);

// Retrieve a list of projects
const page = 1; // Pass in which page of projects you'd like
patch.projects.retrieveProjects({ page });

// Retrieve a filtered list of projects
const country = 'CA'; // Pass in the country you'd like to get projects from
patch.projects.retrieveProjects({ country });

// Retrieve a filtered list of projects
const type = 'biomass'; // Pass in the project type you'd like to filter by
patch.projects.retrieveProjects({ type });

// Retrieve a filtered list of projects
const minimumAvailableMass = 100; // Pass in the minimum available inventory the projects should have
patch.projects.retrieveProjects({ minimumAvailableMass });

// Retrieve a project in another language
// See http://docs.patch.test:3000/#/internationalization for more information and support languages
const projectId = 'pro_test_1234';
patch.projects.retrieveProject(projectId, { acceptLanguage: 'fr' });
```

## Contributing

While we value open-source contributions to this SDK, the core of this library is generated programmatically. Complex additions made directly to the library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README, as well as new test cases are always very welcome!

### Build and manually test

To build and test the package locally, run:

```sh
$ npm run build
```

This will generate a `dist` folder with the compiled code. Next you want to link the package and use it in a different folder.

In the patch-node folder, run:

```sh
$ npm link
```

Navigate to a different, empty folder:

```sh
$ cd ..
$ mkdir test-patch-node
$ cd test-patch-node
```

In that repository, run the following command to use the locally built package:

```sh
$ npm link @patch-technology/patch
```

This will create a `node_modules` directory in your test repository which will symlink to your locally built package. To test out the package, open a node REPL and import the package and run some queries.

```sh
SANDBOX_API_KEY=xxx node
```

```node
const Patch = require('@patch-technology/patch');
const patch = Patch.default(process.env.SANDBOX_API_KEY);
patch.projects.retrieveProjects().then((response) => console.log(response));
```

### Run the specs

Before running the tests, make sure you set the test API key! Please use test API keys and not production ones, they usually start with `key_test_`.
Be sure you navigate back to the root `patch-node` directory to run the tests.

```sh
$ export SANDBOX_API_KEY=<PATCH_TEST_API_KEY>
```

Then you are ready to run the tests:

```sh
$ npm run test
```
