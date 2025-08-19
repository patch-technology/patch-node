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

    const retrieveEstimateResponse =
      await patch.estimates.retrieveEstimate(estimateId);
    expect(retrieveEstimateResponse.data.id).to.equal(estimateId);
    expect(retrieveEstimateResponse.data.order.state).to.equal('reserved');

    const retrieveEstimatesResponse = await patch.estimates.retrieveEstimates({
      page: 1
    });
    expect(retrieveEstimatesResponse.data.length).to.be.above(0);
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

  it('supports creating air shipping estimates from airports', async function () {
    const createEstimateResponse =
      await patch.estimates.createAirShippingEstimate({
        destination_airport: 'JFK',
        freight_mass_g: 19_158,
        origin_airport: 'ATL'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_air');
  });

  it('supports creating air shipping estimates with an order', async function () {
    const createEstimateResponse =
      await patch.estimates.createAirShippingEstimate({
        create_order: true,
        destination_airport: 'BOS',
        distance_m: 292_630,
        freight_mass_g: 24_091,
        origin_airport: 'MIA'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order.amount).to.be.above(0);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_air');
  });

  it('supports creating rail shipping estimates from addresses', async function () {
    const createEstimateResponse =
      await patch.estimates.createRailShippingEstimate({
        destination_country_code: 'US',
        destination_postal_code: '90210',
        freight_mass_g: 18_092,
        origin_country_code: 'US',
        origin_postal_code: '97209'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_rail');
  });

  it('supports creating rail shipping estimates from locodes', async function () {
    const createEstimateResponse =
      await patch.estimates.createRailShippingEstimate({
        destination_locode: 'USSD2',
        freight_mass_g: 18_092,
        origin_locode: 'USSEA'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_rail');
  });

  it('supports creating rail shipping estimates with an order', async function () {
    const createEstimateResponse =
      await patch.estimates.createRailShippingEstimate({
        create_order: true,
        destination_locode: 'USSD2',
        freight_mass_g: 19_217,
        origin_locode: 'USSEA'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order.amount).to.be.above(0);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_rail');
  });

  it('supports creating road shipping estimates from addresses', async function () {
    const createEstimateResponse =
      await patch.estimates.createRoadShippingEstimate({
        destination_country_code: 'US',
        destination_postal_code: '90210',
        freight_mass_g: 19_166,
        origin_country_code: 'US',
        origin_postal_code: '97209'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_road');
  });

  it('supports creating road shipping estimates from locodes', async function () {
    const createEstimateResponse =
      await patch.estimates.createRoadShippingEstimate({
        destination_locode: 'USSD2',
        freight_mass_g: 16_907,
        origin_locode: 'USSEA'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_road');
  });

  it('supports creating road shipping estimates with an order', async function () {
    const createEstimateResponse =
      await patch.estimates.createRoadShippingEstimate({
        create_order: true,
        destination_locode: 'USSD2',
        freight_mass_g: 21_933,
        origin_locode: 'USSEA'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order.amount).to.be.above(0);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_road');
  });

  it('supports creating sea shipping estimates from addresses', async function () {
    const createEstimateResponse =
      await patch.estimates.createSeaShippingEstimate({
        destination_country_code: 'US',
        destination_postal_code: '90210',
        freight_mass_g: 26_906,
        origin_country_code: 'US',
        origin_postal_code: '97209'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_sea');
  });

  it('supports creating sea shipping estimates from locodes', async function () {
    const createEstimateResponse =
      await patch.estimates.createSeaShippingEstimate({
        destination_locode: 'USSEA',
        freight_mass_g: 17_311,
        origin_locode: 'HKHKG'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_sea');
  });

  it('supports creating sea shipping estimates with an order', async function () {
    const createEstimateResponse =
      await patch.estimates.createSeaShippingEstimate({
        create_order: true,
        destination_locode: 'USSEA',
        freight_mass_g: 26_210,
        origin_locode: 'HKHKG'
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order.amount).to.be.above(0);
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_sea');
  });
});
