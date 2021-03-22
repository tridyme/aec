const SectionGeometry = require('../../SectionGeometry');

class Section {
  constructor({ geometry, material, loads, sectionType }) {
    // GEOMETRY
    this.geometry = geometry;
    this.sectionType = sectionType;

    // MATERIAL
    this.material = material;

    // LOADS
    this.loads = loads;
  };

  sectionData() {
    const geometry = this.geometry;
    const sectionType = this.sectionType;
    // console.log('SECTION TYPE', sectionType);
    // console.log('GEOMETRY', geometry);
    const secData = new SectionGeometry[`${sectionType}`](geometry);
    return {
      yg: this.geometry.yg ? this.geometry.yg : secData.yg,
      zg: this.geometry.zg ? this.geometry.zg : secData.zg,
      A: this.geometry.A ? this.geometry.A : secData.A,
      Av: this.geometry.Av ? this.geometry.Av : secData.Av,
      Iy: this.geometry.Iy ? this.geometry.Iy : secData.Iy,
      Iz: this.geometry.Iz ? this.geometry.Iz : secData.Iz,
      It: this.geometry.It ? this.geometry.It : secData.It,
      Iw: this.geometry.Iw ? this.geometry.Iw : secData.Iw,
      Wely: this.geometry.Wely ? this.geometry.Wely : secData.Wely,
      Welz: this.geometry.Welz ? this.geometry.Welz : secData.Welz,
      Wply: this.geometry.Wply ? this.geometry.Wply : secData.Wply,
      Wplz: this.geometry.Wplz ? this.geometry.Wplz : secData.Wplz,
    };
  }

  steelAnalysis() {
    return {
      yg: this.sectionData.yg,
      zg: this.sectionData.zg,
      A: this.sectionData.A,
      Av: this.sectionData.Av,
      Iy: this.sectionData.Iy,
      Iz: this.sectionData.Iz,
      It: this.sectionData.It,
      Wely: this.sectionData.Wely,
      Welz: this.sectionData.Welz,
      Wply: this.sectionData.Wply,
      Wplz: this.sectionData.Wplz,
      alphay: this.alphay(),
      alphaz: this.alphaz(),
      Ncry: this.Ncry(),
      Ncrz: this.Ncrz(),
      lambday: this.lambday(),
      lambdaz: this.lambdaz(),
      phiy: this.phiy(),
      phiz: this.phiz(),
      ksiy: this.ksiy(),
      ksiz: this.ksiz(),
      alphaLT: this.alphaLT(),
      Mcr: this.Mcr(),
      lambdaLT: this.lambdaLT(),
      phiLT: this.phiLT(),
      ksiLT: this.ksiLT(),
      Cmy0: this.Cmy0(),
      Cmz0: this.Cmz0(),
      CmLT: this.CmLT(),
      VplRd: this.VplRd(),
      SFShear: this.SFShear(),
      UnMoinsRho: this.UnMoinsRho(),
      Tt: this.Tt(),
      Am: this.Am(),
      thotweb: this.thotweb(),
      NplRd: this.NplRd(),
      MelyRd: this.MelyRd(),
      MelzRd: this.MelzRd(),
      MplyRd: this.MplyRd(),
      MplzRd: this.MplzRd(),
      kyy: this.kyy(),
      kzz: this.kzz(),
      kyz: this.kyz(),
      kzy: this.kzy(),
      SFBucklingy: this.SFBucklingy(),
      SFBucklingz: this.SFBucklingz(),
      SFTension: this.SFTension(),
      SFAxialBending: this.SFAxialBending(),

    }
  }
  // Classification of cross section
  class() {
    const {
      fyk
    } = this.material;
    const classe = this.geometry.class;
    const limitClass2 = 70 * 235 / fyk;
    const limitClass3 = 90 * 235 / fyk;
    switch (this.sectionType) {
      case 'ISection': {
        return classe ? classe : 2;
      }
      case 'BoxSection': {
        return classe ? classe : 2;
      }
      case 'CircularHollowSection': {
        const {
          D,
          t
        } = this.geometry;
        const dOnT = D / t;
        if (dOnT > limitClass3) {
          return classe ? classe : 4;
        } else if (dOnT < limitClass2) {
          return classe ? classe : 2;
        } else {
          return classe ? classe : 3;
        }
      }
      default:
        return classe ? classe : 2;
    }
  }

