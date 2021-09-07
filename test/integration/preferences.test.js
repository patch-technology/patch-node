import { expect } from 'chai';
import Patch from '../../dist/index';
const patch = Patch(process.env.SANDBOX_API_KEY);

async function getProjectId() {
  const retrieveProjectResponse = await patch.projects.retrieveProjects();
  return retrieveProjectResponse.data[0].id;
}

describe('Preferences Integration', async function () {
  it('supports creating, deleting, and listing preferences', async function () {
    const projectId = await getProjectId();

    let preferenceId;

    try {
      const createdPreference = await patch.preferences.createPreference({
        project_id: projectId
      });
      preferenceId = createdPreference.data.id;
    } catch (err) {
      if (
        !/Your organization already has a preferred project/.test(
          err.error.message
        )
      ) {
        throw err;
      }
      const preferencesList = await patch.preferences.retrievePreferences();
      preferenceId = preferencesList.data[0].id;
    }

    const preferencesList = await patch.preferences.retrievePreferences();
    expect(preferencesList.data.length).to.be.above(0);

    const preferencesResponse = await patch.preferences.retrievePreference(
      preferenceId
    );
    expect(preferencesResponse.data.id).to.eq(preferenceId);

    const deletePreferenceResponse =
      await patch.preferences.retrievePreferences(preferenceId);
    expect(deletePreferenceResponse.data[0].id).to.eq(preferenceId);
  });
});
