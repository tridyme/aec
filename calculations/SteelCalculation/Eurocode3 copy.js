const Eurocode3 = {
  CL: (geometry, steel, loads, sectiontype) => {
    const tf = geometry.tf;
    const tw = geometry.tw;
    const b = geometry.b;
    const c = geometry.c;
    switch (sectiontype) {
      case 'iSectionSteel': {
        const h = geometry.h;
        const Ned = loads.Ned;
        const gammaM0 = steel.gammaM0;
        const fyk = steel.fyk;
        const alpha = 0.5 + Ned * gammaM0 / (2 * (h - 2 * (tf - c)) * (tw - 2 * c) * fyk * 1000);
        const Condition1 = (h - 2 * (tf - c)) / (tw - 2 * c);
        const Condition2 = (b - tw) / (2 * tf - 4 * c);
        if ((alpha > 1 && Condition1 > 30.78) || (alpha > 0.5 && Condition1 > 369.36 / (13 * alpha - 1)) || (alpha <= 0.5 && Condition1 > 33.615 / alpha) || Condition2 > 8.1 / alpha) {
          return 0;
        }
        return 1;
      }
      case 'boxSection': {
        const d = geometry.d;
        const Condition1 = (d + 2 * c) / (tf - 2 * c);
        const Condition2 = (b - d - 2 * tw) / (2 * tf - 4 * c);
        if (Condition1 > 30.78 || Condition2 > 8.1) {
          return 0;
        }
        return 1;
      }
      default:
        return 0;
    }
  },

  NplRd: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const A = sectiondata.A(geometry, sectiontype);
    const UnMoinsRho = ec3.UnMoinsRho(geometry, loads, steel, sectiondata, sectiontype);
    const fyk = steel.fyk;
    if (Ned > 0) {
      const gammaM1 = steel.gammaM1;
      return A * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    const gammaM0 = steel.gammaM0;
    return A * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  },

  MelxRd: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const Welx = sectiondata.Welx(geometry, sectiontype);
    const UnMoinsRho = ec3.UnMoinsRho(geometry, loads, steel, sectiondata, sectiontype);
    const fyk = steel.fyk;
    const gammaM1 = steel.gammaM1;
    if (Ned > 0) {
      return Welx * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    const gammaM0 = steel.gammaM0;
    return Welx * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  },

  MelyRd: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const Wely = sectiondata.Wely(geometry, sectiontype);
    const UnMoinsRho = ec3.UnMoinsRho(geometry, loads, steel, sectiondata, sectiontype);
    const fyk = steel.fyk;
    const gammaM1 = steel.gammaM1;
    if (Ned > 0) {
      return Wely * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    const gammaM0 = steel.gammaM0;
    return Wely * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  },

  MplxRd: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const Wplx = sectiondata.Wplx(geometry, sectiontype);
    const UnMoinsRho = ec3.UnMoinsRho(geometry, loads, steel, sectiondata, sectiontype);
    const fyk = steel.fyk;
    const gammaM1 = steel.gammaM1;
    if (Ned > 0) {
      return Wplx * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    const gammaM0 = steel.gammaM0;
    return Wplx * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  },

  MplyRd: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const Wply = sectiondata.Wply(geometry, sectiontype);
    const UnMoinsRho = ec3.UnMoinsRho(geometry, loads, steel, sectiondata, sectiontype);
    const fyk = steel.fyk;
    const gammaM1 = steel.gammaM1;
    if (Ned > 0) {
      return Wply * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    const gammaM0 = steel.gammaM0;
    return Wply * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  },

  khix: (geometry, steel, loads, sectiondata, sectiontype) => {
    const A = sectiondata.A(geometry, sectiontype);
    const fyk = steel.fyk;
    const Es = steel.Es;
    const L = geometry.L;
    const Ix = sectiondata.Ix(geometry, sectiontype);
    const tf = geometry.tf;
    const Ned = loads.Ned;
    const Ncr = (Math.PI ** 2) * Es * (10 ** 3) * Ix / (L ** 2);
    const lambdai = Math.sqrt(A * fyk * (10 ** 3) / Ncr);
    if (Ned > 0) {
      switch (sectiontype) {
        case 'iSectionSteel': {
          if (tf > 0.04) {
            const alpha = 0.49;
            const phii = (1 + alpha * (lambdai - 0.2) + (lambdai ** 2)) / 2;
            return Math.min(1 / (phii + Math.sqrt((phii ** 2) - (lambdai ** 2))), 1);
          }
          const alpha = 0.34;
          const phii = (1 + alpha * (lambdai - 0.2) + (lambdai ** 2)) / 2;
          return Math.min(1 / (phii + Math.sqrt((phii ** 2) - (lambdai ** 2))), 1);
        }
        case 'boxSection': {
          const alpha = 0.34;
          const phii = (1 + alpha * (lambdai - 0.2) + (lambdai ** 2)) / 2;
          return Math.min(1 / (phii + Math.sqrt((phii ** 2) - (lambdai ** 2))), 1);
        }
        default: {
          const alpha = 0.49;
          const phii = (1 + alpha * (lambdai - 0.2) + (lambdai ** 2)) / 2;
          return Math.min(1 / (phii + Math.sqrt((phii ** 2) - (lambdai ** 2))), 1);
        }
      }
    }
    return 1;
  },

  khiy: (geometry, steel, loads, sectiondata, sectiontype) => {
    const A = sectiondata.A(geometry, sectiontype);
    const fyk = steel.fyk;
    const Es = steel.Es;
    const L = geometry.L;
    const Iy = sectiondata.Iy(geometry, sectiontype);
    const tf = geometry.tf;
    const Ned = loads.Ned;
    const Ncr = (Math.PI ** 2) * Es * (10 ** 3) * Iy / (L ** 2);
    const lambdai = Math.sqrt(A * fyk * (10 ** 3) / Ncr);
    if (Ned > 0) {
      switch (sectiontype) {
        case 'iSectionSteel': {
          if (tf > 0.04) {
            const alpha = 0.49;
            const phii = (1 + alpha * (lambdai - 0.2) + (lambdai ** 2)) / 2;
            return Math.min(1 / (phii + Math.sqrt((phii ** 2) - (lambdai ** 2))), 1);
          }
          const alpha = 0.34;
          const phii = (1 + alpha * (lambdai - 0.2) + (lambdai ** 2)) / 2;
          return Math.min(1 / (phii + Math.sqrt((phii ** 2) - (lambdai ** 2))), 1);
        }
        case 'boxSection': {
          const alpha = 0.34;
          const phii = (1 + alpha * (lambdai - 0.2) + (lambdai ** 2)) / 2;
          return Math.min(1 / (phii + Math.sqrt((phii ** 2) - (lambdai ** 2))), 1);
        }
        default: {
          const alpha = 0.49;
          const phii = (1 + alpha * (lambdai - 0.2) + (lambdai ** 2)) / 2;
          return Math.min(1 / (phii + Math.sqrt((phii ** 2) - (lambdai ** 2))), 1);
        }
      }
    }
    return 1;
  },

  khiLT: (geometry, steel, sectiondata, sectiontype) => {
    const h = geometry.h;
    const b = geometry.b;
    const c = geometry.c;
    const L = geometry.L;
    const RorW = geometry.RolledOrWelded;
    const fyk = steel.fyk;
    const Es = steel.Es;
    const G = steel.G;
    const Iy = sectiondata.Iy(geometry, sectiontype);
    const Iw = sectiondata.Iw(geometry, sectiontype);
    const It = sectiondata.It(geometry, sectiontype);
    const yg = sectiondata.yg(geometry);
    const Welx = sectiondata.Welx(geometry, sectiontype);
    const Mcr = 1.127 * (Math.PI ** 2) * Es * (10 ** 3) * Iy / (L ** 2) * (Math.sqrt(Iw / Iy + (L ** 2) * G * It / ((Math.PI ** 2) * Es * Iy) + ((0.454 * yg) ** 2)) - 0.454 * yg);
    const lambdaLT = Math.sqrt(Welx * fyk * (10 ** 3) / Mcr);
    switch (sectiontype) {
      case 'iSectionSteel': {
        if (RorW === 'R') {
          if ((h - 2 * c) / (b - 2 * c) > 2) {
            const alphaLT = 0.34;
            const phiLT = (1 + alphaLT * (lambdaLT - 0.2) + (lambdaLT ** 2)) / 2;
            return Math.min(1 / (phiLT + Math.sqrt((phiLT ** 2) - (lambdaLT ** 2))), 1);
          }
          const alphaLT = 0.21;
          const phiLT = (1 + alphaLT * (lambdaLT - 0.2) + (lambdaLT ** 2)) / 2;
          return Math.min(1 / (phiLT + Math.sqrt((phiLT ** 2) - (lambdaLT ** 2))), 1);
        }
        if (RorW === 'W') {
          if ((h - 2 * c) / (b - 2 * c) > 2) {
            const alphaLT = 0.76;
            const phiLT = (1 + alphaLT * (lambdaLT - 0.2) + (lambdaLT ** 2)) / 2;
            return Math.min(1 / (phiLT + Math.sqrt((phiLT ** 2) - (lambdaLT ** 2))), 1);
          }
          const alphaLT = 0.49;
          const phiLT = (1 + alphaLT * (lambdaLT - 0.2) + (lambdaLT ** 2)) / 2;
          return Math.min(1 / (phiLT + Math.sqrt((phiLT ** 2) - (lambdaLT ** 2))), 1);
        }
        const alphaLT = 0.49;
        const phiLT = (1 + alphaLT * (lambdaLT - 0.2) + (lambdaLT ** 2)) / 2;
        return Math.min(1 / (phiLT + Math.sqrt((phiLT ** 2) - (lambdaLT ** 2))), 1);
      }
      default: {
        const alphaLT = 0.76;
        const phiLT = (1 + alphaLT * (lambdaLT - 0.2) + (lambdaLT ** 2)) / 2;
        return Math.min(1 / (phiLT + Math.sqrt((phiLT ** 2) - (lambdaLT ** 2))), 1);
      }
    }
  },

  kxx: (geometry, steel, loads, sectiondata, sectiontype) => {
    const MDx = loads.MomentDiagramX;
    const Es = steel.Es;
    const L = geometry.L;
    const Ix = sectiondata.Ix(geometry, sectiontype);
    const Ned = loads.Ned;
    const Ncr = (Math.PI ** 2) * Es * (10 ** 3) * Ix / (L ** 2);
    const khix = ec3.khix(geometry, steel, loads, sectiondata, sectiontype);
    if (MDx === 1) {
      const psix = loads.psix;
      const Cmx0 = 0.79 + 0.21 * psix + 0.36 * (psix - 0.33) * Math.max(0, Ned) / Ncr;
      return Cmx0 / (1 - khix * Math.max(0, Ned) / Ncr);
    }
    if (MDx === 2) {
      const Mxed = loads.Mxed;
      const deltax = loads.deltax;
      const Cmx0 = 1 + ((Math.PI ** 2) * Es * Ix * deltax / ((L ** 2) * Mxed) - 1) * Math.max(0, Ned) / Ncr;
      return Cmx0 / (1 - khix * Math.max(0, Ned) / Ncr);
    }
    if (MDx === 3) {
      const Cmx0 = 1 - 0.18 * Math.max(0, Ned) / Ncr;
      return Cmx0 / (1 - khix * Math.max(0, Ned) / Ncr);
    }
    if (MDx === 4) {
      const Cmx0 = 1 + 0.03 * Math.max(0, Ned) / Ncr;
      return Cmx0 / (1 - khix * Math.max(0, Ned) / Ncr);
    }
    return 0;
  },

  kxy: (geometry, steel, loads, sectiondata, sectiontype) => {
    const MDy = loads.MomentDiagramY;
    const Es = steel.Es;
    const L = geometry.L;
    const Iy = sectiondata.Iy(geometry, sectiontype);
    const Ix = sectiondata.Ix(geometry, sectiontype);
    const Ned = loads.Ned;
    const Ncry = (Math.PI ** 2) * Es * (10 ** 3) * Iy / (L ** 2);
    const Ncrx = (Math.PI ** 2) * Es * (10 ** 3) * Ix / (L ** 2);
    const khix = ec3.khix(geometry, steel, loads, sectiondata, sectiontype);
    if (MDy === 1) {
      const psiy = loads.psiy;
      const Cmy0 = 0.79 + 0.21 * psiy + 0.36 * (psiy - 0.33) * Math.max(0, Ned) / Ncry;
      return Cmy0 * (1 - Math.max(0, Ned) / Ncrx) / ((1 - khix * Math.max(0, Ned) / Ncrx) * (1 - Math.max(0, Ned) / Ncry));
    }
    if (MDy === 2) {
      const Myed = loads.Myed;
      const deltay = loads.deltay;
      const Cmy0 = 1 + ((Math.PI ** 2) * Es * Iy * deltay / ((L ** 2) * Myed) - 1) * Math.max(0, Ned) / Ncry;
      return Cmy0 * (1 - Math.max(0, Ned) / Ncrx) / ((1 - khix * Math.max(0, Ned) / Ncrx) * (1 - Math.max(0, Ned) / Ncry));
    }
    if (MDy === 3) {
      const Cmy0 = 1 - 0.18 * Math.max(0, Ned) / Ncry;
      return Cmy0 * (1 - Math.max(0, Ned) / Ncrx) / ((1 - khix * Math.max(0, Ned) / Ncrx) * (1 - Math.max(0, Ned) / Ncry));
    }
    if (MDy === 4) {
      const Cmy0 = 1 + 0.03 * Math.max(0, Ned) / Ncry;
      return Cmy0 * (1 - Math.max(0, Ned) / Ncrx) / ((1 - khix * Math.max(0, Ned) / Ncrx) * (1 - Math.max(0, Ned) / Ncry));
    }
    return 0;
  },

  kyx: (geometry, steel, loads, sectiondata, sectiontype) => {
    const MDx = loads.MomentDiagramX;
    const Es = steel.Es;
    const L = geometry.L;
    const Iy = sectiondata.Iy(geometry, sectiontype);
    const Ix = sectiondata.Ix(geometry, sectiontype);
    const Ned = loads.Ned;
    const Ncry = (Math.PI ** 2) * Es * (10 ** 3) * Iy / (L ** 2);
    const Ncrx = (Math.PI ** 2) * Es * (10 ** 3) * Ix / (L ** 2);
    const khiy = ec3.khiy(geometry, steel, loads, sectiondata, sectiontype);
    if (MDx === 1) {
      const psix = loads.psix;
      const Cmx0 = 0.79 + 0.21 * psix + 0.36 * (psix - 0.33) * Math.max(0, Ned) / Ncrx;
      return Cmx0 * (1 - Math.max(0, Ned) / Ncry) / ((1 - khiy * Math.max(0, Ned) / Ncry) * (1 - Math.max(0, Ned) / Ncrx));
    }
    if (MDx === 2) {
      const Mxed = loads.Mxed;
      const deltax = loads.deltax;
      const Cmx0 = 1 + ((Math.PI ** 2) * Es * Iy * deltax / ((L ** 2) * Mxed) - 1) * Math.max(0, Ned) / Ncrx;
      return Cmx0 * (1 - Math.max(0, Ned) / Ncry) / ((1 - khiy * Math.max(0, Ned) / Ncry) * (1 - Math.max(0, Ned) / Ncrx));
    }
    if (MDx === 3) {
      const Cmx0 = 1 - 0.18 * Math.max(0, Ned) / Ncrx;
      return Cmx0 * (1 - Math.max(0, Ned) / Ncry) / ((1 - khiy * Math.max(0, Ned) / Ncry) * (1 - Math.max(0, Ned) / Ncrx));
    }
    if (MDx === 4) {
      const Cmx0 = 1 + 0.03 * Math.max(0, Ned) / Ncrx;
      return Cmx0 * (1 - Math.max(0, Ned) / Ncry) / ((1 - khiy * Math.max(0, Ned) / Ncry) * (1 - Math.max(0, Ned) / Ncrx));
    }
    return 0;
  },


  kyy: (geometry, steel, loads, sectiondata, sectiontype) => {
    const MDy = loads.MomentDiagramY;
    const Es = steel.Es;
    const L = geometry.L;
    const Iy = sectiondata.Iy(geometry, sectiontype);
    const Ned = loads.Ned;
    const Ncr = (Math.PI ** 2) * Es * (10 ** 3) * Iy / (L ** 2);
    const khiy = ec3.khiy(geometry, steel, loads, sectiondata, sectiontype);
    if (MDy === 1) {
      const psiy = loads.psiy;
      const Cmy0 = 0.79 + 0.21 * psiy + 0.36 * (psiy - 0.33) * Math.max(0, Ned) / Ncr;
      return Cmy0 / (1 - khiy * Math.max(0, Ned) / Ncr);
    }
    if (MDy === 2) {
      const Myed = loads.Myed;
      const deltay = loads.deltay;
      const Cmy0 = 1 + ((Math.PI ** 2) * Es * Iy * deltay / ((L ** 2) * Myed) - 1) * Math.max(0, Ned) / Ncr;
      return Cmy0 / (1 - khiy * Math.max(0, Ned) / Ncr);
    }
    if (MDy === 3) {
      const Cmy0 = 1 - 0.18 * Math.max(0, Ned) / Ncr;
      return Cmy0 / (1 - khiy * Math.max(0, Ned) / Ncr);
    }
    if (MDy === 4) {
      const Cmy0 = 1 + 0.03 * Math.max(0, Ned) / Ncr;
      return Cmy0 / (1 - khiy * Math.max(0, Ned) / Ncr);
    }
    return 0;
  },

  Condition1: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const khix = ec3.khix(geometry, steel, loads, sectiondata, sectiontype);
    const NplRd = ec3.NplRd(geometry, steel, loads, sectiondata, sectiontype);
    const kxx = ec3.kxx(geometry, steel, loads, sectiondata, sectiontype);
    const kxy = ec3.kxy(geometry, steel, loads, sectiondata, sectiontype);
    const Mxed = loads.Mxed;
    const Myed = loads.Myed;
    const khiLT = ec3.khiLT(geometry, steel, sectiondata, sectiontype);
    const MelxRd = ec3.MelxRd(geometry, steel, loads, sectiondata, sectiontype);
    const MelyRd = ec3.MelyRd(geometry, steel, loads, sectiondata, sectiontype);
    const Condition1 = Ned / (khix * NplRd) + kxx * Mxed / (khiLT * MelxRd) + kxy * Myed / MelyRd;
    return Math.max(Condition1, 0);
  },

  Condition2: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const khiy = ec3.khiy(geometry, steel, loads, sectiondata, sectiontype);
    const NplRd = ec3.NplRd(geometry, steel, loads, sectiondata, sectiontype);
    const kyy = ec3.kyy(geometry, steel, loads, sectiondata, sectiontype);
    const kyx = ec3.kyx(geometry, steel, loads, sectiondata, sectiontype);
    const Mxed = loads.Mxed;
    const Myed = loads.Myed;
    const khiLT = ec3.khiLT(geometry, steel, sectiondata, sectiontype);
    const MelxRd = ec3.MelxRd(geometry, steel, loads, sectiondata, sectiontype);
    const MelyRd = ec3.MelyRd(geometry, steel, loads, sectiondata, sectiontype);
    const Condition2 = Ned / (khiy * NplRd) + kyx * Mxed / (khiLT * MelxRd) + kyy * Myed / MelyRd;
    return Math.max(Condition2, 0);
  },

  Condition3: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const NplRd = ec3.NplRd(geometry, steel, loads, sectiondata, sectiontype);
    const Mxed = loads.Mxed;
    const Myed = loads.Myed;
    const MelxRd = ec3.MelxRd(geometry, steel, loads, sectiondata, sectiontype);
    const MelyRd = ec3.MelyRd(geometry, steel, loads, sectiondata, sectiontype);
    return Math.abs(Ned / NplRd - Mxed / MelxRd - Myed / MelyRd);
  },

  SF: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Condition1 = ec3.Condition1(geometry, steel, loads, sectiondata, sectiontype);
    const Condition2 = ec3.Condition2(geometry, steel, loads, sectiondata, sectiontype);
    const Condition3 = ec3.Condition3(geometry, steel, loads, sectiondata, sectiontype);
    return Math.max(Condition1, Condition2, Condition3);
  },

  Condition1p: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const khix = ec3.khix(geometry, steel, loads, sectiondata, sectiontype);
    const NplRd = ec3.NplRd(geometry, steel, loads, sectiondata, sectiontype);
    const kxx = ec3.kxx(geometry, steel, loads, sectiondata, sectiontype);
    const kxy = ec3.kxy(geometry, steel, loads, sectiondata, sectiontype);
    const Mxed = loads.Mxed;
    const Myed = loads.Myed;
    const khiLT = ec3.khiLT(geometry, steel, sectiondata, sectiontype);
    const MplxRd = ec3.MplxRd(geometry, steel, loads, sectiondata, sectiontype);
    const MplyRd = ec3.MplyRd(geometry, steel, loads, sectiondata, sectiontype);
    const Condition1p = Ned / (khix * NplRd) + kxx * Mxed / (khiLT * MplxRd) + kxy * Myed / MplyRd;
    return Math.max(Condition1p, 0);
  },

  Condition2p: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const khiy = ec3.khiy(geometry, steel, loads, sectiondata, sectiontype);
    const NplRd = ec3.NplRd(geometry, steel, loads, sectiondata, sectiontype);
    const kyx = ec3.kyx(geometry, steel, loads, sectiondata, sectiontype);
    const kyy = ec3.kyy(geometry, steel, loads, sectiondata, sectiontype);
    const Mxed = loads.Mxed;
    const Myed = loads.Myed;
    const khiLT = ec3.khiLT(geometry, steel, sectiondata, sectiontype);
    const MplxRd = ec3.MplxRd(geometry, steel, loads, sectiondata, sectiontype);
    const MplyRd = ec3.MplyRd(geometry, steel, loads, sectiondata, sectiontype);
    const Condition2p = Ned / (khiy * NplRd) + kyx * Mxed / (khiLT * MplxRd) + kyy * Myed / MplyRd;
    return Math.max(Condition2p, 0);
  },

  Condition3p: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Ned = loads.Ned;
    const NplRd = ec3.NplRd(geometry, steel, loads, sectiondata, sectiontype);
    const Mxed = loads.Mxed;
    const Myed = loads.Myed;
    const MplxRd = ec3.MplxRd(geometry, steel, loads, sectiondata, sectiontype);
    const MplyRd = ec3.MplyRd(geometry, steel, loads, sectiondata, sectiontype);
    const prop1 = Mxed / (MplxRd * (1 - ((Ned / NplRd) ** 2)));
    const prop2 = Myed / (MplyRd * (1 - ((Ned / NplRd) ** 2)));
    const prop3 = (prop1 ** 2) + (prop2 ** Math.max(5 * Ned / NplRd, 1));
    return Math.max(prop1, prop2, prop3);
  },

  SFp: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Condition1p = ec3.Condition1p(geometry, steel, loads, sectiondata, sectiontype);
    const Condition2p = ec3.Condition2p(geometry, steel, loads, sectiondata, sectiontype);
    const Condition3p = ec3.Condition3p(geometry, steel, loads, sectiondata, sectiontype);
    return Math.max(Condition1p, Condition2p, Condition3p);
  },

  VplRd: (geometry, steel, loads, sectiondata, sectiontype) => {
    const Av = sectiondata.Av(geometry, sectiontype);
    const fyk = steel.fyk;
    const thotweb = ec3.thotweb(geometry, loads, sectiontype);
    const gammaM0 = steel.gammaM0;
    return Av * fyk * (10 ** 3) / (Math.sqrt(3) * gammaM0) * (1 - thotweb * Math.sqrt(3) * gammaM0 / fyk);
  },

  VedVplRd: (geometry, loads, steel, sectiondata, sectiontype) => {
    const VplRd = ec3.VplRd(geometry, steel, loads, sectiondata, sectiontype);
    const Ved = loads.Ved;
    return Ved / VplRd;
  },

  UnMoinsRho: (geometry, loads, steel, sectiondata, sectiontype) => {
    const VedVplRd = ec3.VedVplRd(geometry, loads, steel, sectiondata, sectiontype);
    if (VedVplRd > 0.5) {
      return 1 - ((2 * VedVplRd - 1) ** 2);
    }
    return 1;
  },

  Tt: (loads, sectiontype) => {
    switch (sectiontype) {
      case 'boxSection': {
        const Ted = loads.Ted;
        return Ted;
      }
      default:
        return 0;
    }
  },

  Am: (geometry, sectiontype) => {
    switch (sectiontype) {
      case 'boxSection': {
        const h = geometry.h;
        const d = geometry.d;
        const tf = geometry.tf;
        return (h - tf) * (d + tf);
      }
      default:
        return 'NA';
    }
  },

  thotweb: (geometry, loads, sectiontype) => {
    switch (sectiontype) {
      case 'boxSection': {
        const Am = ec3.Am(geometry, sectiontype);
        const tw = geometry.tw;
        const c = geometry.c;
        const Tt = ec3.Tt(loads, sectiontype);
        return Tt / (2000 * Am * (tw - 2 * c));
      }
      default:
        return 0;
    }
  },

  Tw: (loads, sectiontype) => {
    switch (sectiontype) {
      case 'boxSection':
        return 0;
      default: {
        const Ted = loads.Ted;
        return Ted;
      }
    }
  },

  Sw: (geometry, sectiontype) => {
    switch (sectiontype) {
      case 'boxSection':
        return 0;
      default: {
        const h = geometry.h;
        const b = geometry.b;
        const tf = geometry.tf;
        const c = geometry.c;
        return (h - tf) * (tf - 2 * c) * ((b - 2 * c) ** 2) / 16;
      }
    }
  },

  w: (geometry, sectiontype) => {
    switch (sectiontype) {
      case 'boxSection':
        return 0;
      default: {
        const h = geometry.h;
        const b = geometry.b;
        const tf = geometry.tf;
        const c = geometry.c;
        return (h - tf) * (b - 2 * c) / 4;
      }
    }
  },

  sigmaw: (geometry, loads, sectiondata, sectiontype) => {
    const Tw = ec3.Tw(loads, sectiontype);
    const w = ec3.w(geometry, sectiontype);
    const Iw = sectiondata.Iw(geometry, sectiontype);
    return Tw * w / (1000 * Iw);
  },

  thowweb: (geometry, loads, sectiondata, sectiontype) => {
    const Tw = ec3.Tw(loads, sectiontype);
    const Sw = ec3.Sw(geometry, sectiontype);
    const Iw = sectiondata.Iw(geometry, sectiontype);
    const tw = geometry.tw;
    const c = geometry.c;
    return Tw * Sw / (1000 * Iw * (tw - 2 * c));
  },

  Aw: (geometry, sectiontype) => {
    switch (sectiontype) {
      case 'boxSection': {
        const h = geometry.h;
        const tw = geometry.tw;
        const tf = geometry.tf;
        const c = geometry.c;
        return 2 * (tw - 2 * c) * (h - 2 * (tf - c));
      }
      default: {
        const h = geometry.h;
        const tw = geometry.tw;
        const tf = geometry.tf;
        const c = geometry.c;
        return (tw - 2 * c) * (h - 2 * (tf - c));
      }
    }
  },

  thoshearweb: (geometry, loads, sectiontype) => {
    const Ved = loads.Ved;
    const Aw = ec3.Aw(geometry, sectiontype);
    return Ved / (1000 * Aw);
  },

  thoEdweb: (geometry, loads, sectiondata, sectiontype) => {
    const thoshearweb = ec3.thoshearweb(geometry, loads, sectiontype);
    const thowweb = ec3.thowweb(geometry, loads, sectiondata, sectiontype);
    const thotweb = ec3.thotweb(geometry, loads, sectiontype);
    return thoshearweb + thowweb + thotweb;
  },

  SFt: (geometry, steel, loads, sectiondata, sectiontype) => {
    const thoEdweb = ec3.thoEdweb(geometry, loads, sectiondata, sectiontype);
    const gammaM0 = steel.gammaM0;
    const fyk = steel.fyk;
    return thoEdweb * Math.sqrt(3) * gammaM0 / fyk;
  }
};

module.exports = Eurocode3;
