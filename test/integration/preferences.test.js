import { expect } from 'chai'
import Patch from '../../dist/index'
const patch = Patch(process.env.SANDBOX_API_KEY)

describe('Preferences Integration', function() {
  it('supports create, delete, retrieve and list', async function() {
    const projectResponse = await patch.projects.retrieveProjects()
    expect(projectResponse.data.length).to.be.above(0)

    const projectId = projectResponse.data[0].id
    const createPreferenceResponse = await patch.preferences.createPreference({ project_id: projectId })
    const preferenceId = createPreferenceResponse.data.id
    const retrievePreferenceResponse = await patch.preferences.retrievePreference(preferenceId)
    expect(retrievePreferenceResponse.data.id).to.equal(preferenceId)

    const retrievePreferencesResponse = await patch.preferences.retrievePreferences({ page: 1 })
    expect(retrievePreferencesResponse.data[0].id).to.equal(preferenceId)

    const deletePreferenceResponse = await patch.preferences.deletePreference(preferenceId)
    expect(deletePreferenceResponse.data.id).to.equal(preferenceId)
  })
})
