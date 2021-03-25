// const {
//   assert,
//   ecart,
//   tolerance
// } = require('./Setup.test');
// const { Eurocode3 } = require('../calculations/SteelCalculation');
// const cases = require('./mocks/eurocode3_cases.json');

// describe('Eurocode 3 tests', () => {
//   cases.map(section => {
// 		const geometry = {
// 			h: section.h,
// 			b: section.b,
// 			tw: section.tw,
// 			tf: section.tf,
// 			c: section.c,
// 			d: section.d,
// 			D: section.D,
// 			t: section.t,
// 			L: section.L,
// 			Lcry: section.Lcry,
// 			Lcrz: section.Lcrz,
// 			bucklingCurvey: section.bucklingCurvey,
// 			bucklingCurvez: section.bucklingCurvez,
// 			bucklingCurveLT: section.bucklingCurveLT,
// 			C1: section.C1,
// 			C2: section.C2,
// 			class: section.class
// 		}
// 		const material = {
// 			Es: section.E,
// 			fyk: section.fyk,
// 			gammaM0: section.gammaM0,
// 			gammaM1: section.gammaM1,
// 			G: section.G
// 		}

// 		const loads = {
// 			Ned: section.Ned,
// 			Myed: section.Myed,
// 			Mzed: section.Mzed,
// 			Ved: section.Ved,
// 			Ted: section.Ted,
// 			psiy: section.psiy, // Ratio des Moments top/toe
// 			psiz: section.psiz, // Ratio des Moments top/toe
// 			MDy: section.MDy,
// 			MDz: section.MDz,
// 			deltay: section.deltay,
// 			deltaz: section.deltaz
// 		}
// 		const sectionType = section.sectionTypes;
// 		const sectionCharac = new Eurocode3({ geometry, material, loads, sectionType });
// 		console.log('STEEL ANALYSIS', sectionCharac.steelAnalysis);
//     describe(`${section.sectionName}: Section Properties`, ()=> {
// 			describe('yg', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.yg, section.yg), tolerance);
//       });
//       describe('zg', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.zg, section.zg), tolerance)
//       })
//       describe('A', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.A, section.A), tolerance)
//       })
//       describe('Av', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.Av, section.Av), tolerance)
//       })
//       describe('Iy', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.Iy, section.Iy), tolerance)
//       })
//       describe('Iz', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.Iz, section.Iz), tolerance)
//       })
//       describe('It', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.It, section.It), tolerance)
//       })
//       describe('Wely', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.Wely, section.Wely), tolerance)
//       })
//       describe('Welz', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.Welz, section.Welz), tolerance)
//       })
//       describe('Wply', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.Wply, section.Wply), tolerance)
//       })
//       describe('Wplz', ()=> {
//         assert.isBelow(ecart(sectionCharac.sectionData.Wplz, section.Wplz), tolerance)
//       })
// 		})
// 		describe(`${section.sectionName}: Column Buckling`, ()=> {
//       describe('alphay', ()=> {
//         assert.isBelow(ecart(sectionCharac.alphay(), section.alphay), tolerance);
// 			});
// 			describe('alphaz', ()=> {
//         assert.isBelow(ecart(sectionCharac.alphaz(), section.alphaz), tolerance);
// 			});
// 			describe('Ncry', ()=> {
// 				assert.isBelow(ecart(sectionCharac.Ncry(), section.Ncry), tolerance);
// 			});
// 			describe('Ncrz', ()=> {
//         assert.isBelow(ecart(sectionCharac.Ncrz(), section.Ncrz), tolerance);
// 			});
// 			describe('lambday', ()=> {
// 				assert.isBelow(ecart(sectionCharac.lambday(), section.lambday), tolerance);
// 			});
// 			describe('lambdaz', ()=> {
//         assert.isBelow(ecart(sectionCharac.lambdaz(), section.lambdaz), tolerance);
// 			});
// 			describe('phiy', ()=> {
//         assert.isBelow(ecart(sectionCharac.phiy(), section.phiy), tolerance);
// 			});
// 			describe('phiz', ()=> {
//         assert.isBelow(ecart(sectionCharac.phiz(), section.phiz), tolerance);
// 			});
// 			describe('ksiy', ()=> {
//         assert.isBelow(ecart(sectionCharac.ksiy(), section.ksiy), tolerance);
// 			});
// 			describe('ksiz', ()=> {
//         assert.isBelow(ecart(sectionCharac.ksiz(), section.ksiz), tolerance);
//       });
// 		})
// 		describe(`${section.sectionName}: Lateral Torsional Buckling`, ()=> {
//       describe('alphaLT', ()=> {
//         assert.isBelow(ecart(sectionCharac.alphaLT(), section.alphaLT), tolerance);
// 			});
// 			describe('Mcr', ()=> {
//         assert.isBelow(ecart(sectionCharac.Mcr(), section.Mcr), tolerance);
// 			});
// 			describe('lambdaLT', ()=> {
//         assert.isBelow(ecart(sectionCharac.lambdaLT(), section.lambdaLT), tolerance);
// 			});
// 			describe('phiLT', ()=> {
//         assert.isBelow(ecart(sectionCharac.phiLT(), section.phiLT), tolerance);
// 			});
// 			describe('ksiLT', ()=> {
//         assert.isBelow(ecart(sectionCharac.ksiLT(), section.ksiLT), tolerance);
// 			});
// 		})
// 		describe(`${section.sectionName}: Moment factors`, ()=> {
//       describe('Cmy0', ()=> {
//         assert.isBelow(ecart(sectionCharac.Cmy0(), section.Cmy0), tolerance);
// 			});
// 			describe('Cmz0', ()=> {
//         assert.isBelow(ecart(sectionCharac.Cmz0(), section.Cmz0), tolerance);
// 			});
// 			describe('CmLT', ()=> {
//         assert.isBelow(ecart(sectionCharac.CmLT(), section.CmLT), tolerance);
// 			});
//     })
// 		describe(`${section.sectionName}: Shear`, ()=> {
//       describe('VplRd', ()=> {
//         assert.isBelow(ecart(sectionCharac.VplRd(), section.VplRd), tolerance);
// 			});
// 			describe('SFShear', ()=> {
//         assert.isBelow(ecart(sectionCharac.SFShear(), section.SFShear), tolerance);
// 			});
// 			describe('UnMoinsRho', ()=> {
//         assert.isBelow(ecart(sectionCharac.UnMoinsRho(), section.UnMoinsRho), tolerance);
// 			});
// 			describe('Tt', ()=> {
//         assert.isBelow(ecart(sectionCharac.Tt(), section.Tt), tolerance);
// 			});
// 			describe('Am', ()=> {
// 				assert.isBelow(ecart(sectionCharac.Am(), section.Am), tolerance);
// 			});
// 			describe('thotweb', ()=> {
//         assert.isBelow(ecart(sectionCharac.thotweb(), section.thotweb), tolerance);
// 			});
// 		})
// 		describe(`${section.sectionName}: Axial & Bending`, ()=> {
//       describe('NplRd', ()=> {
//         assert.isBelow(ecart(sectionCharac.NplRd(), section.NplRd), tolerance);
// 			});
// 			describe('MelyRd', ()=> {
//         assert.isBelow(ecart(sectionCharac.MelyRd(), section.MelyRd), tolerance);
// 			});
// 			describe('MelzRd', ()=> {
// 				console.log('MelzRd', sectionCharac.MelzRd())
//         assert.isBelow(ecart(sectionCharac.MelzRd(), section.MelzRd), tolerance);
// 			});
// 			describe('MplyRd', ()=> {
//         assert.isBelow(ecart(sectionCharac.MplyRd(), section.MplyRd), tolerance);
// 			});
// 			describe('MplzRd', ()=> {
//         assert.isBelow(ecart(sectionCharac.MplzRd(), section.MplzRd), tolerance);
// 			});
// 			describe('kyy', ()=> {
//         assert.isBelow(ecart(sectionCharac.kyy(), section.kyy), tolerance);
// 			});
// 			describe('kzz', ()=> {
//         assert.isBelow(ecart(sectionCharac.kzz(), section.kzz), tolerance);
// 			});
// 			describe('kyz', ()=> {
//         assert.isBelow(ecart(sectionCharac.kyz(), section.kyz), tolerance);
// 			});
// 			describe('kzy', ()=> {
// 				assert.isBelow(ecart(sectionCharac.kzy(), section.kzy), tolerance);
// 			});
// 			describe('SFBucklingy', ()=> {
//         assert.isBelow(ecart(sectionCharac.SFBucklingy(), section.SFBucklingy), tolerance);
// 			});
// 			describe('SFBucklingz', ()=> {
//         assert.isBelow(ecart(sectionCharac.SFBucklingz(), section.SFBucklingz), tolerance);
// 			});
// 			describe('SFTension', ()=> {
//         assert.isBelow(ecart(sectionCharac.SFTension(), section.SFTension), tolerance);
// 			});
// 			describe('SFAxialBending', ()=> {
// 				assert.isBelow(ecart(sectionCharac.SFAxialBending(), section.SFAxialBending), tolerance);
// 			});
//     })
//   })
// })