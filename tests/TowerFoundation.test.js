const {
  assert,
  ecart,
  tolerance
} = require('./Setup.test');
const { TowerFoundation } = require('../calculations/Foundation');
const cases = require('./mocks/towerfoundation_cases.json');


describe('Tower Foundation Data tests', () => {
  cases.map((foundation) => {
    describe(`${foundation.name}`, () => {
      const towerFoundation = new TowerFoundation(foundation);
      describe('MEls:', () => {
        assert.isBelow(ecart(towerFoundation.MEls(), foundation.MEls), tolerance);
      });
      describe('TEls:', () => {
        assert.isBelow(ecart(towerFoundation.TEls(), foundation.TEls), tolerance);
      });
      // describe('CrEls:', () => {
      //   console.log('CrEls', towerFoundation.CrEls());
      //   console.log('CrEls', foundation.CrEls)
      //   assert.isBelow(ecart(towerFoundation.CrEls(), foundation.CrEls), tolerance);
      // });
      // describe('MrEls:', () => {
      //   assert.isBelow(ecart(towerFoundation.MrEls(), foundation.MrEls), tolerance);
      // });
      // describe('eEls:', () => {
      //   assert.isBelow(ecart(towerFoundation.eEls(), foundation.eEls), tolerance);
      // });
      // describe('Bon6Els:', () => {
      //   assert.isBelow(ecart(towerFoundation.Bon6Els(), foundation.Bon6Els), tolerance);
      // });
      // describe('LcEls:', () => {
      //   assert.isBelow(ecart(towerFoundation.LcEls(), foundation.LcEls), tolerance);
      // });
    });
  })
});