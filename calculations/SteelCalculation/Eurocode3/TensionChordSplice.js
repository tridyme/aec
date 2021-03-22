class TensionChordSplice {
  constructor({ initialState }) {
    this.initialState = initialState;
  };

  // Résistance en traction d'une crosse
  FtRd() {
    const {
      a,
      b
    } = this.initialState;
    return a + b;
  }

  // Résistance en traction d'une crosse
  FvRd() {
    const {
      a,
      b
    } = this.initialState;
    return b - a;
  }

};

module.exports = TensionChordSplice;

