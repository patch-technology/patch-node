import { expect } from 'chai'
import Patch from '../../dist/index'
const patch = Patch(process.env.SANDBOX_API_KEY)

describe('Project Integration', function() {
  it('supports fetching the available projects', async function() {
    const { data } = await patch.projects.retrieveProjects()
    expect(data.length).to.be.above(0)
  })

  it('supports fetching a single project', async function() {
    const { data } = await patch.projects.retrieveProjects()
    const projectId = data[0].id
    const projectResponse = await patch.projects.retrieveProject(projectId)
    expect(projectResponse.data.id).to.equal(projectId)
  })
})
