class TensionChordSplice {
  constructor({ initialState }) {
    this.initialState = initialState;
  };

  // Résistance en traction d'une crosse
  FtRd() {
    const {
      As,
      fub,
      gammaM2,
      betaAnc
    } = this.initialState;
    return betaAnc * 0.9 * fub * As / gammaM2 / 1000;
  }

  // Résistance en traction d'une crosse
  FtRd1() {
    const {
      As,
      fub,
      gammaM2,
      betaAnc
    } = this.initialState;
    return betaAnc * 0.9 * fub * As / gammaM2 / 1000;
  }


};

module.exports = TensionChordSplice;

