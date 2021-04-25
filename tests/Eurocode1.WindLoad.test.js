const {
	assert,
	ecart,
	tolerance
} = require('./Setup.test');
const { Eurocode1 } = require('../calculations/WindCalculation');
const cases = require('./mocks/eurocode1_wind_load_cases.json');


describe('Eurocode 1 Wind Load tests', () => {
	cases.map((wind) => {
		describe(`Wind Case: wind direction=${wind.teta}`, () => {
			const ec1Load = new Eurocode1.WindLoad({ ...wind });
			describe('Aref:', () => {
				assert.isBelow(ecart(ec1Load.Aref(), 0.25), tolerance);
			});
			describe('vb:', () => {
				assert.isBelow(ecart(ec1Load.vb(), wind.vb), tolerance);
			});
			describe('kr:', () => {
				assert.isBelow(ecart(ec1Load.kr(), 0.19), tolerance);
			});
		});
	})
});
