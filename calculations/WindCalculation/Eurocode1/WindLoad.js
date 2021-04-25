const WindData = require('./WindData');

class WindLoad extends WindData {
  constructor(initialState) {
    super(initialState);
    this.initialState = initialState;
  }

  analysis() {
    return {
      z0: super.z0()
    }
  }


  // Aref: surface de référence est la surface projetée de l'élément
  Aref() {
    const {
      b,
      l
    } = this.initialState;
    return this.initialState.Aref ? this.initialState.Aref : b * l;
  }

  // vb: vitesse de référence
  vb() {
    return this.initialState.vb ? this.initialState.vb : super.vb();
  }

  kr() {
    return this.initialState.kr ? this.initialState.kr : super.kr();
  }

  // Coefficient de rugosité
  Cr() {
    return this.initialState.kr ? this.initialState.kr : super.Cr();
  }


  Cf0() {
    const teta = this.teta;
    const phi = this.phi();
    const z = this.z ? this.z : this.zs();
    const Re = this.Re({ z });
    const ksi = 0.05;
    const d = this.d ? this.d : this.b;
    if (phi === 1 || phi === 0) {
      if (Re < 1.8 * 10 ** 5) {
        return 1.2
      } else if (Re < 2.1 * 10 ** 5) {
        return 0.11 / (Re / 10 ** 6) ** (1.4);
      } else {
        return 1.2 + (0.18 * Math.log(10 * ksi / d)) / (1 + 0.4 * Math.log(Re / 10 ** 6));
      }
    } else {
      if (teta === 0) {
        if (phi < 0.2) {
          return 2.8 - phi * 0.6 / 0.2;
        }
        if (phi >= 0.2 && phi <= 0.6) {
          if (Re < 3 * 10 ** 5) {
            return 1.45;
          } else {
            return 1.2 - (10 ** 6 - Re) * 0.25 / (10 ** 6 - 3 * 10 ** 5);
          }
        }
        if (phi > 0.6 && phi < 0.8) {
          return 1.5;
        }
        if (phi > 0.8 && phi <= 1) {
          return 1.9 - (1 - phi) * 0.4 / 0.2;
        }
        if (phi > 1) {
          return 1.9;
        }
      } else {
        if (phi < 0.2) {
          return 3 - phi * 0.6 / 0.2;
        }
        if (phi >= 0.2 && phi <= 0.6) {
          if (Re < 3 * 10 ** 5) {
            return 1.3;
          } else {
            return 1 - (10 ** 6 - Re) * 0.15 / (10 ** 6 - 3 * 10 ** 5);
          }

        }
        if (phi >= 0.6 && phi <= 0.8) {
          return 1.5;
        }
        if (phi > 0.8 && phi <= 1) {
          return 1.9 - (1 - phi) * 0.4 / 0.2;
        }
        if (phi > 1) {
          return 1.9;
        }
      }
    }

  }

  psiLambda() {
    const phi = this.phi();
    const lambda = Math.min(this.h > 50 ? 0.7 * this.h / this.b : this.h / this.b, 70);
    if (lambda > 70) {
      return 0.95;
    }
    if (lambda < 10) {
      if (phi <= 0.1) {
        return 1;
      }
      if (phi <= 0.5) {
        return 0.88 + 0.03 * lambda / 10;
      }
      if (phi <= 1) {
        return 0.78 + 0.7 * lambda / 10;
      }
      if (phi === 1) {
        return 0.7 * lambda / 10;
      }
    }
    if (lambda <= 70) {
      if (phi <= 0.1) {
        return 1;
      }
      if (phi <= 0.5) {
        return 0.91 + 0.06 * (lambda - 10) / 60;
      }
      if (phi <= 1) {
        return 0.8 + 0.16 * (lambda - 10) / 60;
      }
      if (phi === 1) {
        return 0.7 + 0.22 * (lambda - 10) / 60;
      }
    }

    return 1;
  }

}

module.exports = WindLoad;