import { expect } from 'chai';
import Patch from '../../dist/index';
const patch = Patch(process.env.SANDBOX_API_KEY);

describe('Estimates Integration', function () {
  it('supports create, retrieve and list', async function () {
    const createEstimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100,
      create_order: true
    });
    const estimateId = createEstimateResponse.data.id;

    const retrieveEstimateResponse = await patch.estimates.retrieveEstimate(
      estimateId
    );
    expect(retrieveEstimateResponse.data.id).to.equal(estimateId);
    expect(retrieveEstimateResponse.data.order.state).to.equal('draft');

    const retrieveEstimatesResponse = await patch.estimates.retrieveEstimates({
      page: 1
    });
    expect(retrieveEstimatesResponse.data.length).to.be.above(0);
  });

  it('supports creating flight estimates with distance', async function () {
    const createEstimateResponse = await patch.estimates.createFlightEstimate({
      distance_m: 1000,
      create_order: true
    });
    const estimate = createEstimateResponse.data;

    expect(estimate.type).to.be.eq('flight');
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.order.state).to.be.eq('draft');
  });

  it('supports creating flight estimates with airports', async function () {
    const { data: estimate1 } = await patch.estimates.createFlightEstimate({
      origin_airport: 'SFO',
      destination_airport: 'LAX'
    });
    const { data: estimate2 } = await patch.estimates.createFlightEstimate({
      origin_airport: 'SFO',
      destination_airport: 'JFK'
    });

    expect(estimate2.mass_g).to.be.greaterThan(estimate1.mass_g);
  });

  it('supports creating shipping estimates', async function () {
    const createEstimateResponse = await patch.estimates.createShippingEstimate(
      {
        distance_m: 100000,
        transportation_method: 'rail',
        package_mass_g: 50000,
        create_order: false
      }
    );
    const estimate = createEstimateResponse.data;

    expect(estimate.type).to.be.eq('shipping');
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.order).to.be.eq(null);
  });

  it('supports creating vehicle estimates without an order', async function () {
    const createEstimateResponse = await patch.estimates.createVehicleEstimate({
      distance_m: 100000,
      make: 'Toyota',
      model: 'Corolla',
      year: 2005,
      create_order: false
    });
    const estimate = createEstimateResponse.data;

    expect(estimate.type).to.be.eq('vehicle');
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.order).to.be.eq(null);
  });

  it('supports creating bitcoin estimates without parameters', async function () {
    const { data: estimate } = await patch.estimates.createBitcoinEstimate();

    expect(estimate.type).to.be.eq('bitcoin');
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
  });

  it('supports creating bitcoin estimates with a timestamp', async function () {
    const { data: estimate1 } = await patch.estimates.createBitcoinEstimate({
      timestamp: '2021-06-01T20:31:18.403Z'
    });
    const { data: estimate2 } = await patch.estimates.createBitcoinEstimate({
      timestamp: '2021-07-01T20:31:18.403Z'
    });

    expect(estimate1.mass_g).to.be.above(estimate2.mass_g); // BTC emitted less in July than in June
  });

  it('supports creating bitcoin estimates with a transaction value', async function () {
    const { data: estimate1 } = await patch.estimates.createBitcoinEstimate({
      transaction_value_btc_sats: 2000
    });
    const { data: estimate2 } = await patch.estimates.createBitcoinEstimate({
      transaction_value_btc_sats: 1000
    });

    expect(estimate1.mass_g).to.be.above(estimate2.mass_g);
  });

  it('supports creating bitcoin estimates with a daily balance', async function () {
    const { data: estimate1 } = await patch.estimates.createBitcoinEstimate({
      average_daily_balance_btc_sats: 1000000
    });
    const { data: estimate2 } = await patch.estimates.createBitcoinEstimate({
      average_daily_balance_btc_sats: 10000000
    });

    expect(estimate1.mass_g).to.be.below(estimate2.mass_g);
  });

  it('supports creating ethereum estimates with a gas value', async function () {
    const createEstimateResponse = await patch.estimates.createEthereumEstimate(
      {
        gas_used: 1000
      }
    );

    const estimate = createEstimateResponse.data;

    expect(estimate.type).to.be.eq('ethereum');
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
  });
});
