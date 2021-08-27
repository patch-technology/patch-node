import { expect } from 'chai';
import Patch from '../../dist/index';
const patch = Patch(process.env.SANDBOX_API_KEY);

describe('Preferences Integration', async function () {
  it('supports creating, deleting, and listing preferences', async function () {
    const preferencesList = await patch.preferences.retrievePreferences();

    // If there is an existing preference, delete it and create a new one with the same
    // project id. If there is not any existing preferences, create and delete one with
    // any project id.
    if (preferencesList.data.length > 0) {
      const preference = preferencesList.data[0];
      const projectId = preference.project.id;

      await patch.preferences.deletePreference(preference.id);
      const createdPreference = await patch.preferences.createPreference({
        project_id: projectId
      });

      expect(createdPreference.data.project.id).to.eq(projectId);

      const preferencesList2 = await patch.preferences.retrievePreferences();
      expect(preferencesList2.data.length).to.be.above(0);
    } else {
      const projectResponse = await patch.projects.retrieveProjects();
      expect(projectResponse.data.length).to.be.above(0);
      const projectId = projectResponse.data[0].id;

      const createdPreference = await patch.preferences.createPreference({
        project_id: projectId
      });

      console.log(createdPreference);

      expect(createdPreference.data.projectId).to.eq(projectId);

      const preferencesList2 = await patch.preferences.retrievePreferences();
      const preferencesCount = preferencesList2.data.length;
      expect(preferencesList2.data.length).to.be.above(0);

      await patch.preferences.deletePreference(preference.id);

      const preferencesList3 = await patch.preferences.retrievePreferences();
      expect(preferencesList3.data.length).to.eq(preferencesCount - 1);
    }
  });
});
