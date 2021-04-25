class WindData {
  constructor({
    teta,
    vb0,
    categorie,
    typeConstruction,
    h,
    h1,
    b,
    n,
    region,
    z0tn,
    fiabilite,
    me,
    A,
    Ac,
    ro,
    d,
    z
  }) {
    this.teta = Number(teta);
    this.vb0 = Number(vb0);
    this.categorie = categorie;
    this.typeConstruction = typeConstruction;
    this.h = Number(h);
    this.h1 = Number(h1);
    this.b = Number(b);
    this.n = Number(n);
    this.region = region;
    this.z0tn = Number(z0tn);
    this.fiabilite = fiabilite;
    this.me = Number(me);
    this.A = Number(A);
    this.Ac = Number(Ac);
    this.ro = Number(ro);
    this.d = Number(d);
    this.z = Number(z);
  }

  documentation() {
    const doc = {
      vb0: {
        name: 'vb0',
        text: 'vb0',
        description: "Valeur de base de la vitesse de référence du vent",
        unit: { name: 'm/s', text: 'm/s' },
        code: "EN 1991-1-4:2005",
        reference: "4.2"
      },
      Cdir: {
        name: 'Cdir',
        text: 'Cdir',
        description: "Coefficient de direction",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "4.2"
      },
      Cseason: {
        name: 'Cseason',
        text: 'Cseason',
        description: "Coefficient de saison",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "4.2"
      },
      vb: {
        name: 'vb',
        text: 'vb',
        description: "Valeur de base de la vitesse de référence du vent à 10m",
        unit: { name: 'm/s', text: 'm/s' },
        code: "EN 1991-1-4:2005",
        reference: "4.2"
      },
      vm: {
        name: 'vm',
        text: 'vm',
        description: "Vitesse moyenne du vent à une hauteur z",
        unit: { name: 'm', text: 'm' },
        code: "EN 1991-1-4:2005",
        reference: "4.3.1"
      },
      z0: {
        name: 'z0',
        text: 'z0',
        description: "Longueur de rugosité",
        unit: { name: 'm', text: 'm' },
        code: "EN 1991-1-4:2005",
        reference: "4.3.2"
      },
      z0II: {
        name: 'z0II',
        text: 'z0II',
        description: "Longueur de rugosité catégorie de terrain II",
        unit: { name: 'm', text: 'm' },
        code: "EN 1991-1-4:2005",
        reference: "4.3.2"
      },
      zmin: {
        name: 'zmin',
        text: 'zmin',
        description: "Hauteur minimum",
        unit: { name: 'm', text: 'm' },
        code: "EN 1991-1-4:2005",
        reference: "4.3.2"
      },
      zmax: {
        name: 'zmax',
        text: 'zmax',
        description: "Hauteur maximum",
        unit: { name: 'm', text: 'm' },
        code: "EN 1991-1-4:2005",
        reference: "4.3.2"
      },
      Co: {
        name: 'Co',
        text: 'Co',
        description: "Coefficient orographique",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "4.3.1"
      },
      Cr: {
        name: 'Cr',
        text: 'Cr',
        description: "Coefficient de rugosité",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "4.3.2"
      },
      kr: {
        name: 'kr',
        text: 'kr',
        description: "Facteur de terrain",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "4.3.2"
      },
      kl: {
        name: 'kl',
        text: 'kl',
        description: "Coefficient de turbulence",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "4.4"
      },
      Iv: {
        name: 'Iv',
        text: 'Iv',
        description: "Facteur de terrain",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "4.4"
      },
      qp: {
        name: 'qp',
        text: 'qp',
        description: "Pression dynamique de pointe",
        unit: { name: 'Pa', text: 'Pa' },
        code: "EN 1991-1-4:2005",
        reference: "4.5"
      },
      zs: {
        name: 'zs',
        text: 'zs',
        description: "Hauteur de référence",
        unit: { name: 'm', text: 'm' },
        code: "EN 1991-1-4:2005",
        reference: "6.3"
      },
      B2: {
        name: 'B2',
        text: 'B2',
        description: "Coefficient de réponse quasi-statique traduisant l’imparfaite corrélation de la pression sur la surface de la construction",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "6.3"
      },
      R2: {
        name: 'R2',
        text: 'R2',
        description: "Coefficient de réponse résonante traduisant la résonance du mode de vibration engendrée par la turbulence",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "6.3"
      },
      Re: {
        name: "Re",
        text: "Re",
        description: "Somme des aires des éléments et des goussets d'assemblage de la face, projetés dans le plan de cette face",
        unit: { name: 'm2', text: 'm²' },
        code: "EN 1991-1-4:2005",
        reference: "7.11"
      },
      A: {
        name: "A",
        text: "A",
        description: "Somme des aires des éléments et des goussets d'assemblage de la face, projetés dans le plan de cette face",
        unit: { name: 'm2', text: 'm²' },
        code: "EN 1991-1-4:2005",
        reference: "7.11"
      },
      Ac: {
        name: "Ac",
        text: "Ac",
        description: "Aire circonscrite par les limites périphériques de la face, en projection normale à cette dernière = d.l",
        unit: { name: 'm2', text: 'm²' },
        code: "EN 1991-1-4:2005",
        reference: "7.11"
      },
      phi: {
        name: "phi",
        text: "ϕ",
        description: "Taux de remplissage",
        unit: { name: '', text: '' },
        code: "EN 1991-1-4:2005",
        reference: "7.11"
      },
      l: {
        name: "l",
        text: "l",
        description: "Longueur du treillis",
        unit: { name: 'm', text: 'm' },
        code: "EN 1991-1-4:2005",
        reference: "7.11"
      },
      d: {
        name: "d",
        text: "d",
        description: "Largeur du treillis",
        unit: { name: 'm', text: 'm' },
        code: "EN 1991-1-4:2005",
        reference: "7.11"
      },
      Agk: {
        name: "Agk",
        text: "Agk",
        description: "Aire du gousset d'assemblage k",
        unit: { name: 'm2', text: 'm²' },
        code: "EN 1991-1-4:2005",
        reference: "7.11"
      },
      lambda: {
        name: "lambda",
        text: "λ",
        description: "Elancement effectif",
        unit: { name: 'm', text: 'm' },
        code: "EN 1991-1-4:2005",
        reference: "7.13"
      },
      psiLambda: {
        name: "psiLambda",
        text: "𝜓λ",
        description: "Facteur d'effet d'extrémités fonction de l'élancement de la structure",
        unit: { name: 'm2', text: 'm²' },
        code: "EN 1991-1-4:2005",
        reference: "7.11"
      },
    }

    return doc;
  }


  analysis() {
    return {
      teta: this.teta,
      vb0: this.vb0,
      region: this.region,
      z0tn: this.z0tn,
      categorie: this.categorie,
      fiabilite: this.fiabilite,
      typeConstruction: this.typeConstruction,
      h: this.h,
      b: this.b,
      me: this.me,
      A: this.A,
      z: this.z,
      Ac: this.Ac,
      ro: this.ro,
      z0: this.z0(),
      zmin: this.zmin(),
      zmax: this.zmax(),
      z0II: this.z0II(),
      kr: this.kr(),
      Co: this.Co(),
      Cdir: this.Cdir(),
      Cseason: this.Cseason(),
      vb: this.vb(),
      qb: this.qb(),
      zs: this.zs(),
      Cr: this.Cr({
        z: this.z ? this.z : this.zs()
      }),
      vm: this.vm({
        z: this.z ? this.z : this.zs()
      }),
      kl: this.kl(),
      Iv: this.Iv({
        z: this.z ? this.z : this.zs()
      }),
      qp: this.qp({
        z: this.z ? this.z : this.zs()
      }),
      L: this.L({
        z: this.z ? this.z : this.zs()
      }),
      fL: this.fL({
        z: this.z ? this.z : this.zs()
      }),
      SL: this.SL({
        z: this.z ? this.z : this.zs()
      }),
      B2: this.B2(),
      n1x: this.n1x(),
      etah: this.etah(),
      etab: this.etab(),
      Rh: this.Rh(),
      Rb: this.Rb(),
      deltas: this.deltas(),
      deltad: this.deltad(),
      deltaa: this.deltaa(),
      delta: this.delta(),
      R2: this.R2(),
      mu: this.mu(),
      kp: this.kp(),
      Cs: this.Cs(),
      Cd: this.Cd(),
      CsCd: this.CsCd(),
      phi: this.phi(),
      v: this.v({
        z: this.z ? this.z : this.zs()
      }),
      Re: this.Re({
        z: this.z ? this.z : this.zs()
      }),
      Cf0: this.Cf0({
        z: this.z ? this.z : this.zs()
      }),
      psiLambda: this.psiLambda(),
      Cf: this.Cf(),
      F: this.F()
    }
  }

  z0() {
    const categorie = this.categorie;
    switch (categorie) {
      case '0':
        return 0.005;
      case 'II':
        return 0.05;
      case 'IIIa':
        return 0.2;
      case 'IIIb':
        return 0.5;
      case 'IV':
        return 1;
      default:
        return 0.005;
    }
  }

  zmin() {
    const categorie = this.categorie;
    switch (categorie) {
      case '0':
        return 1;
      case 'II':
        return 2;
      case 'IIIa':
        return 5;
      case 'IIIb':
        return 9;
      case 'IV':
        return 15;
      default:
        return 1;
    }
  }

  zmax() {
    return 200;
  }

  z0II() {
    return 0.05;
  }

  // Facteur de terrain
  kr() {
    const z0 = this.z0();
    const z0II = this.z0II();
    return 0.19 * (z0 / z0II) ** 0.07;
  }

  // Hauteur de référence
  zs() {
    const typeConstruction = this.typeConstruction;
    const h = this.h;
    const h1 = this.h1;
    const b = this.b;
    const zmin = this.zmin();
    switch (typeConstruction) {
      case 'a':
        return Math.max(0.6 * h, zmin);
      case 'b':
        return Math.max(h1 + h / 2, zmin);
      case 'c':
        return Math.max(h1 + h / 2, zmin);
      default:
        return Math.max(0.6 * h, zmin);
    }
  }


  // Coefficient de rugosité
  Cr({ z }) {
    const kr = this.kr();
    const z0 = this.z0();
    const zmin = this.zmin();
    const zmax = this.zmax();
    if (z <= zmin) {
      return kr * Math.log(zmin / z0);
    }
    if (z > zmax) {
      return kr * Math.log(zmax / z0);
    }
    return kr * Math.log(z / z0);
  }

  // Coefficient orographique
  Co() {
    return 1;
  }

  Cdir() {
    return 1;
  }

  Cseason() {
    return 1;
  }

  // vb: vitesse de référence
  vb() {
    const vb0 = this.vb0;
    const Cdir = this.Cdir();
    const Cseason = this.Cseason();
    return Cdir * Cseason * vb0;
  }

  // qb: pression de référence
  qb() {
    const vb = this.vb();
    const ro = this.ro;
    return 0.5 * ro * vb ** 2;
  }

  vm({ z }) {
    const vb = this.vb();
    const Cr = this.Cr({ z });
    const Co = this.Co();
    return Cr * Co * vb;
  }

  // kl: 
  kl() {
    const z0 = this.z0();
    return 1 - 2 * 10 ** (-4) * (Math.log10(z0) + 3) ** 6;
  }

  // Intensité de turbulence
  Iv({ z }) {
    const kl = this.kl();
    const Co = this.Co();
    const zmin = this.zmin();
    const zel = (z < zmin) ? zmin : z;
    const z0 = this.z0();
    return kl / (Co * Math.log(zel / z0));
  }

  // qp: Pression dynamique de pointe
  qp({ z }) {
    const vb = this.vb();
    const ro = this.ro;
    const z0 = this.z0();
    const z0II = this.z0II();
    const zmin = this.zmin();
    const zel = (z < zmin) ? zmin : z;
    const qp = (1 + 7 / (1 * Math.log(zel / z0))) * ro / 2 * (0.19 * (z0 / z0II) ** 0.07 * Math.log(zel / z0)) ** 2 * 1 * vb ** 2;
    return qp;
  }

  // L: Echelle de turbulence
  L({ z }) {
    const z0 = this.z0();
    const zmin = this.zmin();
    const zt = 200; // m hauteur de référence
    const Lt = 300; // m échelle de référence
    const alpha = 0.67 + 0.05 * Math.log(z0);
    if (z < zmin) {
      return Lt * (zmin / zt) ** (alpha);
    } else {
      return Lt * (z / zt) ** (alpha);
    }
  }

  // fL: Fréquence
  fL({ z }) {
    const n = this.n ? this.n : this.n1x();
    const Lz = this.L({ z });
    const vmz = this.vm({ z });
    return n * Lz / vmz;
  }

  // SL: Densité spectrale
  SL({ z }) {
    const fLz = this.fL({ z });
    return 6.8 * fLz / (1 + 10.2 * fLz) ** (5 / 3);
  }

  // B2: Coefficient de réponse quasi-statique
  B2() {
    const h = Number(this.h);
    const b = Number(this.b);
    const zs = this.zs();
    const Lzs = this.L({ z: zs });
    return 1 / (1 + 0.9 * ((b + h) / Lzs) ** 0.63);
  }

  // n1x: Fréqence propre de la structure
  n1x() {
    const h = this.h;
    //return (K / M)**(0.5) / (2 * Pi);
    return 46 / h;
  }

  etah() {
    const h = this.h;
    const zs = this.zs();
    const fLzs = this.fL({ z: zs });
    const Lzs = this.L({ z: zs });
    return 4.6 * h * fLzs / Lzs;
  }

  etab() {
    const b = this.b;
    const zs = this.zs();
    const fLzs = this.fL({ z: zs });
    const Lzs = this.L({ z: zs });
    return 4.6 * b * fLzs / Lzs;
  }

  // Rh: fonction d'admittance aérodynamique
  Rh() {
    const etah = this.etah();
    if (etah === 0) {
      return 1;
    }
    return 1 / etah - 1 * (1 - Math.exp(-2 * etah)) / (2 * etah ** 2);
  }

  // Rb: fonction d'admittance aérodynamique
  Rb() {
    const etab = this.etab();
    if (etab === 0) {
      return 1;
    }
    return 1 / etab - 1 * (1 - Math.exp(-2 * etab)) / (2 * etab ** 2);
  }

  // Amortissement structural
  deltas() {
    return 0.05;
  }

  // Amortissement du à des dispositifs spéciaux
  deltad() {
    return 0;
  }

  // Amortissement aérodynamique pour le mode fondamental
  deltaa() {
    const Cf = this.Cf();
    const ro = this.ro;
    const b = this.d ? this.d : this.b;
    const zs = this.zs();
    const vmzs = this.vm({ z: zs });
    const n = this.n ? this.n : this.n1x();
    const me = this.me;
    return Cf * ro * b * vmzs / (2 * n * me);
  }

  // Amortissement total
  delta() {
    const deltas = this.deltas();
    const deltad = this.deltad();
    const deltaa = this.deltaa();
    return deltas + deltad + deltaa;
  }

  // R2: Coefficient de réponse résonnante
  R2() {
    const Pi = Math.PI;
    const delta = this.delta();
    const Rh = this.Rh();
    const Rb = this.Rb();
    const zs = this.zs();
    const SLzs = this.SL({ z: zs });
    return Pi ** 2 * SLzs * Rh * Rb / (2 * delta);
  }

  // mu: fréquence de franchissement
  mu() {
    const n = this.n ? this.n : this.n1x();
    const R2 = this.R2();
    const B2 = this.B2();
    return n * (R2 / (B2 + R2)) ** (0.5);
  }

  // kp: facteur de pointe
  kp() {
    const mu = this.mu();
    const T = 600; // Durée d'intégration de la vitesse moyenne du vent
    return (2 * Math.log(mu * T)) ** (0.5) + 0.6 / (2 * Math.log(mu * T)) ** (0.5);
  }


  // Coefficient de dimension
  // B2 coefficient de réponse quasi-statique
  Cs() {
    const zs = this.zs();
    const B2 = this.B2();
    const Ivzs = this.Iv({ z: zs });
    return (1 + 7 * Ivzs * B2 ** (0.5)) / (1 + 7 * Ivzs);
  }

  // Coefficient dynamique
  Cd() {
    const zs = this.zs();
    const R2 = this.R2();
    const B2 = this.B2();
    const kp = this.kp();
    const Ivzs = this.Iv({ z: zs });
    return (1 + 2 * kp * Ivzs * (B2 + R2) ** (0.5)) / (1 + 7 * Ivzs * (B2) ** (0.5));
  }

  // Coefficient dynamique
  CsCd() {
    const zs = this.zs();
    const R2 = this.R2();
    const B2 = this.B2();
    const kp = this.kp();
    const Ivzs = this.Iv({ z: zs });
    return Math.max(0.85, (1 + 2 * kp * Ivzs * (B2 + R2) ** (0.5)) / (1 + 7 * Ivzs));
  }

  // phi: Taux de remplissage
  phi() {
    const A = this.A;
    const Ac = this.Ac;
    if (Ac === 0) {
      return 0;
    } else {
      if (A / Ac > 1) {
        return 1;
      } else {
        return A / Ac
      }
    }
  }

  // v: Vitesse de remplissage
  v({ z }) {
    const qpz = this.qp({ z });
    return (2 * qpz / 1.225) ** (0.5);
  }

  // Re: Nombre de Reynolds pour treillis
  Re({ z }) {
    const d = this.d ? this.d : this.b;
    const vz = this.v({ z });
    const mu = 0.000015 // viscosité de l'air m²/s

    return d * vz / mu;
  }

  // Cf0 coefficient de force des structures en treillis et des échafaudages sans effets d'extrémités
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

  // Coefficient de force pour les éléments structuraux du pylône
  Cf() {
    const Cf0 = this.Cf0();
    const psiLambda = this.psiLambda();
    return Cf0 * psiLambda;
  }


  F() {
    const CsCd = this.CsCd();
    const Cf = this.Cf();
    const z = this.z ? this.z : this.zs();
    const qp = this.qp({ z });
    const d = this.d ? this.d : this.b;
    return CsCd * Cf * qp * d;
  }

}

module.exports = WindData;