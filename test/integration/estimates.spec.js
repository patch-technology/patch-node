import { expect } from 'chai'
import Patch from '../../dist/index'
const patch = Patch(process.env.SANDBOX_API_KEY)

describe('Estimates Integration', function () {
  it('supports create, retrieve and list', async function () {
    const createEstimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100
    })
    const estimateId = createEstimateResponse.data.id

    const retrieveEstimateResponse = await patch.estimates.retrieveEstimate(
      estimateId
    )
    expect(retrieveEstimateResponse.data.id).to.equal(estimateId)

    const retrieveEstimatesResponse = await patch.estimates.retrieveEstimates({
      page: 1
    })
    expect(retrieveEstimatesResponse.data.length).to.be.above(0)
  })

  it('supports create with a specific project', async function () {
    const { data } = await patch.projects.retrieveProjects()
    const projectId = data[0].id

    const createEstimateResponse = await patch.estimates.createMassEstimate({
      mass_g: 100,
      project_id: projectId
    })

    expect(createEstimateResponse.success).to.equal(true)
    expect(createEstimateResponse.data.id).not.to.be.empty
    expect(createEstimateResponse.data.order.mass_g).to.eq(100)
  })
})
