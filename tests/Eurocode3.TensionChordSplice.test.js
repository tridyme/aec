const {
	assert,
	ecart,
	tolerance
} = require('./Setup.test');
const { Eurocode3 } = require('../calculations/SteelCalculation');
const cases = require('./mocks/eurocode3_tension_chord_splice_cases.json');

describe('Eurocode 3 TensionChordSplice tests', () => {
	cases.map(assembly => {
		const initialState = { ...assembly };
		const assemblyCalculation = new Eurocode3.TensionChordSplice({ initialState });
		console.log('STEEL ANALYSIS', assemblyCalculation.steelAnalysis);
		describe(`${assembly.name}: assembly check`, () => {
			describe('Csgrais', () => {
				assert.isBelow(ecart(assemblyCalculation.Csgrais(), assembly.Csgrais), tolerance);
			});
			describe('Fpt', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Fpt(), assembly.Fpt), tolerance);
			});
			describe('Fpv', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Fpv(), assembly.Fpv), tolerance);
			});
			describe('fu', ()=> {
				assert.isBelow(ecart(assemblyCalculation.fu(), assembly.fu), tolerance);
			});
			describe('alphad', ()=> {
				assert.isBelow(ecart(assemblyCalculation.alphad(), assembly.alphad), tolerance);
			});
			describe('alphab', ()=> {
				assert.isBelow(ecart(assemblyCalculation.alphab(), assembly.alphab), tolerance);
			});
			describe('k1', ()=> {
				assert.isBelow(ecart(assemblyCalculation.k1(), assembly.k1), tolerance);
			});
			describe('FpC', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FpC(), assembly.FpC), tolerance);
			});
			describe('FsRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FsRd(), assembly.FsRd), tolerance);
			});
			describe('FtRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FtRd(), assembly.FtRd), tolerance);
			});
			describe('FvRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FvRd(), assembly.FvRd), tolerance);
			});
			describe('FbRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FbRd(), assembly.FbRd), tolerance);
			});
			describe('FpRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FpRd(), assembly.FpRd), tolerance);
			});
			describe('Leffcp', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Leffcp(), assembly.Leffcp), tolerance);
			});
			describe('Leffnc', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Leffnc(), assembly.Leffnc), tolerance);
			});
			describe('Leff1', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Leff1(), assembly.Leff1), tolerance);
			});
			describe('Mpl1Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Mpl1Rd(), assembly.Mpl1Rd), tolerance);
			});
			describe('FT1Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FT1Rd(), assembly.FT1Rd), tolerance);
			});
			describe('Leff2', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Leff2(), assembly.Leff2), tolerance);
			});
			describe('Mpl2Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Mpl2Rd(), assembly.Mpl2Rd), tolerance);
			});
			describe('n', ()=> {
				assert.isBelow(ecart(assemblyCalculation.n(), assembly.n), tolerance);
			});
			describe('FT2Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FT2Rd(), assembly.FT2Rd), tolerance);
			});
			describe('FT3Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FT3Rd(), assembly.FT3Rd), tolerance);
			});
			describe('FT4Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FT4Rd(), assembly.FT4Rd), tolerance);
			});
			describe('FS1', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS1(), assembly.FS1), tolerance);
			});
			describe('FS2', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS2(), assembly.FS2), tolerance);
			});
			describe('FS3', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS3(), assembly.FS3), tolerance);
			});
			describe('FS4', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS4(), assembly.FS4), tolerance);
			});
			describe('FS5', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS5(), assembly.FS5), tolerance);
			});
			describe('FSmax', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FSmax(), assembly.FSmax), tolerance);
			});
		})
	})
})