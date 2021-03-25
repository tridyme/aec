/* const {
  assert,
  ecart,
  tolerance
} = require('./Setup.test');
const { CircularHollowSection } = require('../calculations/SectionGeometry');
const cases = require('./mocks/circular_hollow_sections.json');

describe('Circular Section Data tests', () => {
  cases.map(section => {
    describe('Section Properties', ()=> {
      const sectionCharac = new CircularHollowSection(section);
      describe('yg', ()=> {
        assert.isBelow(ecart(sectionCharac.yg, section.yg), tolerance);
      });
      describe('zg', ()=> {
        assert.isBelow(ecart(sectionCharac.zg, section.zg), tolerance)
      })
      describe('A', ()=> {
        assert.isBelow(ecart(sectionCharac.A, section.A), tolerance)
      })
    })
  })
}) */