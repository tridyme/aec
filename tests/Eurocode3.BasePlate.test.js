const {
	assert,
	ecart,
	tolerance
} = require('./Setup.test');
const { Eurocode3 } = require('../calculations/SteelCalculation');
const cases = require('./mocks/eurocode3_base_plate_cases.json');

describe('Eurocode 3 Base Plate tests', () => {
	cases.map(assembly => {
		const initialState = { ...assembly };
		const assemblyCalculation = new Eurocode3.BasePlate({ initialState });
		describe(`${assembly.name}: assembly check`, () => {
			describe('A', () => {
				assert.isBelow(ecart(assemblyCalculation.A(), assembly.A), tolerance);
			});
			describe('de', () => {
				assert.isBelow(ecart(assemblyCalculation.de(), assembly.de), tolerance);
			});
			describe('Ie', () => {
				assert.isBelow(ecart(assemblyCalculation.Ie(), assembly.Ie), tolerance);
			});
			describe('fbd', () => {
				assert.isBelow(ecart(assemblyCalculation.fbd(), assembly.fbd), tolerance);
			});
			describe('fcd', () => {
				assert.isBelow(ecart(assemblyCalculation.fcd(), assembly.fcd), tolerance);
			});
			describe('alphaBc', () => {
				assert.isBelow(ecart(assemblyCalculation.alphaBc(), assembly.alphaBc), tolerance);
			});
			describe('a3', () => {
				assert.isBelow(ecart(assemblyCalculation.a3(), assembly.a3), tolerance);
			});
			describe('e', () => {
				assert.isBelow(ecart(assemblyCalculation.e(), assembly.e), tolerance);
			});
			describe('Msd', () => {
				console.log('MSD1', assemblyCalculation.Msd())
				console.log('MSD2', assembly.Msd)
				assert.isBelow(ecart(assemblyCalculation.Msd(), assembly.Msd), tolerance);
			});
			describe('sigmaF', () => {
				assert.isBelow(ecart(assemblyCalculation.sigmaF(), assembly.sigmaF), tolerance);
			});
		})
	})
})