  // Column Buckling parameters
  alphay() {
    const bucklingCurvey = this.geometry.bucklingCurvey;
    switch (bucklingCurvey) {
      case "a0": {
        return 0.13;
      }
      case "a": {
        return 0.21;
      }
      case "b": {
        return 0.34;
      }
      case "c": {
        return 0.49;
      }
      case "d": {
        return 0.76;
      }
      default:
        return 0.21;
    }
  }

  alphaz() {
    const bucklingCurvez = this.geometry.bucklingCurvez;
    switch (bucklingCurvez) {
      case "a0": {
        return 0.13;
      }
      case "a": {
        return 0.21;
      }
      case "b": {
        return 0.34;
      }
      case "c": {
        return 0.49;
      }
      case "d": {
        return 0.76;
      }
      default:
        return 0.21;
    }
  }

  Ncry() {
    const Pi = Math.PI;
    const Lcry = this.geometry.Lcry;
    const Iy = this.sectionData.Iy;
    const Es = this.material.Es;
    const Ncr = (Pi ** 2) * Es * (10 ** 3) * Iy / (Lcry ** 2);
    return Ncr;
  }

  Ncrz() {
    const Pi = Math.PI;
    const Lcrz = this.geometry.Lcrz;
    const Iz = this.sectionData.Iz;
    const Es = this.material.Es;
    const Ncr = (Pi ** 2) * Es * (10 ** 3) * Iz / (Lcrz ** 2);
    return Ncr;
  }

  lambday() {
    const A = this.sectionData.A;
    const fyk = this.material.fyk;
    const Ncry = this.Ncry();
    return (A * fyk * (10 ** 3) / Ncry) ** (0.5);
  }

  lambdaz() {
    const A = this.sectionData.A;
    const fyk = this.material.fyk;
    const Ncrz = this.Ncrz();
    return (A * fyk * (10 ** 3) / Ncrz) ** (0.5);
  }

  phiy() {
    const alphay = this.alphay();
    const lambday = this.lambday();
    return (1 + alphay * (lambday - 0.2) + (lambday ** 2)) / 2;
  }

  phiz() {
    const alphaz = this.alphaz();
    const lambdaz = this.lambdaz();
    return (1 + alphaz * (lambdaz - 0.2) + (lambdaz ** 2)) / 2;
  }

  ksiy() {
    const phiy = this.phiy();
    const lambday = this.lambday();
    const Ned = this.loads.Ned;
    if (Ned > 0) {
      return Math.min(1 / (phiy + ((phiy ** 2) - (lambday ** 2)) ** (0.5)), 1);
    } else {
      return 1;
    }
  }

  ksiz() {
    const phiz = this.phiz();
    const lambdaz = this.lambdaz();
    const Ned = this.loads.Ned;
    if (Ned > 0) {
      return Math.min(1 / (phiz + ((phiz ** 2) - (lambdaz ** 2)) ** (0.5)), 1);
    } else {
      return 1;
    }
  }

  // Lateral Torsional Buckling
  alphaLT() {
    const bucklingCurveLT = this.geometry.bucklingCurveLT;
    switch (bucklingCurveLT) {
      case "a0": {
        return 0.13;
      }
      case "a": {
        return 0.21;
      }
      case "b": {
        return 0.34;
      }
      case "c": {
        return 0.49;
      }
      case "d": {
        return 0.76;
      }
      default:
        return 0.21;
    }
  }

  Mcr() {
    const L = this.geometry.L;
    const Es = this.material.Es;
    const G = this.material.G;
    const Iz = this.sectionData.Iz;
    const It = this.sectionData.It;
    const zg = this.sectionData.zg;
    const sectionType = this.sectionType;
    const C1 = this.geometry.C1;
    const C2 = this.geometry.C2;
    if (sectionType !== "CircularHollowSection") {
      const Iw = this.sectionData.Iw;
      return C1 * (Math.PI ** 2) * Es * (10 ** 3) * Iz / (L ** 2) * (Math.sqrt(Iw / Iz + (L ** 2) * G * It / ((Math.PI ** 2) * Es * Iz) + ((C2 * zg) ** 2)) - C2 * zg);
    } else {
      return 0;
    }
  }

