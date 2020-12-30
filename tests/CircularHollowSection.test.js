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
      console.log(inputs)
      const sectionCharac = new CircularHollowSection(inputs.D, inputs.t);
      const calculatedOutputs = {
        xg: sectionCharac.xg,
        yg: sectionCharac.yg
      };
      console.log(calculatedOutputs);
      const targetOutputs = circularHollowSectionsCases[i].outputs;
      console.log(targetOutputs);
      describe('xg', ()=> {
        assert.isBelow(ecart(calculatedOutputs.xg, targetOutputs.xg), tolerance);
      });
      describe('yg', ()=> {
        assert.isBelow(ecart(calculatedOutputs.yg, targetOutputs.yg), tolerance)
      })
    })
  }
})