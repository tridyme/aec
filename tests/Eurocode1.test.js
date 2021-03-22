const {
	assert,
	ecart,
	tolerance
} = require('./Setup.test');
const { Eurocode1 } = require('../calculations/WindCalculation');
const eurocode1Cases = require('./mocks/eurocode1_cases.json');


// describe('Eurocode 1 Wind Calculation tests', () => {
// 	eurocode1Cases.map((wind) => {
// 		const {
// 			teta, vb0, categorie
// 		} = wind;
// 		console.log('WIND', wind)
// 		describe(`Wind Case: wind direction=${teta}`, ()=> {
// 			const ec1Data = new Eurocode1(teta, vb0, categorie);
// 			describe('z0:', ()=> {
//         assert.isBelow(ecart(ec1Data.z0(), wind.z0), tolerance);
// 			});
// 			describe('zmin:', ()=> {
//         assert.isBelow(ecart(ec1Data.zmin(), wind.zmin), tolerance);
// 			});
// 			describe('zmax:', ()=> {
//         assert.isBelow(ecart(ec1Data.zmax(), wind.zmax), tolerance);
// 			});
// 			describe('z0II:', ()=> {
//         assert.isBelow(ecart(ec1Data.z0II(), wind.z0II), tolerance);
// 			});
// 			describe('kr:', ()=> {
//         assert.isBelow(ecart(ec1Data.kr(), wind.kr), tolerance);
// 			});
// 			describe('zs:', ()=> {
// 				const { typeConstruction, h, h1 } = wind;
//         assert.isBelow(ecart(ec1Data.zs({ typeConstruction, h, h1 }), wind.zs), tolerance);
// 			});
// 			describe('Cr:', ()=> {
// 				const { zs: z } = wind;
//         assert.isBelow(ecart(ec1Data.Cr({ z }), wind.Cr), tolerance);
// 			});
// 			describe('Co:', ()=> {
//         assert.isBelow(ecart(ec1Data.Co(), wind.Co), tolerance);
// 			});
// 			describe('vb:', ()=> {
//         assert.isBelow(ecart(ec1Data.vb(), wind.vb), tolerance);
// 			});
// 			describe('vm:', ()=> {
// 				const { zs: z } = wind;
// 				console.log('Vm', ec1Data.vm({ z }))
//         assert.isBelow(ecart(ec1Data.vm({ z }), wind.vmzs), tolerance);
// 			});
// 			describe('kl:', ()=> {
//         assert.isBelow(ecart(ec1Data.kl(), wind.kl), tolerance);
// 			});
// 			describe('Iv:', ()=> {
// 				const { zs: z } = wind;
// 				console.log('IV', ec1Data.Iv({ z }));
//         assert.isBelow(ecart(ec1Data.Iv({ z }), wind.Ivzs), tolerance);
// 			});
// 			describe('qp:', ()=> {
// 				const { zs: z } = wind;
// 				console.log('qp', ec1Data.qp({ z }));
//         assert.isBelow(ecart(ec1Data.qp({ z }), wind.qpzs), tolerance);
// 			});
// 			describe('L:', ()=> {
// 				const { zs: z } = wind;
// 				console.log('L', ec1Data.L({ z }));
//         assert.isBelow(ecart(ec1Data.L({ z }), wind.Lzs), tolerance);
// 			});
// 			describe('B2:', ()=> {
// 				const { typeConstruction, h, h1, b } = wind;
// 				console.log('B2', ec1Data.B2({ typeConstruction, h, h1, b }));
//         assert.isBelow(ecart(ec1Data.B2({ typeConstruction, h, h1, b }), wind.B2), tolerance);
// 			});
// 		// 	describe('n1x:', ()=> {
// 		// 		const { h } = wind;
// 		// 		console.log('n1x', ec1Data.n1x({ h: 0.6 * h }));
//         // assert.isBelow(ecart(ec1Data.n1x({ h }), wind.n1x), tolerance);
// 		// 	});
// 			// describe('zs: Hauteur de référence', ()=> {
// 			// 	const { typeConstruction, h, h1, zmin } = wind;
//       //   assert.isBelow(ecart(ec1Data.zs({ typeConstruction, h, h1, zmin }), wind.zs), tolerance);
// 			// });
// 			// describe('Cr: Coefficient de rugosité', ()=> {
// 			// 	const { kr, z0, zmin, zmax, zs: z } = wind;
//       //   assert.isBelow(ecart(ec1Data.Cr({ kr, z0, zmin, zmax, z }), wind.Cr), tolerance);
// 			// });
// 		});
// 	})
// });