  lambdaLT() {
    const fyk = this.material.fyk;
    const Wely = this.sectionData.Wely;
    const Mcr = this.Mcr();
    const sectionType = this.sectionType;
    if (sectionType !== "CircularHollowSection") {
      return Math.sqrt(Wely * fyk * (10 ** 3) / Mcr);
    } else {
      return 0;
    }
  }

  phiLT() {
    const alphaLT = this.alphaLT();
    const lambdaLT = this.lambdaLT();
    const sectionType = this.sectionType;
    if (sectionType !== "CircularHollowSection") {
      return (1 + alphaLT * (lambdaLT - 0.2) + (lambdaLT ** 2)) / 2;
    } else {
      return 0;
    }
  }

  ksiLT() {
    const phiLT = this.phiLT();
    const lambdaLT = this.lambdaLT();
    const sectionType = this.sectionType;
    if (sectionType !== "CircularHollowSection") {
      return Math.min(1 / (phiLT + Math.sqrt((phiLT ** 2) - (lambdaLT ** 2))), 1)
    } else {
      return 0;
    }
  }

  // Moment factors
  Cmy0() {
    const MDy = this.loads.MDy;
    const Ned = this.loads.Ned;
    const Es = this.material.Es;
    const L = this.geometry.L;
    const Ncry = this.Ncry() === 0 ? 0.0000001 : this.Ncry();
    const Iy = this.sectionData.Iy;
    if (MDy === 1) {
      const psiy = this.loads.psiy;
      return 0.79 + 0.21 * psiy + 0.36 * (psiy - 0.33) * Math.max(0, Ned) / Ncry;
    }
    if (MDy === 2) {
      const Myed = this.loads.Myed === 0 ? 0.0000001 : this.loads.Myed;
      const deltay = this.loads.deltay;
      return 1 + ((Math.PI ** 2) * Es * Iy * deltay / ((L ** 2) * Myed) - 1) * Math.max(0, Ned) / Ncry;
    }
    if (MDy === 3) {
      return 1 - 0.18 * Math.max(0, Ned) / Ncry;
    }
    if (MDy === 4) {
      return 1 + 0.03 * Math.max(0, Ned) / Ncry;
    }
  }

  Cmz0() {
    const MDz = this.loads.MDz;
    const Ned = this.loads.Ned;
    const Es = this.material.Es;
    const L = this.geometry.L;
    const Ncrz = this.Ncrz() === 0 ? 0.0000001 : this.Ncrz();
    const Iz = this.sectionData.Iz;
    if (MDz === 1) {
      const psiz = this.loads.psiz;
      return 0.79 + 0.21 * psiz + 0.36 * (psiz - 0.33) * Math.max(0, Ned) / Ncrz;
    }
    if (MDz === 2) {
      const Mzed = this.loads.Mzed === 0 ? 0.0000001 : this.loads.Mzed;
      const deltaz = this.loads.deltaz;
      return 1 + ((Math.PI ** 2) * Es * Iz * deltaz / ((L ** 2) * Mzed) - 1) * Math.max(0, Ned) / Ncrz;
    }
    if (MDz === 3) {
      return 1 - 0.18 * Math.max(0, Ned) / Ncrz;
    }
    if (MDz === 4) {
      return 1 + 0.03 * Math.max(0, Ned) / Ncrz;
    }
  }

  CmLT() {
    return 1;
  }


  // Shear
  Tt() {
    switch (this.sectionType) {
      case 'BoxSection': {
        const Ted = this.loads.Ted;
        return Ted;
      }
      default:
        return 0;
    }
  }


  Am() {
    switch (this.sectionType) {
      case 'BoxSection': {
        const h = this.geometry.h;
        const d = this.geometry.d;
        const tf = this.geometry.tf;
        return (h - tf) * (d + tf);
      }
      default:
        return 'NA';
    }
  }

  thotweb() {
    switch (this.sectionType) {
      case 'BoxSection': {
        const Am = this.Am();
        const tw = this.geometry.tw;
        const c = this.geometry.c;
        const Tt = this.Tt();
        return Tt / (2000 * Am * (tw - 2 * c));
      }
      default:
        return 0;
    }
  }

  VplRd() {
    const Av = this.sectionData.Av;
    const fyk = this.material.fyk;
    const thotweb = this.thotweb();
    const gammaM0 = this.material.gammaM0;
    return Av * fyk * (10 ** 3) / (Math.sqrt(3) * gammaM0) * (1 - thotweb * Math.sqrt(3) * gammaM0 / fyk);
  }

