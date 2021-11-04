# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
