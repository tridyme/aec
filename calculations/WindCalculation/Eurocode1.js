class Eurocode1 {
	constructor(direction, velocityRef, site) {
    this.teta = direction;
    this.vb0 = velocityRef;
    this.categorie = site;
	}


  get documentation() {
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
      vb: {
        name: 'vb',
        text: 'vb',
        description: "Valeur de base de la vitesse de référence du vent",
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

  z0() {
    const categorie = this.categorie;
    switch(categorie) {
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
    switch(categorie) {
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
    return 0.19 * (z0/z0II)**0.07;
  }

  // Hauteur de référence
  zs({ typeConstruction, h, h1 }) {
    const zmin = this.zmin();
    switch(typeConstruction) {
      case 'a':
        return Math.max(0.6 * h, zmin);
      case 'b':
        return Math.max(h1 + h/2, zmin);
      case 'c':
        return Math.max(h1 + h/2, zmin);
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
    if(z <= zmin) {
      return kr * Math.log(zmin / z0);
    }
    if(z > zmax) {
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

  vb() {
    const vb0 = this.vb0;
    const Cdir = this.Cdir();
    const Cseason = this.Cseason();
    return Cdir * Cseason * vb0;
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
    return 1 - 2*10**(-4)*(Math.log10(z0)+3)**6;
  }

  // Intensité de turbulence
  Iv({ z }) {
    const kl = this.kl();
    const Co = this.Co();
    const zmin = this.zmin();
    const zel = (z < zmin)? zmin: z;
    const z0 = this.z0();
    return 1 / (Co * Math.log(zel/z0));
  }

  // qp: Pression dynamique de pointe
  qp({ z }) {
    const vb = this.vb();
    const ro = 1.225;
    const z0 = this.z0();
    const z0II = this.z0II();
    const zmin = this.zmin();
    const zel = (z < zmin)? zmin: z;
    const qp = (1 + 7 /(1 * Math.log(zel / z0))) * ro / 2 * (0.19 * (z0 / z0II)**0.07 * Math.log(zel / z0))**2 * 1 * vb**2;
    return qp;
  }

  // L: Echelle de turbulence
  L({ z }) {
    const z0 = this.z0();
    const zmin = this.zmin();
    const zt = 200; // m hauteur de référence
    const Lt = 300; // m échelle de référence
    const alpha = 0.67 + 0.05 * Math.log(z0);
    if(z < zmin ) {
      return Lt * (zmin / zt)**(alpha);
    } else {
      return Lt * (z / zt)**(alpha);
    }
  }

  // fL: Fréquence
  fL({ z, n }) {
    const Lz = this.L({ z });
    const vmz = this.vm({ z });
    return n * Lz / vmz;
  }

  // SL: Densité spectrale
  SL({ z, n }) {
    const fLz = this.fL({ z, n });
    return 6.8 * fLz / (1 + 10.2 * fLz)**(5/3);
  }

  // B2: Coefficient de réponse quasi-statique
  B2({ typeConstruction, h, h1, b }) {
    const zs = this.zs({ typeConstruction, h });
    const Lzs = this.L({ z: zs });
    return 1/(1+0.9*((b + h)/Lzs)**0.63);
  }

  // n1x: Fréqence propre de la structure
  n1x({ M, K }) {
    const Pi = Math.PI;
    //return (K / M)**(0.5) / (2 * Pi);
    return 46 / h;
  }

  // R2: Coefficient de réponse résonnante
  R2() {

  }







  

  // Coefficient de dimension
  // B2 coefficient de réponse quasi-statique traduisant l'imparfaite
  Cs({ C0, z0, B2, zs }) {
    const Ivzs = this.Iv({ C0, z0, zs });
    return (1 + 7 * Ivzs * B2**(0.5))/(1 + 7 * Ivzs);
  }

  // Coefficient dynamique
  Cd({ C0, kp, z0, B2, R2, zs }) {
    const Ivzs = this.Iv({ C0, z0, zs });
    return (1 + 7 * Ivzs * B2**(0.5))/(1 + 7 * Ivzs);
  }


  // Re: Nombre de Reynolds
  Re({ b, z }) {
    const vb = this.vb();
    const vz = this.vm({ vb, z });
    const mu = 0.000015 // viscosité de l'air m²/s

    return b * vz / mu;
  }


  // phi: Taux de remplissage
  phi({ A, Ac }) {
    return A / Ac;
  }

  // v: Vitesse de remplissage
  v({ z }) {
    const qpz = this.qp({ z });
    return (2 * qpz / 1.225);
  }

  // Cf0 coefficient de force des structures en treillis et des échafaudages sans effets d'extrémités
  Cf0({ phi }) {
    if(phi < 0.2 ){
      return 2 - phi * 0.4 / 0.22;
    }
    if(phi > 0.9) {
      return (phi - 0.9) * 0.4 / 0.1 + 1.6;
    }
    return 1.6;
  }

  psiLambda() {
    return 1;
  }

  Cf({ Cf0, psiLambda }) {
    return Cf0 * psiLambda;
  }


}

module.exports = Eurocode1;