  SFShear() {
    const Ved = this.loads.Ved;
    const VplRd = this.VplRd();
    return Ved / VplRd;
  }

  UnMoinsRho() {
    const VedVplRd = this.SFShear();
    if (VedVplRd > 0.5) {
      return 1 - ((2 * VedVplRd - 1) ** 2);
    }
    return 1;
  }

  // Axial & Bending

  NplRd() {
    const Ned = this.loads.Ned;
    const A = this.sectionData.A;
    const UnMoinsRho = this.UnMoinsRho();
    const fyk = this.material.fyk;
    const gammaM0 = this.material.gammaM0;
    const gammaM1 = this.material.gammaM1;
    if (Ned > 0) {
      return A * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    return A * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  }

  MelyRd() {
    const Ned = this.loads.Ned;
    const Wely = this.sectionData.Wely;
    const UnMoinsRho = this.UnMoinsRho();
    const fyk = this.material.fyk;
    const gammaM0 = this.material.gammaM0;
    const gammaM1 = this.material.gammaM1;
    if (Ned > 0) {
      return Wely * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    return Wely * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  }

  MelzRd() {
    const Ned = this.loads.Ned;
    const Welz = this.sectionData.Welz;
    const UnMoinsRho = this.UnMoinsRho();
    const fyk = this.material.fyk;
    const gammaM0 = this.material.gammaM0;
    const gammaM1 = this.material.gammaM1;
    if (Ned > 0) {
      return Welz * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    return Welz * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  }

  MplyRd() {
    const Ned = this.loads.Ned;
    const Wply = this.sectionData.Wply;
    const UnMoinsRho = this.UnMoinsRho();
    const fyk = this.material.fyk;
    const gammaM0 = this.material.gammaM0;
    const gammaM1 = this.material.gammaM1;
    if (Ned > 0) {
      return Wply * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    return Wply * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  }

  MplzRd() {
    const Ned = this.loads.Ned;
    const Wplz = this.sectionData.Wplz;
    const UnMoinsRho = this.UnMoinsRho();
    const fyk = this.material.fyk;
    const gammaM0 = this.material.gammaM0;
    const gammaM1 = this.material.gammaM1;
    if (Ned > 0) {
      return Wplz * UnMoinsRho * fyk * (10 ** 3) / gammaM1;
    }
    return Wplz * UnMoinsRho * fyk * (10 ** 3) / gammaM0;
  }

  wy() {
    const Wely = this.sectionData.Wely;
    const Wply = this.sectionData.Wply;
    return Math.min(Wply / Wely, 1.5);
  }

  wz() {
    const Welz = this.sectionData.Welz;
    const Wplz = this.sectionData.Wplz;
    return Math.min(Wplz / Welz, 1.5);
  }

  kyy() {
    const Cmy0 = this.Cmy0();
    const ksiy = this.ksiy();
    const Ncry = this.Ncry();
    const Ned = this.loads.Ned;
    const sectionType = this.sectionType;
    const Wely = this.sectionData.Wely;
    const Wply = this.sectionData.Wply;
    const wy = this.wy();
    const lambday = this.lambday();
    const NplRd = this.NplRd();
    const classe = this.class();
    if (sectionType === "CircularHollowSection" && classe < 3) {
      return Math.max(1 + (wy - 1) * (2 - 1.6 / wy * Cmy0 ** (2) * (lambday + lambday ** 2)) * Ned / NplRd, Wely / Wply);
    } else if (sectionType === "CircularHollowSection" && classe === 3) {
      return 1;
    } else {
      return Cmy0 / (1 - ksiy * Math.max(0, Ned) / Ncry);
    }
  }

  kzz() {
    const Cmz0 = this.Cmz0();
    const ksiz = this.ksiz();
    const Ncrz = this.Ncrz();
    const Ned = this.loads.Ned;
    const sectionType = this.sectionType;
    const Welz = this.sectionData.Welz;
    const Wplz = this.sectionData.Wplz;
    const wz = this.wz();
    const lambdaz = this.lambdaz();
    const NplRd = this.NplRd();
    const classe = this.class();
    if (sectionType === "CircularHollowSection" && classe < 3) {
      return Math.max(1 + (wz - 1) * (2 - 1.6 / wz * Cmz0 ** (2) * (lambdaz + lambdaz ** 2)) * Ned / NplRd, Welz / Wplz);
    } else if (sectionType === "CircularHollowSection" && classe === 3) {
      return 1;
    } else {
      return Cmz0 / (1 - ksiz * Math.max(0, Ned) / Ncrz);
    }
  }

  kyz() {
    const Cmz0 = this.Cmz0();
    const ksiy = this.ksiy();
    const Ncry = this.Ncry();
    const Ncrz = this.Ncrz();
    const Ned = this.loads.Ned;
    const wy = this.wy();
    const Welz = this.sectionData.Welz;
    const Wplz = this.sectionData.Wplz;
    const wz = this.wz();
    const lambdaz = this.lambdaz();
    const NplRd = this.NplRd();
    const classe = this.class();
    const sectionType = this.sectionType;
    if (sectionType === "CircularHollowSection" && classe < 3) {
      return Math.max(1 + (wz - 1) * (2 - 14 / (wz ** 5) * Cmz0 ** (2) * (lambdaz ** 2)) * Ned / NplRd, (wz / wy) ** (0.5) * Welz / Wplz);
    } else if (sectionType === "CircularHollowSection" && classe === 3) {
      return 0.6;
    } else {
      return Cmz0 * (1 - Math.max(0, Ned) / Ncry) / ((1 - ksiy * Math.max(0, Ned) / Ncry) * (1 - Math.max(0, Ned) / Ncrz));
    }
  }

  kzy() {
    const Cmy0 = this.Cmy0();
    const ksiz = this.ksiz();
    const Ncry = this.Ncry();
    const Ncrz = this.Ncrz();
    const Ned = this.loads.Ned;
    const Wely = this.sectionData.Wely;
    const Wply = this.sectionData.Wply;
    const wy = this.wy();
    const lambday = this.lambday();
    const wz = this.wz();
    const NplRd = this.NplRd();
    const classe = this.class();
    const sectionType = this.sectionType;
    if (sectionType === "CircularHollowSection" && classe < 3) {
      return Math.max(1 + (wy - 1) * (2 - 14 / (wy ** 5) * Cmy0 ** (2) * (lambday ** 2)) * Ned / NplRd, (wy / wz) ** (0.5) * Wely / Wply);
    } else if (sectionType === "CircularHollowSection" && classe === 3) {
      return 0.6;
    } else {
      return Cmy0 * (1 - Math.max(0, Ned) / Ncrz) / ((1 - ksiz * Math.max(0, Ned) / Ncrz) * (1 - Math.max(0, Ned) / Ncry));
    }
  }

  muy() {
    const Ned = this.loads.Ned;
    const Ncry = this.Ncry();
    const ksiy = this.ksiy();
    return (1 - Ned / Ncry) / (1 - ksiy * Ned / Ncry);
  }

  muz() {
    const Ned = this.loads.Ned;
    const Ncrz = this.Ncrz();
    const ksiz = this.ksiz();
    return (1 - Ned / Ncrz) / (1 - ksiz * Ned / Ncrz);
  }

  SFBucklingy() {
    const Ned = this.loads.Ned;
    const Myed = this.loads.Myed;
    const Mzed = this.loads.Mzed;
    const Ncry = this.Ncry();
    const Ncrz = this.Ncrz();
    const ksiy = this.ksiy();
    const ksiLT = this.ksiLT();
    const Cmy0 = this.Cmy0();
    const Cmz0 = this.Cmz0();
    const muy = this.muy();
    const NplRd = this.NplRd();
    const MelyRd = this.MelyRd();
    const MelzRd = this.MelzRd();
    const MplyRd = this.MplyRd();
    const MplzRd = this.MplzRd();
    const kyy = this.kyy();
    const kyz = this.kyz();
    const classe = this.class();
    const sectionType = this.sectionType;
    if (sectionType === "CircularHollowSection") {
      if (classe === 3) {
        if (Ned < 0) {
          return 0;
        } else {
          return Ned / (ksiy * NplRd) + muy * (Cmy0 * Myed / ((1 - Ned / Ncry) * kyy * MelyRd) + 0.6 * Cmz0 * Mzed / ((1 - Ned / Ncrz) * kyz * MelzRd));
        }
      } else {
        if (Ned < 0) {
          return 0;
        } else {
          return Ned / (ksiy * NplRd) + muy * (Cmy0 * Myed / ((1 - Ned / Ncry) * kyy * MplyRd) + 0.6 * Cmz0 * Mzed / ((1 - Ned / Ncrz) * kyz * MplzRd));
        }
      }
    } else {
      if (classe === 3) {
        return Math.max(Ned / (ksiy * NplRd) + kyy * Myed / (ksiLT * MelyRd) + kyz * Mzed / MelzRd, 0);
      } else {
        return Math.max(Ned / (ksiy * NplRd) + kyy * Myed / (ksiLT * MplyRd) + kyz * Mzed / MplzRd, 0);
      }
    }
  }

  SFBucklingz() {
    const Ned = this.loads.Ned;
    const Myed = this.loads.Myed;
    const Mzed = this.loads.Mzed;
    const Ncry = this.Ncry();
    const Ncrz = this.Ncrz();
    const ksiy = this.ksiy();
    const ksiz = this.ksiz();
    const ksiLT = this.ksiLT();
    const Cmy0 = this.Cmy0();
    const Cmz0 = this.Cmz0();
    const muz = this.muz();
    const NplRd = this.NplRd();
    const MelyRd = this.MelyRd();
    const MelzRd = this.MelzRd();
    const MplyRd = this.MplyRd();
    const MplzRd = this.MplzRd();
    const kzz = this.kzz();
    const kzy = this.kzy();
    const classe = this.class();
    const sectionType = this.sectionType;
    if (sectionType === "CircularHollowSection") {
      if (classe === 3) {
        if (Ned < 0) {
          return 0;
        } else {
          return Ned / (ksiz * NplRd) + muz * (0.6 * Cmy0 * Myed / ((1 - Ned / Ncry) * kzy * MelyRd) + Cmz0 * Mzed / ((1 - Ned / Ncrz) * kzz * MelzRd));
        }
      } else {
        if (Ned < 0) {
          return 0;
        } else {
          return Ned / (ksiz * NplRd) + muz * (0.6 * Cmy0 * Myed / ((1 - Ned / Ncry) * kzy * MplyRd) + Cmz0 * Mzed / ((1 - Ned / Ncrz) * kzz * MplzRd));
        }
      }
    } else {
      if (classe === 3) {
        return Math.max(Ned / (ksiz * NplRd) + kzy * Myed / (ksiLT * MelyRd) + kzz * Mzed / MelzRd, 0);
      } else {
        return Math.max(Ned / (ksiz * NplRd) + kzy * Myed / (ksiLT * MplyRd) + kzz * Mzed / MplzRd, 0);
      }
    }
  }

  SFTension() {
    const Ned = this.loads.Ned;
    const Myed = this.loads.Myed;
    const Mzed = this.loads.Mzed;
    const NplRd = this.NplRd();
    const MelyRd = this.MelyRd();
    const MelzRd = this.MelzRd();
    const MplyRd = this.MplyRd();
    const MplzRd = this.MplzRd();
    const gammaM0 = this.material.gammaM0;
    const gammaM1 = this.material.gammaM1;
    const classe = this.class();
    const sectionType = this.sectionType;
    if (sectionType === "CircularHollowSection") {
      if (classe === 3) {
        return Math.sqrt(Myed ** 2 + Mzed ** 2) / (MelyRd * gammaM1 / gammaM0 * (1 - (Ned / NplRd * gammaM0 / gammaM1) ** 2));
      } else {
        return Math.sqrt(Myed ** 2 + Mzed ** 2) / (MplyRd * gammaM1 / gammaM0 * (1 - (Ned / NplRd * gammaM0 / gammaM1) ** 2));
      }
    } else {
      if (classe === 3) {
        return Math.abs(Ned / NplRd - Myed / MelyRd - Mzed / MelzRd);
      } else {
        const prop1 = Myed / (MplyRd * (1 - ((Ned / NplRd) ** 2)));
        const prop2 = Mzed / (MplzRd * (1 - ((Ned / NplRd) ** 2)));
        const prop3 = (prop1 ** 2) + (prop2 ** Math.max(5 * Ned / NplRd, 1));
        return Math.max(prop1, prop2, prop3);
      }
    }
  }

  SFAxialBending() {
    const SFBucklingy = this.SFBucklingy();
    const SFBucklingz = this.SFBucklingz();
    const SFTension = this.SFTension();
    return Math.max(SFBucklingy, SFBucklingz, SFTension);
  }
};

module.exports = Section;