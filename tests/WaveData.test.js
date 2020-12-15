const {
  assert,
  ecart,
  tolerance
} = require('./Setup.test');
const { WaveData } = require('../calculations/WaveCalculation');
const waveDataCases = require('./mocks/wave_data.json');


describe('Wave Data tests', () => {
	waveDataCases.map((wave) => {
		const {
			H,
			d,
			T
		} = wave.inputs;
		describe(`Wave Case: water depth=${d} / water height=${H} / wave period=${T}`, ()=> {
			const waveCharac = new WaveData(d, T, H);
			console.log('WATER ', waveCharac.waterLevel)
			describe('Wave length', ()=> {
        assert.isBelow(ecart(waveCharac.waveLength, wave.outputs.L), tolerance);
			});
			describe('Wave crest', ()=> {
				assert.isBelow(ecart(waveCharac.waterLevel[0].x, wave.outputs.crest.x), tolerance);
				assert.isBelow(ecart(waveCharac.waterLevel[0].y, wave.outputs.crest.y), tolerance);
			});
			describe('Wave horizontal velocity', ()=> {
				const {
					x,
					t,
					z
				} = wave.inputs.velocity;
				assert.isBelow(ecart(waveCharac.linearHorizontalVelocity(x, t, z), wave.outputs.linearHorizontalVelocity), tolerance);
      });
		});
	})
});