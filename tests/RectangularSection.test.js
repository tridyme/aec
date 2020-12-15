const {
  assert,
  ecart,
  tolerance
} = require('./Setup.test');
const { RectangularSection } = require('../calculations/SectionGeometry');
const rectangularSectionsCases = require('./mocks/rectangular_sections.json');

describe('Rectangular Section Data tests', () => {
  for (let i = 0; i < rectangularSectionsCases.length; i += 1) {
    describe('Section Properties', ()=> {
      const inputs = rectangularSectionsCases[i].inputs;
      console.log(inputs)
      const sectionCharac = new RectangularSection(inputs.h, inputs.b);
      const calculatedOutputs = {
        xg: sectionCharac.xg,
        yg: sectionCharac.yg,
        area: sectionCharac.area
      };
      console.log(calculatedOutputs);
      const targetOutputs = rectangularSectionsCases[i].outputs;
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
})