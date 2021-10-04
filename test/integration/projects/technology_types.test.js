import { expect } from 'chai';
import Patch from '../../../dist/index';
const patch = Patch(process.env.SANDBOX_API_KEY);

describe('Projects TechnologyTypes Integration', function () {
  it.only('supports fetching the available technology_types', async function () {
    const { data } = await patch.technologytypes.retrieveTechnologyTypes();
    expect(data.length).to.be.above(0);
    expect(data[0].name).to.be.a('string');
    expect(data[0].slug).to.be.a('string');
    expect(data[0].parent_technology_type.slug).to.be.a('string');
    expect(data[0].parent_technology_type.name).to.be.a('string');
  });
});
