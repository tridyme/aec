/* const {
  assert,
  ecart,
  tolerance
} = require('./Setup.test');
const { CustomSection } = require('../calculations/SectionGeometry');
const customSectionsCases = require('./mocks/custom_sections.json');

describe('Custom Section Data tests', () => {
  for (let i = 0; i < customSectionsCases.length; i += 1) {
    describe('Section Properties', ()=> {
      const inputs = customSectionsCases[i].inputs;
      console.log(inputs)
      const sectionCharac = new CustomSection(inputs.sectionext, inputs.sectionint);
      const calculatedOutputs = {
        xg: sectionCharac.xg,
        yg: sectionCharac.yg,
        area: sectionCharac.area
      };
      console.log(calculatedOutputs);
      const targetOutputs = customSectionsCases[i].outputs;
      console.log(targetOutputs);
      describe('xg', ()=> {
        assert.isBelow(ecart(calculatedOutputs.xg, targetOutputs.xg), tolerance);
      });
      describe('yg', ()=> {
        assert.isBelow(ecart(calculatedOutputs.yg, targetOutputs.yg), tolerance)
      });
      describe('area', ()=> {
        assert.isBelow(ecart(calculatedOutputs.area, targetOutputs.area), tolerance);
      });
    })
  }
}) */
