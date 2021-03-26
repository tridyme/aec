class TensionChordSplice {
  constructor({ initialState }) {
    this.initialState = initialState;
  };

  documentation() {
    const doc = {
      //Input
      FtEd: {
        name: 'FtEd', // le "name" doit être égale à la clé et ne doit pas contenir de caractère spéciaux
        text: 'FtEd',
        description: "Effort normal par boulon",
        unit: { name: 'N', text: 'N' }, // Unitée utilisée pour les calculs (important pour la suite quand on voudra intégré un système de conversion)
        code: "EN 1993-1-8:2005", // Mettre le code associé si existe
        reference: "4.2" // Mettre référence (chapitre) du code associé si existe
      },
      FvEd: {
        name: 'FvEd', 
        text: 'FvEd',
        description: "Effort tranchant par boulon",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      numberBolts: {
        name: 'numberBolts', 
        text: 'numberBolts',
        description: "Nombre de boulons",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: " ", 
        reference: " " 
      },
      steelQualityClass: {
        name: 'steelQualityClass', 
        text: 'steelQualityClass',
        description: "Classe de qualité des boulons",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "NF E27-005", 
        reference: " " 
      },
      t: {
        name: 't', 
        text: 't',
        description: "Epaisseur du plat assemblé",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      tp: {
        name: 'tp', 
        text: 'tp',
        description: "Epaisseur de la plaque située sous la tête ou l’écrou",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      p1: {
        name: 'p1', 
        text: 'p1',
        description: "Pince longitudinale",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      e1: {
        name: 'e1', 
        text: 'e1',
        description: "Entraxe longitudinal",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      p2: {
        name: 'p2', 
        text: 'p2',
        description: "Pince transversale",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      e2: {
        name: 'e2', 
        text: 'e2',
        description: "Entraxe transversale",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      m: {
        name: 'm', 
        text: 'm',
        description: "Distance entre l'axe du boulon et l'âme",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      e: {
        name: 'e', 
        text: 'e',
        description: "Distance entre l'axe du boulon et l'extrimité de la platine",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      D: {
        name: 'D', 
        text: 'D',
        description: "Diamétre du tube",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      tf: {
        name: 'tf', 
        text: 'tf',
        description: "Epaisseur du tube",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      DFlange: {
        name: 'DFlange', 
        text: 'DFlange',
        description: "Diamétre extérieur du bride",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      eFlange: {
        name: 'eFlange', 
        text: 'eFlange',
        description: "Epaisseur du bride",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      fy: {
        name: 'fy', 
        text: 'fy',
        description: "Limite élastique des pièces assemblées",
        unit: { name: 'N/mm²', text: 'N/mm²' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      fu: {
        name: 'fu', 
        text: 'fu',
        description: "Contrainte de rupture des pièces assemblées",
        unit: { name: 'N/mm²', text: 'N/mm²' }, 
        code: "EN 1993-1-4", 
        reference: "2.1" 
      },
      fub: {
        name: 'fub', 
        text: 'fub',
        description: "Contrainte de rupture pour la classe",
        unit: { name: 'N/mm²', text: 'N/mm²' }, 
        code: "EN 1993-1-4", 
        reference: "2.1" 
      },
      fyb: {
        name: 'fyb', 
        text: 'fyb',
        description: "Limite élastique pour la classe",
        unit: { name: 'N/mm²', text: 'N/mm²' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      gammaM0: {
        name: 'gammaM0', 
        text: 'gammaM0',
        description: "Facteur partiel de sécurité",
        unit: { name: ' ', text: ' ' }, //Without unit
        code: "EN 1993-1-8:2005", 
        reference: "2.1" 
      },
      gammaM2: {
        name: 'gammaM2', 
        text: 'gammaM2',
        description: "Coefficient partiel pour les assemblage boulonnés",
        unit: { name: ' ', text: ' ' }, //Without unit
        code: "EN 1993-1-8:2005", 
        reference: "2.1" 
      },
      gammaM3: {
        name: 'gammaM3', 
        text: 'gammaM3',
        description: "Coefficient partiel pour le glissement",
        unit: { name: ' ', text: ' ' }, //Without unit
        code: "EN 1993-1-8:2005", 
        reference: "2.1" 
      },
      ftmin: {
        name: 'ftmin', 
        text: 'ftmin',
        description: "Frottement minimal sous tête",
        unit: { name: ' ', text: ' ' }, //Without unit
        code: "VDI 2230", 
        reference: " " 
      },
      ftmax: {
        name: 'ftmax', 
        text: 'ftmax',
        description: "Frottement maximal sous tête",
        unit: { name: ' ', text: ' ' }, //Without unit
        code: "VDI 2230", 
        reference: " " 
      },
      ffmax: {
        name: 'ffmax', 
        text: 'ffmax',
        description: "Frottement filets de vis ",
        unit: { name: ' ', text: ' ' }, //Without unit
        code: "VDI 2230", 
        reference: " " 
      },
      p: {
        name: 'p', 
        text: 'p',
        description: "Pas de vis",
        unit: { name: 'mm', text: 'mm' },
        code: "ISO 965", 
        reference: " " 
      },
      d: {
        name: 'd', 
        text: 'd',
        description: "Diamètre nominal du boulon",
        unit: { name: 'mm', text: 'mm' },
        code: "ISO 965", 
        reference: " " 
      },
      dm: {
        name: 'dm', 
        text: 'dm',
        description: "Diamètre moyen en appui",
        unit: { name: 'mm', text: 'mm' },
        code: "ISO 965", 
        reference: " " 
      },
      ks: {
        name: 'ks', 
        text: 'ks',
        description: "Facteur de forme de trou en glissement",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005", 
        reference: "3.6" 
      },
      As: {
        name: 'As', 
        text: 'As',
        description: "Section nette du boulon",
        unit: { name: 'mm²', text: 'mm²' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      d0: {
        name: 'd0', 
        text: 'd0',
        description: "Diamètre perçage",
        unit: { name: 'mm', text: 'mm' },
        code: "ISO 4016", 
        reference: " " 
      },
      alphav: {
        name: 'alphav', 
        text: 'alphav',
        description: "Facteur de forme au cisaillement",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005", 
        reference: "3.4" 
      },
      k2: {
        name: 'k2', 
        text: 'k2',
        description: "Facteur de forme de tête de vis",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005", 
        reference: "3.4" 
      },
      kb: {
        name: 'kb', 
        text: 'kb',
        description: "Facteur de forme de trou en pression diamétrale",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005", 
        reference: "3.4" 
      },

      // Output
      Csgrais: {
        name: 'Csgrais', // le "name" doit être égale à la clé et ne doit pas contenir de caractère spéciaux
        text: 'Csgrais',
        description: "Couple de serrage graissé",
        unit: { name: 'N.m', text: 'N.m' }, // Unitée utilisée pour les calculs (important pour la suite quand on voudra intégré un système de conversion)
        code: "EN 1993-1-8:2005", // Mettre le code associé si existe
        reference: "4.2" // Mettre référence (chapitre) du code associé si existe
      },
      Fpt: {
        name: 'Fpt',
        text: 'Fpt',
        description: "Effort de serrage, précontrainte de montage",
        unit: { name: 'N', text: 'N' },
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      Fpv: {
        name: 'Fpv',
        text: 'Fpv',
        description: "Effort tangentiel induit",
        unit: { name: 'N', text: 'N' },
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
       alphad: {
        name: 'alphad',
        text: 'alphad',
        description: "Facteur de forme en pression diamétrale",
        unit: { name: ' ', text: ' ' }, // Without unit 
        code: "EN 1993-1-8:2005",
        reference: "3.4"
      },
      alphab: {
        name: 'alphab',
        text: 'alphab',
        description: "Facteur de forme longitudinal",
        unit: { name: ' ', text: ' ' }, // Without unit 
        code: "EN 1993-1-8:2005",
        reference: "3.4"
      },
      k1: {
        name: 'k1',
        text: 'k1',
        description: "Facteur de forme transversal",
        unit: { name: ' ', text: ' ' }, // Without unit 
        code: "EN 1993-1-8:2005",
        reference: "3.4"
      },
      FpC: {
        name: 'FpC',
        text: 'FpC',
        description: "Effort de précontrainte",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FsRd: {
        name: 'FsRd',
        text: 'FsRd',
        description: "Résistance au glissement",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FtRd: {
        name: 'FtRd',
        text: 'FtRd',
        description: "Résistance à la traction",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FvRd: {
        name: 'FvRd',
        text: 'FvRd',
        description: "Résistance au cisaillement",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FbRd: {
        name: 'FbRd',
        text: 'FbRd',
        description: "Résistance à la pression diamétrale",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FpRd: {
        name: 'FpRd',
        text: 'FpRd',
        description: "Résistance au poinçonnement",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      Leffcp: {
        name: 'Leffcp',
        text: 'Leffcp',
        description: "Longueur efficace des modes circulaires",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      Leffnc: {
        name: 'Leffnc',
        text: 'Leffnc',
        description: "Longueur efficace des modes non circulaires",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      Leff1: {
        name: 'Leff1',
        text: 'Leff1',
        description: "La ongueur efficace en mode 1",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      Mpl1Rd: {
        name: 'Mpl1Rd',
        text: 'Mpl1Rd',
        description: "Moment résistant plastique ",
        unit: { name: 'N.mm', text: 'N.mm' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FT1Rd: {
        name: 'FT1Rd',
        text: 'FT1Rd',
        description: "Effort résistant en mode 1 ",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      Leff2: {
        name: 'Leff2',
        text: 'Leff2',
        description: "La longueur efficace en mode 2",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      Mpl2Rd: {
        name: 'Mpl2Rd',
        text: 'Mpl2Rd',
        description: "Moment résistant plastique en mode 2",
        unit: { name: 'N.mm', text: 'N.mm' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      n: {
        name: 'n',
        text: 'n',
        description: " ",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FT2Rd: {
        name: 'FT2Rd',
        text: 'FT2Rd',
        description: "Effort résistant en mode 2",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FT3Rd: {
        name: 'FT3Rd',
        text: 'FT3Rd',
        description: "Effort résistant en mode 3",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FT4Rd: {
        name: 'FT4Rd',
        text: 'FT4Rd',
        description: "Effort résistant en mode 4",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FS1: {
        name: 'FS1',
        text: 'FS1',
        description: "Critère résistance au cisaillement",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FS2: {
        name: 'FS2',
        text: 'FS2',
        description: "Critère résistance à la pression diamétrale",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FS3: {
        name: 'FS3',
        text: 'FS3',
        description: "Critère résistance traction simple",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FS4: {
        name: 'FS4',
        text: 'FS4',
        description: "Critère résistance à la traction et au cisaillement",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FS5: {
        name: 'FS5',
        text: 'FS5',
        description: "Critère résistance poinçonnement",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005",
        reference: "4.2"
      },
      FSmax: {
        name: 'FSmax',
        text: 'FSmax',
        description: "Critère dimensionnant de l'assemblage",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005",
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

