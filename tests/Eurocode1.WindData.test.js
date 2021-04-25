const {
	assert,
	ecart,
	tolerance
} = require('./Setup.test');
const { Eurocode1 } = require('../calculations/WindCalculation');
const cases = require('./mocks/eurocode1_wind_data_cases.json');


describe('Eurocode 1 Wind Data tests', () => {
	cases.map((wind) => {
		describe(`Wind Case: wind direction=${wind.teta}`, () => {
			const ec1Data = new Eurocode1.WindData({ ...wind });
			describe('z0:', () => {
				assert.isBelow(ecart(ec1Data.z0(), wind.z0), tolerance);
			});
			describe('zmin:', () => {
				assert.isBelow(ecart(ec1Data.zmin(), wind.zmin), tolerance);
			});
			describe('zmax:', () => {
				assert.isBelow(ecart(ec1Data.zmax(), wind.zmax), tolerance);
			});
			describe('z0II:', () => {
				assert.isBelow(ecart(ec1Data.z0II(), wind.z0II), tolerance);
			});
			describe('kr:', () => {
				assert.isBelow(ecart(ec1Data.kr(), wind.kr), tolerance);
			});
			describe('zs:', () => {
				assert.isBelow(ecart(ec1Data.zs(), wind.zs), tolerance);
			});
			describe('Cr:', () => {
				const { zs: z } = wind;
				assert.isBelow(ecart(ec1Data.Cr({ z }), wind.Cr), tolerance);
			});
			describe('Co:', () => {
				assert.isBelow(ecart(ec1Data.Co(), wind.Co), tolerance);
			});
			describe('vb:', () => {
				assert.isBelow(ecart(ec1Data.vb(), wind.vb), tolerance);
			});
			describe('vm:', () => {
				const { zs: z } = wind;
				console.log('Vm', ec1Data.vm({ z }))
				assert.isBelow(ecart(ec1Data.vm({ z }), wind.vm), tolerance);
			});
			describe('kl:', () => {
				assert.isBelow(ecart(ec1Data.kl(), wind.kl), tolerance);
			});
			describe('Iv:', () => {
				const { zs: z } = wind;
				console.log('IV', ec1Data.Iv({ z }));
				assert.isBelow(ecart(ec1Data.Iv({ z }), wind.Iv), tolerance);
			});
			describe('qp:', () => {
				const { zs: z } = wind;
				console.log('qp', ec1Data.qp({ z }));
				assert.isBelow(ecart(ec1Data.qp({ z }), wind.qp), tolerance);
			});
			describe('L:', () => {
				const { zs: z } = wind;
				console.log('L', ec1Data.L({ z }));
				assert.isBelow(ecart(ec1Data.L({ z }), wind.L), tolerance);
			});
			describe('B2:', () => {
				assert.isBelow(ecart(ec1Data.B2(), wind.B2), tolerance);
			});
			describe('Cs:', () => {
				assert.isBelow(ecart(ec1Data.Cs(), wind.Cs), tolerance);
			});
			describe('SL:', () => {
				const { zs: z } = wind;
				console.log('SL', ec1Data.SL({ z }));
				assert.isBelow(ecart(ec1Data.SL({ z }), wind.SL), tolerance);
			});
		});
	})
});


// "Cs": 0.877,
// "SLzsn1x": 0.059,
// "FLzsn1x": 3.439,
// "R2": 0.170,
// "Rh": 0.121,
// "Rb": 0.688,
// "etah": 7.727,
// "etab": 0.622,
// "delta": 0.143,
// "deltaa": 0.093,
// "deltas": 0.05,
// "me": 94.28,
// "Cf": 1.254,
// "Kp": 3.510,
// "mu": 0.43,
// "Cd": 1.070,
// "CsCd": 0.938