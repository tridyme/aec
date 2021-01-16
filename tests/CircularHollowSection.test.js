const {
  assert,
  ecart,
  tolerance
} = require('./Setup.test');
const { CircularHollowSection } = require('../calculations/SectionGeometry');
const circularHollowSectionsCases = require('./mocks/circular_hollow_sections.json');

describe('Circular Section Data tests', () => {
  for (let i = 0; i < circularHollowSectionsCases.length; i += 1) {
    describe('Section Properties', ()=> {
      const inputs = circularHollowSectionsCases[i].inputs;
      const sectionCharac = new CircularHollowSection(inputs.D, inputs.t);
      const targetOutputs = circularHollowSectionsCases[i].outputs;
      describe('xg', ()=> {
        assert.isBelow(ecart(sectionCharac.xg, targetOutputs.xg), tolerance);
      });
      describe('yg', ()=> {
        assert.isBelow(ecart(sectionCharac.yg, targetOutputs.yg), tolerance)
      })
      describe('area', ()=> {
        assert.isBelow(ecart(sectionCharac.area, targetOutputs.area), tolerance)
      })
    })
  }
})