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

    const retrieveEstimatesResponse = await patch.estimates.retrieveEstimates({
      page: 1
    });
    expect(retrieveEstimatesResponse.data.length).to.be.above(0);
  });

  it('supports creating flight estimates', async function () {
    const createEstimateResponse = await patch.estimates.createFlightEstimate({
      distance_m: 1000
    });
    const estimate = createEstimateResponse.data;

    expect(estimate.mass_g).to.be.above(0);
    expect(estimate.production).to.be.eq(false);
  });
});
