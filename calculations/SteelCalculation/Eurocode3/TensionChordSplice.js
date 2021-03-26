class TensionChordSplice {
  constructor({ initialState }) {
    this.initialState = initialState;
  };

  documentation() {
    const doc = {
      Csgrais: {
        name: 'Csgrais', // le "name" doit être égale à la clé et ne doit pas contenir de caractère spéciaux
        text: 'Csgrais',
        description: "Couple de serrage graissé",
        unit: { name: 'N.m', text: 'N.m' }, // Unitée utilisée pour les calculs (important pour la suite quand on voudra intégré un système de conversion)
        code: "EN 19913-1-8:2005", // Mettre le code associé si existe
        reference: "4.2" // Mettre référence (chapitre) du code associé si existe
      },
      Fpt: {
        name: 'Fpt',
        text: 'Fpt',
        description: "Effort de serrage, précontrainte de montage",
        unit: { name: 'N', text: 'N' },
        code: "EN 19913-1-8:2005",
        reference: "4.2"
      }
    }

    return doc;
  }

  analysis() {
    return {
      Csgrais: this.Csgrais(),
      Fpt: this.Fpt(),
      Fpv: this.Fpv(),
      fu: this.fu(),
      alphad: this.alphad(),
      alphab: this.alphab(),
      k1: this.k1(),
      FpC: this.FpC(),
      FsRd: this.FsRd(),
      FtRd: this.FtRd(),
      FvRd: this.FvRd(),
      FbRd: this.FbRd(),
      FpRd: this.FpRd(),
      Leffcp: this.Leffcp(),
      Leffnc: this.Leffnc(),
      Leff1: this.Leff1(),
      Mpl1Rd: this.Mpl1Rd(),
      FT1Rd: this.FT1Rd(),
      Leff2: this.Leff2(),
      Mpl2Rd: this.Mpl2Rd(),
      n: this.n(),
      FT2Rd: this.FT2Rd(),
      FT3Rd: this.FT3Rd(),
      FT4Rd: this.FT4Rd(),
      FS1: this.FS1(),
      FS2: this.FS2(),
      FS3: this.FS3(),
      FS4: this.FS4(),
      FS5: this.FS5(),
      FSmax: this.FSmax(),
    }
  }

  // Couple de serrage graissé
  Csgrais() {
    const {
      As,
      fyb,
    } = this.initialState;
    const Pi = Math.PI;
    return fyb / (2 * (3 * Pi) ** (1 / 2)) * (As ** (3 / 2)) / 1000;
  }

  // Effort de serrage, précontrainte de montage
  Fpt() {
    const {
      ftmax,
      ffmax,
      p,
      d,
      dm
    } = this.initialState;
    const Pi = Math.PI;
    const Csgrais = this.Csgrais();
    return Csgrais / ((p / (2 * Pi) + 1.166 * d / 2 * ffmax + dm / 2 * ftmax) / 1000);
  }

  // Effort tangentiel induit
  Fpv() {
    const {
      ks,
      ftmin,
      gammaM3,
      FtEd
    } = this.initialState;
    const Fpt = this.Fpt();
    return ks * ftmin * (Fpt - 0.8 * FtEd) / gammaM3;
  }

  // Contrainte de rupture équivalente
  fu() {
    const {
      fy,
      fu,
      steelQualityClass
    } = this.initialState;
    if (steelQualityClass === ('inox 50' || 'inox 70' || 'inox 80')) {
      return 0.5 * fy + 0.6 * fu;
    } else {
      return fu;
    }
  }

  // Facteur de forme en pression diamétrale
  alphad() {
    const {
      d0,
      e1
    } = this.initialState;
    return e1 / (3 * d0);
  }

  //Facteur de forme longitudinal
  alphab() {
    const {
      fub
    } = this.initialState;
    const fu = this.fu();
    const alphad = this.alphad();
    return Math.min(alphad, fub / fu, 1);
  }

  //Facteur de forme transversal
  k1() {
    const {
      d0,
      e2
    } = this.initialState;
    return Math.min(2.8 * e2 / d0 - 1.7, 2.5)
  }

  //Effort de précontrainte
  FpC() {
    const {
      fub,
      As
    } = this.initialState;
    return 0.7 * fub * As;
  }

  //Résistance au glissement
  FsRd() {
    const {
      ks,
      ftmin,
      FtEd,
      gammaM3
    } = this.initialState;
    const FpC = this.FpC();
    return ks * ftmin * (FpC - 0.8 * FtEd) / gammaM3;
  }

  //Résistance à la traction
  FtRd() {
    const {
      fub,
      gammaM2,
      k2,
      As
    } = this.initialState;
    return k2 * fub * As / gammaM2;
  }

  //Résistance au cisaillement
  FvRd() {
    const {
      alphav,
      fub,
      As,
      gammaM2
    } = this.initialState;
    return alphav * fub * As / gammaM2;
  }

  //Résistance à la pression diamétrale
  FbRd() {
    const {
      kb,
      alphab,
      k1,
      d,
      t,
      gammaM2
    } = this.initialState;
    const fu = this.fu();
    return kb * alphab * k1 * fu * d * t / gammaM2;
  }

  //Résistance au poinçonnement 
  FpRd() {
    const {
      dm,
      t,
      gammaM2
    } = this.initialState;
    const fu = this.fu();
    const Pi = Math.PI;
    return 0.6 * Pi * dm * t * fu / gammaM2;
  }

  //Longueur efficace des modes circulaires
  Leffcp() {
    const {
      m,
      p1,
      e1
    } = this.initialState;
    const Pi = Math.PI;
    return Math.min(2 * Pi * m, Pi * m + p1, Pi * m + 2 * e1);
  }

  //Longueur efficace des modes non circulaires
  Leffnc() {
    const {
      m,
      e1,
      p1,
      e,
      D
    } = this.initialState
    return Math.min(4 * m + 1.25 * e1, 2 * m + 0.625 * e1 + p1 / 2, 2 * m + 0.625 * e1 + e, D / 2);
  }

  //La ongueur efficace en mode 1
  Leff1() {
    const Leffcp = this.Leffcp();
    const Leffnc = this.Leffnc();
    return Math.min(Leffcp, Leffnc);
  }

  //Moment résistant plastique 1
  Mpl1Rd() {
    const {
      eFlange,
      fy,
      gammaM0
    } = this.initialState;
    const Leff1 = this.Leff1();
    return (Leff1 * eFlange ** 2 * fy) / (4 * gammaM0);
  }

  //Effort résistant en mode 1 
  FT1Rd() {
    const {
      m
    } = this.initialState;
    const Mpl1Rd = this.Mpl1Rd();
    return 4 * Mpl1Rd / m;
  }

  // La ongueur efficace en mode 2
  Leff2() {
    const Leffnc = this.Leffnc();
    return Leffnc;
  }

  //Moment résistant plastique en mode 2
  Mpl2Rd() {
    const {
      eFlange,
      fy,
      gammaM0
    } = this.initialState;
    const Leff2 = this.Leff2();
    return (Leff2 * eFlange ** 2 * fy) / (4 * gammaM0);
  }

  //n
  n() {
    const {
      e1,
      m
    } = this.initialState;
    return Math.min(e1, 1.25 * m);
  }

  //Effort résistant en mode 2
  FT2Rd() {
    const {
      numberBolts,
      m
    } = this.initialState;
    const Mpl2Rd = this.Mpl2Rd();
    const n = this.n();
    const FtRd = this.FtRd();
    return (2 * Mpl2Rd + n * numberBolts * FtRd) / (m + n);
  }

  //Effort résistant en mode 3
  FT3Rd() {
    const {
      numberBolts
    } = this.initialState;
    const FtRd = this.FtRd();
    return numberBolts * FtRd;
  }

  //Effort résistant en mode 4
  FT4Rd() {
    const {
      DFlange,
      eFlange,
      tf,
      fy,
      gammaM0
    } = this.initialState;
    return (DFlange * ((eFlange + tf) / 2) * fy) / gammaM0;
  }

  //Critère de résistance au cisaillement
  FS1() {
    const {
      FvEd
    } = this.initialState;
    const FvRd = this.FvRd();
    return FvEd / FvRd;
  }

  //Critère résistance à la pression diamétrale
  FS2() {
    const {
      FvEd
    } = this.initialState;
    const FbRd = this.FbRd();
    return FvEd / FbRd;
  }

  //Critère résistance traction simple
  FS3() {
    const {
      FtEd
    } = this.initialState;
    const FtRd = this.FtRd();
    return FtEd / FtRd;
  }

  //Critère résistance à la traction et au cisaillement
  FS4() {
    const {
      FvEd,
      FtEd
    } = this.initialState;
    const FvRd = this.FvRd();
    const FtRd = this.FtRd();
    return FvEd / FvRd + FtEd / (1.4 * FtRd);
  }

  //Critère résistance poinçonnement
  FS5() {
    const {
      FtEd
    } = this.initialState;
    const FpRd = this.FpRd();
    return FtEd / FpRd;
  }

  //Ratio
  FSmax() {
    const FS1 = this.FS1();
    const FS2 = this.FS2();
    const FS3 = this.FS3();
    const FS4 = this.FS4();
    const FS5 = this.FS5();
    return Math.max(FS1, FS2, FS3, FS4, FS5);
  }
}
module.exports = TensionChordSplice;

