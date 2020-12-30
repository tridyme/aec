module.exports = {
  /**
   * Concrete
   */
  fcm: (fck) => {
    return (fck + 8);
  },

  eta: (fck) => {
    if (fck < 50) {
      return 1;
    }
    return (1 - (fck - 50) / 200);
  },

  fcd: (alphacc, fck, gammac) => {
    return (alphacc * fck / gammac);
  },

  epsic2: (fck) => {
    if (fck < 50) {
      return (2 / 1000);
    }
    return (2 + 0.085 * ((fck - 50) ** 0.53)) / 1000;
  },

  epsicu2: (fck) => {
    if (fck < 50) {
      return (3.5 / 1000);
    }
    return ((2.6 + 35 * (((90 - fck) / 100) ** 4)) / 1000);
  },

  lambda: (fck) => {
    if (fck < 50) {
      return (0.8);
    }
    return (0.8 - (fck - 50) / 400);
  },

  fctm: (fck) => {
    return (0.3 * (fck ** (2 / 3)));
  },

  fctk: (fctm) => {
    return (0.7 * fctm);
  },

  Ecm: (fcm) => {
    return (22000 * ((fcm / 10) ** 0.3));
  },

  /**
   * Steel
   */

  fyd: (fyk, gammas) => {
    return (fyk / gammas);
  },

  epsiyd: (fyd, Es) => {
    return (fyd / Es);
  },

  ductilityClassList: [
    { name: 'A', value: 'A' },
    { name: 'B', value: 'B' },
    { name: 'C', value: 'C' }
  ],

  epsiuk: (ductilityClass) => {
    switch (ductilityClass) {
      case 'A':
        return 0.025;
      case 'B':
        return 0.05;
      case 'C':
        return 0.075;
      default:
        return 0.025;
    }
  },

  k: (ductilityClass) => {
    switch (ductilityClass) {
      case 'A':
        return 1.05;
      case 'B':
        return 1.08;
      case 'C':
        return 1.15;
      default:
        return 1.05;
    }
  },

  epsiud: (epsiuk) => {
    return (0.9 * epsiuk);
  },

  A: (fyd, k, epsiyd, epsiuk) => {
    return (fyd * (k * epsiyd - epsiuk) / (epsiyd - epsiuk));
  },

  B: (fyd, k, epsiyd, epsiuk) => {
    return ((k * fyd - fyd) / (epsiuk - epsiyd));
  }
};
