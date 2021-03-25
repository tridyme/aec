/* const {
  assert,
  ecart,
  tolerance
} = require('./Setup.test');
const { BoxSection } = require('../calculations/SectionGeometry');
const cases = require('./mocks/box_sections.json');

describe('Box Section Data tests', () => {
  cases.map(section => {
    describe('Section Properties', ()=> {
      const sectionCharac = new BoxSection(section);
      describe('yg', ()=> {
        assert.isBelow(ecart(sectionCharac.yg, section.yg), tolerance);
      });
      describe('zg', ()=> {
        assert.isBelow(ecart(sectionCharac.zg, section.zg), tolerance)
      })
      describe('A', ()=> {
        assert.isBelow(ecart(sectionCharac.A, section.A), tolerance)
      })
      describe('Av', ()=> {
        assert.isBelow(ecart(sectionCharac.Av, section.Av), tolerance)
      })
      describe('Iy', ()=> {
        assert.isBelow(ecart(sectionCharac.Iy, section.Iy), tolerance)
      })
      describe('Iz', ()=> {
        assert.isBelow(ecart(sectionCharac.Iz, section.Iz), tolerance)
      })
      describe('It', ()=> {
        assert.isBelow(ecart(sectionCharac.It, section.It), tolerance)
      })
      describe('Iw', ()=> {
        assert.isBelow(ecart(sectionCharac.Iw, section.Iw), tolerance)
      })
      describe('Wely', ()=> {
        assert.isBelow(ecart(sectionCharac.Wely, section.Wely), tolerance)
      })
      describe('Welz', ()=> {
        assert.isBelow(ecart(sectionCharac.Welz, section.Welz), tolerance)
      })
      describe('Wply', ()=> {
        assert.isBelow(ecart(sectionCharac.Wply, section.Wply), tolerance)
      })
      describe('Wplz', ()=> {
        assert.isBelow(ecart(sectionCharac.Wplz, section.Wplz), tolerance)
      })
    })
  })
}) */