const {
	assert,
	ecart,
	tolerance
} = require('./Setup.test');
const { Eurocode3 } = require('../calculations/SteelCalculation');
const cases = require('./mocks/eurocode3_splice_plate_cases.json');

describe('Eurocode 3 SplicePlate tests', () => {
	cases.map(assembly => {
		const initialState = { ...assembly };
		const assemblyCalculation = new Eurocode3.SplicePlate({ initialState });
		describe(`${assembly.name}: assembly check`, () => {
			describe('FvSd', () => {
				assert.isBelow(ecart(assemblyCalculation.FvSd(), assembly.FvSd), tolerance);
			});
			describe('FvRd', () => {
				assert.isBelow(ecart(assemblyCalculation.FvRd(), assembly.FvRd), tolerance);
			});
			describe('VRd1', () => {
				assert.isBelow(ecart(assemblyCalculation.VRd1(), assembly.VRd1), tolerance);
			});
			describe('alpha', () => {
				assert.isBelow(ecart(assemblyCalculation.alpha(), assembly.alpha), tolerance);
			});
			describe('Fbrd', () => {
				assert.isBelow(ecart(assemblyCalculation.Fbrd(), assembly.Fbrd), tolerance);
			});
			describe('VRd2', () => {
				assert.isBelow(ecart(assemblyCalculation.VRd2(), assembly.VRd2), tolerance);
			});
			describe('VRd', () => {
				assert.isBelow(ecart(assemblyCalculation.VRd(), assembly.VRd), tolerance);
			});
			describe('Araw', () => {
				assert.isBelow(ecart(assemblyCalculation.Araw(), assembly.Araw), tolerance);
			});
			describe('Anet', () => {
				assert.isBelow(ecart(assemblyCalculation.Anet(), assembly.Anet), tolerance);
			});
			describe('Npl', () => {
				assert.isBelow(ecart(assemblyCalculation.Npl(), assembly.Npl), tolerance);
			});
			describe('Nu', () => {
				assert.isBelow(ecart(assemblyCalculation.Nu(), assembly.Nu), tolerance);
			});
		})
	})
})