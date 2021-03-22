const {
	assert,
	ecart,
	tolerance
} = require('./Setup.test');
const { Eurocode3 } = require('../calculations/SteelCalculation');
const cases = require('./mocks/eurocode3_tension_chord_splice_cases.json');

describe('Eurocode 3 TensionChordSplice tests', () => {
	cases.map(assemblage => {
		const initialState = { ...assemblage };
		const assemblageCalculation = new Eurocode3.TensionChordSplice({ initialState });
		describe(`${assemblage.name}:`, () => {
			describe('FtRd', () => {
				assert.isBelow(ecart(assemblageCalculation.FtRd(), assemblage.FtRd), tolerance);
			});
			describe('FvRd', () => {
				assert.isBelow(ecart(assemblageCalculation.FvRd(), assemblage.FvRd), tolerance);
			});
		})
	})
})