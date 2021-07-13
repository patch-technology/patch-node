import { expect } from 'chai';
import Patch from '../../dist/index';
const patch = Patch(process.env.SANDBOX_API_KEY);

describe('Estimates Integration', function () {
  it('supports create, retrieve and list', async function () {
    const createEstimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100
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

  it('supports creating flight estimates with an order', async function () {
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

  it('supports creating shipping estimates without an order', async function () {
    const createEstimateResponse = await patch.estimates.createShippingEstimate(
      {
        distance_m: 1000000,
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
      distance_m: 1000000,
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

  it('supports creating bitcoin estimates without an order', async function () {
    const createEstimateResponse = await patch.estimates.createBitcoinEstimate({
      create_order: false
    });

    const estimate = createEstimateResponse.data;

    expect(estimate.type).to.be.eq('bitcoin');
    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
    expect(estimate.order).to.be.eq(null);
  });
});
