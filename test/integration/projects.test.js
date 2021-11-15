import { expect } from 'chai';
import Patch from '../../dist/index';
const patch = Patch(process.env.SANDBOX_API_KEY);

describe('Project Integration', function () {
  it('supports fetching the available projects', async function () {
    const { data } = await patch.projects.retrieveProjects();
    expect(data.length).to.be.above(0);
  });

  it('supports fetching a single project', async function () {
    const { data } = await patch.projects.retrieveProjects();
    const projectId = data[0].id;
    const projectResponse = await patch.projects.retrieveProject(projectId);
    expect(projectResponse.data.id).to.equal(projectId);

    // tagline can be null but should always be present in the payload
    expect(projectResponse.data).to.be.have.property('tagline');

    expect(projectResponse.data.mechanism).to.be.a('string');
    expect(projectResponse.data.latitude).to.be.a('number');
    expect(projectResponse.data.longitude).to.be.a('number');
    expect(projectResponse.data.highlights).to.be.an('array');

    const technology_type = projectResponse.data.technology_type;
    expect(technology_type.slug).to.be.a('string');
    expect(technology_type.name).to.be.a('string');

    const parent_technology_type = technology_type.parent_technology_type;
    expect(parent_technology_type.slug).to.be.a('string');
    expect(parent_technology_type.name).to.be.a('string');
  });

  it('supports fetching all projects from the United States', async function () {
    const country = 'US';
    const { data } = await patch.projects.retrieveProjects({ country });
    data.map((project) => {
      expect(project.country).to.equal(country);
    });
  });

  it('supports fetching all biomass projects', async function () {
    const type = 'biomass';
    const { data } = await patch.projects.retrieveProjects({ type });
    data.map((project) => {
      expect(project.type).to.equal(type);
    });
  });

  it('supports fetching all projects with more than 100 grams of available inventory', async function () {
    const minimumAvailableMass = 100;
    const { data } = await patch.projects.retrieveProjects({
      minimumAvailableMass
    });
    data.map((project) => {
      expect(project.remaining_mass_g >= minimumAvailableMass).to.be.true;
    });
  });
});
