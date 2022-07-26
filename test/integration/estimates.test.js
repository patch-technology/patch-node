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

  it('supports creating hotel estimates', async function () {
    const createEstimateResponse = await patch.estimates.createHotelEstimate({
      country_code: 'US',
      city: 'New York',
      region: 'New York',
      star_rating: 5,
      number_of_nights: 2,
      number_of_rooms: 2
    });
    const estimate = createEstimateResponse.data;

    expect(estimate.type).to.be.eq('hotel');
    expect(estimate.mass_g).to.be.above(150_000);
    expect(estimate.production).to.be.eq(false);
  });

  it('supports creating air shipping estimates from distance', async function () {
    const createEstimateResponse =
      await patch.estimates.createAirShippingEstimate({
        distance_m: 292_630,
        freight_mass_g: 24_091
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(5_000);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_air');
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
    expect(estimate.mass_g).to.be.above(5_000);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_air');
  });

  it('supports creating air shipping estimates with an order', async function () {
    const createEstimateResponse =
      await patch.estimates.createAirShippingEstimate({
        create_order: true,
        distance_m: 292_630,
        freight_mass_g: 24_091
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order.amount).to.be.above(500);
    expect(estimate.mass_g).to.be.above(5_000);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_air');
  });

  it('supports creating rail shipping estimates from distance', async function () {
    const createEstimateResponse =
      await patch.estimates.createRailShippingEstimate({
        distance_m: 1_531_994,
        freight_mass_g: 23_845
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(400);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_rail');
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
    expect(estimate.mass_g).to.be.above(300);
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
    expect(estimate.mass_g).to.be.above(800);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_rail');
  });

  it('supports creating rail shipping estimates with an order', async function () {
    const createEstimateResponse =
      await patch.estimates.createRailShippingEstimate({
        create_order: true,
        distance_m: 3_920_298,
        freight_mass_g: 19_217
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order.amount).to.be.above(200);
    expect(estimate.mass_g).to.be.above(1_000);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_rail');
  });

  it('supports creating road shipping estimates from distance', async function () {
    const createEstimateResponse =
      await patch.estimates.createRoadShippingEstimate({
        distance_m: 2_300_167,
        freight_mass_g: 20_738
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(5_000);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_road');
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
    expect(estimate.mass_g).to.be.above(500);
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
    expect(estimate.mass_g).to.be.above(5_000);
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

    expect(estimate.order.amount).to.be.above(500);
    expect(estimate.mass_g).to.be.above(5_000);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_road');
  });

  it('supports creating sea shipping estimates from distance', async function () {
    const createEstimateResponse =
      await patch.estimates.createSeaShippingEstimate({
        distance_m: 4_309_118,
        freight_mass_g: 20_197
      });
    const estimate = createEstimateResponse.data;

    expect(estimate.order).to.be.eq(null);
    expect(estimate.mass_g).to.be.above(2_000);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_sea');
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
    expect(estimate.mass_g).to.be.above(500);
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
    expect(estimate.mass_g).to.be.above(1_000);
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

    expect(estimate.order.amount).to.be.above(500);
    expect(estimate.mass_g).to.be.above(1_500);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.type).to.be.eq('shipping_sea');
  });
});
