class WaveData {
	constructor(waterDepth, wavePeriod, waveHeight) {
		this.d = waterDepth;
		this.T = wavePeriod;
		this.H = waveHeight;
	}

	get waveLength() {
		const d = this.d;
		const T = this.T;

		const Pi = 3.14159265;
    const L0 = 9.81 * T * T / (2 * Pi);
    let Ld = L0;
		let Lg = L0 / 50;
		
		let L = 0;
    let fl = 0;
    for (let i = 0; i < 100; i += 1) {
      L = (Lg + Ld) / 2;
      fl = 1 - ((L0 / L) * Math.tanh(2 * Pi * d / L));
      if (fl >= 0) Ld = L;
      if (fl <= 0) Lg = L;
    }

    const wL = Math.round(L * 1000) / 1000;
    return wL;
	}

	get waterLevel() {
		const H = this.H;
    const Pi = 3.14159265;

    const k = 2 * Pi / L;

    const wL = [];

    const increment = 100;
    let xWave = 0;
    let yWave = 0;
    for (let i = 0; i <= increment; i += 1) {
      xWave = i * L / increment;
      yWave = H / 2 * Math.cos(k * xWave);
      wL.push({ x: xWave, y: yWave });
    }

    return wL;
	}
}

module.exports = WaveData;