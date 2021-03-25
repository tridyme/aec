const {
  assert,
  ecart,
  tolerance
} = require('./Setup.test');
const { Eurocode3 } = require('../calculations/SteelCalculation');
const cases = require('./mocks/eurocode3_tension_chord_splice_cases.json');

describe('Eurocode 3 TensionChordSplice tests', () => {
	cases.map(assembly => {
		const initialState = {
			As: assembly.As,
			fyb : assembly.fyb,
			ftmax: assembly.ftmax,
			ffmax:assembly.ffmax,
			p: assembly.p,
			d: assembly.d,
			dm: assembly.dm,
			ks: assembly.ks,
			ftmin: assembly.ftmin,
			gammaM3: assembly.gammaM3,
			FtEd: assembly.FtEd,
			fy: assembly.fy,
			fu: assembly.fu,
			steelQualityClass: assembly.steelQualityClass,
			d0: assembly.d0,
			e1: assembly.e1,
			fub: assembly.fub,
			e2: assembly.e2,
			gammaM2: assembly.gammaM2,
			kb: assembly.kb,
			t: assembly.t,
			alphab: assembly.alphab,
			k1: assembly.k1,
			m: assembly.m,
			p1: aassembly.p1,
			p2: assembly.p2,
			e: assembly.e,
			D: assembly.D,
			tf: assembly.tf,
			gammaM0: assembly.gammaM0,
			numberBolts: assembly.numberBolts,
			DFlange: assembly.DFlange,
			eFlange: assembly.eFlange,
			FvEd: assembly.FvEd
		}
		const assemblyCalculation = new Eurocode3.TensionChordSplice({ intialState });
		console.log('STEEL ANALYSIS', assemblyCalculation.steelAnalysis);
		describe(`${assembly.name}: assembly check`, ()=> {
			describe('Csgrais', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Csgrais(), assembly.Csgrais), tolerance);
			});
			/*
			describe('Fpt', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Fpt(), aassembly.Fpt), tolerance);
			});
			describe('Fpv', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Fpv(), aassembly.Fpv), tolerance);
			});
			describe('fu', ()=> {
				assert.isBelow(ecart(assemblyCalculation.fu(), aassembly.fu), tolerance);
			});
			describe('alphad', ()=> {
				assert.isBelow(ecart(assemblyCalculation.alphad(), aassembly.alphad), tolerance);
			});
			describe('alphab', ()=> {
				assert.isBelow(ecart(assemblyCalculation.alphab(), aassembly.alphab), tolerance);
			});
			describe('k1', ()=> {
				assert.isBelow(ecart(assemblyCalculation.k1(), aassembly.k1), tolerance);
			});
			describe('k2', ()=> {
				assert.isBelow(ecart(assemblyCalculation.k2(), aassembly.k2), tolerance);
			});
			describe('FpC', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FpC(), aassembly.FpC), tolerance);
			});
			describe('FsRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FsRd(), aassembly.FsRd), tolerance);
			});
			describe('FtRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FtRd(), aassembly.FtRd), tolerance);
			});
			describe('FvRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FvRd(), aassembly.FvRd), tolerance);
			});
			describe('FbRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FbRd(), aassembly.FbRd), tolerance);
			});
			describe('FpRd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FpRd(), aassembly.FpRd), tolerance);
			});
			describe('Leffcp', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Leffcp(), aassembly.Leffcp), tolerance);
			});
			describe('Leffnc', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Leffnc(), aassembly.Leffnc), tolerance);
			});
			describe('Leff1', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Leff1(), aassembly.Leff1), tolerance);
			});
			describe('tf', ()=> {
				assert.isBelow(ecart(assemblyCalculation.tf(), aassembly.tf), tolerance);
			});
			describe('Mpl1Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Mpl1Rd(), aassembly.Mpl1Rd), tolerance);
			});
			describe('FT1Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FT1Rd(), aassembly.FT1Rd), tolerance);
			});
			describe('Leff2', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Leff2(), aassembly.Leff2), tolerance);
			});
			describe('Mpl2Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.Mpl2Rd(), aassembly.Mpl2Rd), tolerance);
			});
			describe('n', ()=> {
				assert.isBelow(ecart(assemblyCalculation.n(), aassembly.n), tolerance);
			});
			describe('FT2Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FT2Rd(), aassembly.FT2Rd), tolerance);
			});
			describe('FT3Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FT3Rd(), aassembly.FT3Rd), tolerance);
			});
			describe('FT4Rd', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FT4Rd(), aassembly.FT4Rd), tolerance);
			});
			describe('FS1', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS1(), aassembly.FS1), tolerance);
			});
			describe('FS2', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS2(), aassembly.FS2), tolerance);
			});
			describe('FS3', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS3(), aassembly.FS3), tolerance);
			});
			describe('FS4', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS4(), aassembly.FS4), tolerance);
			});
			describe('FS5', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FS5(), aassembly.FS5), tolerance);
			});
			describe('FSmax', ()=> {
				assert.isBelow(ecart(assemblyCalculation.FSmax(), aassembly.FSmax), tolerance);
			}); */
		})
	})
})