# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2024-05-06

### Breaking

- Drops support for node.js < 18

## [2.1.1] - 2023-04-18

### Added

- Adds `issuance_type` to `project` responses
- Adds `disclaimers` to `project` responses

## [2.1.0] - 2023-04-04

### Added

- Adds optional `vintage_start_year` and `vintage_end_year` fields to `order` creation
- Adds optional `vintage_start_year` and `vintage_end_year` fields to `order_line_item` create and update
- Adds optional `vintage_start_year` and `vintage_end_year` fields to `inventory` creation
- Adds `vintage_start_year` and `vintage_end_year` fields to `order` response
- Adds `vintage_start_year` and `vintage_end_year` fields to `order_line_item` response
- Adds optional `carrier_scac` field to `patch.estimates.createRoadShippingEstimate`
- Deprecates `createShippingEstimate` in favor of `createEcommerceEstimate`

## [1.24.2] - 2022-08-10

### Added

- Adds `patch.estimates.createEcommerceEstimate` method

## [1.24.0] - 2022-07-22

### Added

- Adds `patch.estimates.createAirShippingEstimate` method
- Adds `patch.estimates.createRailShippingEstimate` method
- Adds `patch.estimates.createRoadShippingEstimate` method
- Adds `patch.estimates.createSeaShippingEstimate` method

### Breaking

- Renames the `issuedTo` parameter for `orders` to `issued_to`.

## [1.23.0] - 2022-06-03

### Added

- Adds support for the `issuedTo` parameter on `orders`, to add support for creating and placing orders on behalf of another party.

## [1.22.0] - 2022-05-16

### Added

- Adds support for the `acceptLanguage` option on `projects`, to add support for the `Accept-Language` header.

## [1.21.0] - 2022-05-03

### Added

- Adds optional `total_price` and `currency` field to `order` creation
- Adds optional `amount` and `unit` field to `order` creation
- Adds inventory to `project` responses
- Adds inventory to `order` responses

### Changed

- Deprecates `mass_g` and `total_price_cents_usd` fields for create `order` requests
- Deprecates `average_price_per_tonne_cents_usd` and `remaining_mass_g` from `project` responses
- Deprecates `price_cents_usd`, `patch_fee_cents_usd`, and `mass_g` from `order` responses

## [1.20.0] - 2022-04-18

### Added

- Adds optional `vintage_year` field to `order` creation

## [1.19.0] - 2022-04-11

### Added

- Adds `patch.estimates.createHotelEstimate()` method

## [1.18.0] - 2022-03-22

### Changed

- Adds optional `state` field to `order` creation

## [1.17.0] - 2022-01-11

### Changed

- Set the order allocatations array as optional.

## [1.16.1] - 2022-01-07

### Changed

- No feature changes. Updates the openapi-generator version.

## [1.16.0] - 2021-12-07

### Removed

- Removes the `preferences` endpoints (deprecated)

## [1.15.2] - 2021-11-08

### Added

- Adds highlights to project responses

## [1.15.1] - 2021-11-04

### Added

- Adds verifier to project responses

## [1.15.0] - 2021-10-04

### Added

- Added the ability to fetch project technology types via `patch.technologytypes.retrieveTechnologyTypes()`

## [1.14.0] - 2021-09-27

### Added

- Adds mechanism, tagline, state, latitude, longitude, and technology_type to project responses

## [1.13.0] - 2021-09-10

### Added

- Adds ability to create Bitcoin and Ethereum estimates using the daily balance held.

## [1.12.0] - 2021-09-08

### Added

- Adds a `created_at` attribute in all order responses

## [1.11.1] - 2021-09-07

### Changed

- Body parameters are validated before being sent to the API. This gives developers faster feedback as they develop their applications.

## [1.11.0] - 2021-09-07

### Added

- Adds support for airports, aircracts, cabin class and passenger count in flight estimates

## [1.10.0] - 2021-08-27

### Added

- Adds a custom User-Agent header

## [1.9.0] - 2021-08-17

### Added

- Add support for querying Orders by `metadata`
- Added `transaction_value_eth_gwei` as an alternative way to compute transaction level emissions for ethereum

## [1.8.0] - 2021-07-20

### Added

- Add support for Ethereum estimates

## [1.7.0] - 2021-07-14

### Changed

- [BREAKING] Changed `order.price_cents_usd` and `order.patch_fee_cents_usd` from string to integer.

## [1.6.0] - 2021-07-14

### Added

- Order responses return a `registry_url` field
- Add support for Bitcoin estimates

## [1.5.2] - 2021-03-30

### Changed

- Updating dependencies in package-lock.json

## [1.5.0] - 2021-03-01

### Changed

- Changed base URL from https://api.usepatch.com to https://api.patch.io

## [1.4.0] - 2020-02-15

### Added

- Adds Sustainable Development Goals (SDGs) field to projects
- Adds filtering to Projects on type, country, minimum_available_mass

### Changed

- vehicle estimates now support optional `make`, `model` and `year` fields.

## [1.3.0] - 2020-02-08

### Added

- Adds support for creating carbon emission estimates for flights, shipping, and vehicles. See the [docs](https://docs.patch.io/#/?id=estimates) for more information.

## [1.2.5] - 2020-01-07

### Added

- Added [`querystring`](https://www.npmjs.com/package/querystring) as a peer dependency in the package.json and an explanation in the README for when you'd need to install it manually.

### Fixed

- Fixed a spec that was breaking due Patch core changes.

## [1.2.4] - 2020-10-14

### Added

- `total_price_cents_usd` field to `orders`
- allows users to create an order by total price

### Changed

- order creation requires either `mass_g` or `total_price_cents_usd`, but not both

## [1.2.3] - 2020-09-28

### Added

- `patch_fee_cents_usd` field to `orders`

## [1.2.2] - 2020-09-18

### Added

- `photos` field to `projects`

## [1.2.1] - 2020-09-18

### Fixed

- Fixing an issue related to the OpenApi code generator.

## [1.2.0] - 2020-09-17

### Added

- `average_price_per_tonne_cents_usd` field to `projects`
- `remaining_mass_g` field to `projects`
- `standard` field to `projects`
- validations on `mass_g` field (has to be greater than 1 and less than 2,000,000,000) to `orders` and `estimates` creation

## [1.1.1] - 2020-09-01

### Security

- Resolve [CVE-2020-7660](https://github.com/advisories/GHSA-hxcc-f52p-wc94)

## [1.1.0] - 2020-08-19

### Added

- `project_id` optional field to `order` creation
- `metadata` optional field to `order` creation
- `project_id` optional field to `estimate` creation
- changelog file

## [1.0.0] - 2020-07-31

### Added

- This is the first official release of Patch's Node library.

## [1.0.0-rc.2] - 2020-07-30

### Added

- Pre-commit styling with Prettier

### Changed

- Corrects readme usage instructions
- Upgrades old version of superagent

### Removed

- Removes @babel/cli as a dependency

## [1.0.0-rc.1] - 2020-07-29

### Added

- Patch's first pre-release of our core javascript client library.
