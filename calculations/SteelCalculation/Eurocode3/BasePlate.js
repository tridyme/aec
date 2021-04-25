class BasePlate {
  constructor({ initialState }) {
    this.initialState = initialState;
  }

  analysis() {
    return {
      A: this.A(),
      de: this.de(),
      Ie: this.Ie(),
      fbd: this.fbd(),
      fcd: this.fcd(),
      alphaBc: this.alphaBc(),
      a3: this.a3(),
      e: this.e(),
      Msd: this.Msd(),
      sigmaF: this.sigmaF(),
      FtRd: this.FtRd(),
      FvbRd: this.FvbRd(),
      FtEdEq: this.FtEdEq(),
      FtcRd: this.FtcRd(),
      FtAncrRd: this.FtAncrRd(),
      ratio1: this.ratio1(),
      ratio2: this.ratio2(),
      ratio3: this.ratio3(),
      ratio4: this.ratio4(),
      ratio5: this.ratio5(),
      ratio6: this.ratio6(),
      ratioMax: this.ratioMax(),
    }
  }

  // Section brute de la tige
  A() {
    const {
      d
    } = this.initialState;
    const Pi = Math.PI;
    return Pi * (d / 2) ** 2;
  }

  // Diamètre équivalent dans la section résistante
  de() {
    const {
      As
    } = this.initialState;
    const Pi = Math.PI;
    return 2 * (As / Pi) ** (0.5);
  }


  // Inertie de la tige dans la section résistante
  Ie() {
    const Pi = Math.PI;
    const de = this.de();
    return Pi / 4 * (de / 2) ** 4;
  }

  // Contrainte ultime d'adhérence d'une barre lisse
  fbd() {
    const {
      gammaC,
      fck
    } = this.initialState;
    return 0.36 * (fck) ** (0.5) / gammaC;
  }

  // Résistance de calcul en compression
  fcd() {
    const {
      gammaC,
      fck
    } = this.initialState;
    return fck / gammaC;
  }

  // Coefficient
  alphaBc() {
    const {
      fyb
    } = this.initialState;
    return 0.44 - 0.0003 * fyb;
  }

  // Hauteur d'encastrement dans le béton CEN/TS 1992-4-1:2009 (13)
  a3() {
    const {
      d
    } = this.initialState;
    return 0.5 * d;
  }

  // Hauteur du bras de levier CEN/TS 1992-4-1:2009 (13)
  e() {
    const {
      tg,
      tp
    } = this.initialState;
    const a3 = this.a3();
    return a3 + tg + tp / 2;
  }


  // Moment appliquée en tête d'une crosse
  Msd() {
    const {
      alphaM,
      FvEd,
      Nb
    } = this.initialState;
    const e = this.e();
    return FvEd * e / alphaM / 1000 / Nb;
  }


  // Contrainte de flexion en tête d'une crosse
  sigmaF() {
    const Msd = this.Msd();
    const de = this.de();
    const Ie = this.Ie();
    return (Msd / 1000) * (de / 1000) / (Ie * (1000) ** (-4)) / 2;
  }

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

  // Résistance au cisaillement d'un crosse
  FvbRd() {
    const {
      As,
      fub,
      gammaM2
    } = this.initialState;
    const alphaBc = this.alphaBc();

    return alphaBc * fub * As / gammaM2 / 1000;
  }

  // Résistance de traction équivalente à la flexion de la crosse
  FtEdEq() {
    // const {
    //   // As,
    //   // fub,
    //   // gammaM2
    // } = this.initialState;
    return 0;
  }


  // Résistance d'une crosse à l'adhérence
  FtcRd() {
    const {
      l1,
      r,
      l2,
      d
    } = this.initialState;
    const Pi = Math.PI;
    const fbd = this.fbd();
    return Pi * d * (l1 + 6.4 * r + 3.5 * l2) * fbd / 1000;
  }

  // Résistance de la crosse d'ancrage en traction
  FtAncrRd() {
    const FtRd = this.FtRd();
    const FtcRd = this.FtcRd();
    return Math.min(FtRd, FtcRd);
  }

  // Ratio au cisaillement
  ratio1() {
    const {
      FvEd,
      Nb,
    } = this.initialState;
    const FvbRd = this.FvbRd();
    return FvEd / FvbRd;
  }

  // Ratio en traction
  ratio2() {
    const {
      FtEd,
      Nb,
    } = this.initialState;
    const FtRd = this.FtRd();
    return FtEd / FtRd;
  }

  // Ratio en traction-cisaillement
  ratio3() {
    const {
      FtEd,
      FvEd,
      Nb,
    } = this.initialState;
    const FvbRd = this.FvbRd();
    const FtRd = this.FtRd();
    return FvEd / FvbRd + FtEd / (1.4 * FtRd);
  }

  // Ratio en traction-cisaillement-flexion
  ratio4() {
    const {
      FtEd,
      FvEd,
      Nb,
    } = this.initialState;
    const FvbRd = this.FvbRd();
    const FtRd = this.FtRd();
    const FtEdEq = this.FtEdEq()
    return FvEd / FvbRd + (FtEd + FtEdEq) / (1.4 * FtRd);
  }

  // Ratio en traction-flexion
  ratio5() {
    const {
      FtEd,
      Nb,
    } = this.initialState;
    const FtRd = this.FtRd();
    const FtEdEq = this.FtEdEq()
    return (FtEd + FtEdEq) / (FtRd);
  }

  // Ratio en adhérence dans le béton
  ratio6() {
    const {
      FtEd,
      Nb,
    } = this.initialState;
    const FtcRd = this.FtcRd();
    return (FtEd) / (FtcRd);
  }

  // Ratio max
  ratioMax() {
    const ratio1 = this.ratio1();
    const ratio2 = this.ratio2();
    const ratio3 = this.ratio3();
    const ratio4 = this.ratio4();
    const ratio5 = this.ratio5();
    const ratio6 = this.ratio6();
    return Math.max(ratio1, ratio2, ratio3, ratio4, ratio5, ratio6);
  }
}

module.exports = BasePlate;
