class CustomSection {
  
  constructor(sectionext, sectionint) {
    this.sectionext = sectionext;
    this.sectionint = sectionint;
  }

  get area() {
      const secext = this.sectionext;
      const secint = this.sectionint;
      
      let areaExt = 0;
      for (let i = 0; i < secext.length - 1; i += 1) {
        const areai = 0.5 * (secext[i + 1].y - secext[i].y) * (secext[i + 1].x + secext[i].x);
        areaExt += areai;
      }
      let areaInt = 0;
      for (let i = 0; i < secint.length - 1; i += 1) {
        const areai = 0.5 * (secint[i + 1].y - secint[i].y) * (secint[i + 1].x + secint[i].x);
        areaInt += areai;
      }
      let area = areaExt - areaInt;
      //area = Math.round(area * 1000) / 1000;
      return area;
    
  }
  
  get perimeter() {
    const secext = this.sectionext;
    const secint = this.sectionint;
    
    let pExt = 0;
    for (let i = 0; i < secext.length - 1; i += 1) {
      const pi = (((secext[i + 1].x - secext[i].x) ** 2) + ((secext[i + 1].y - secext[i].y) ** 2)) ** 0.5;
      pExt += pi;
    }
    let pInt = 0;
    for (let i = 0; i < secint.length - 1; i += 1) {
      const pi = (((secint[i + 1].x - secint[i].x) ** 2) + ((secint[i + 1].y - secint[i].y) ** 2)) ** 0.5;
      pInt += pi;
    }
    //pExt = Math.round(pExt * 1000) / 1000;
    //pInt = Math.round(pInt * 1000) / 1000;
    return {
      pExt,
      pInt
    };
  }

  get xg() {
    const secext = this.sectionext;
    const secint = this.sectionint;
    const area = this.area;

    let xgExt = 0;
    for (let i = 0; i < secext.length - 1; i += 1) {
      const xgi = (secext[i + 1].y - secext[i].y) * ((secext[i + 1].x ** 2) + secext[i + 1].x * secext[i].x + (secext[i].x ** 2));
      xgExt += xgi;
    }
    let xgInt = 0;
    for (let i = 0; i < secint.length - 1; i += 1) {
      const xgi = (secint[i + 1].y - secint[i].y) * ((secint[i + 1].x ** 2) + secint[i + 1].x * secint[i].x + (secint[i].x ** 2));
      xgInt += xgi;
    }
    let xg = 0;
    if (area !== 0) {
      xg = (xgExt - xgInt) / (6 * area);
    }
    //xg = Math.round(xg * 1000) / 1000;
    return xg;
  }

  get yg() {
    const secext = this.sectionext;
    const secint = this.sectionint;
    const area = this.area;

    let ygExt = 0;
    for (let i = 0; i < secext.length - 1; i += 1) {
      const ygi = (secext[i + 1].x - secext[i].x) * ((secext[i + 1].y ** 2) + secext[i + 1].y * secext[i].y + (secext[i].y ** 2));
      ygExt += ygi;
    }
    let ygInt = 0;
    for (let i = 0; i < secint.length - 1; i += 1) {
      const ygi = (secint[i + 1].x - secint[i].x) * ((secint[i + 1].y ** 2) + secint[i + 1].y * secint[i].y + (secint[i].y ** 2));
      ygInt += ygi;
    }
    let yg = 0;
    if (area !== 0) {
      yg = -(ygExt - ygInt) / (6 * area);
    }
    //yg = Math.round(yg * 1000) / 1000;
    return yg;
  }

  get ixx() {
    const secext = this.sectionext;
    const secint = this.sectionint;
    const area = this.area;
    const yg = this.yg;

    let IxxOExt = 0;
    for (let i = 0; i < secext.length - 1; i += 1) {
      const IxxOi = (secext[i + 1].x - secext[i].x) * ((secext[i + 1].y ** 3) + (secext[i + 1].y ** 2) * secext[i].y + secext[i + 1].y * (secext[i].y ** 2) + (secext[i].y ** 3));
      IxxOExt += IxxOi;
    }
    let IxxOInt = 0;
    for (let i = 0; i < secint.length - 1; i += 1) {
      const IxxOi = (secint[i + 1].x - secint[i].x) * ((secint[i + 1].y ** 3) + (secint[i + 1].y ** 2) * secint[i].y + secint[i + 1].y * (secint[i].y ** 2) + (secint[i].y ** 3));
      IxxOInt += IxxOi;
    }
    let IxxO = (IxxOExt - IxxOInt) * (-1 / 12);
    let IxxG = IxxO - area * (yg ** 2);

    //IxxO = Math.round(IxxO * 1000) / 1000;
    //IxxG = Math.round(IxxG * 1000) / 1000;

    return {
      IxxO,
      IxxG
    };
  }

  get iyy() {
    const secext = this.sectionext;
    const secint = this.sectionint;
    const area = this.area;
    const xg = this.xg;

    let IyyOExt = 0;
    for (let i = 0; i < secext.length - 1; i += 1) {
      const IyyOi = (secext[i + 1].y - secext[i].y) * ((secext[i + 1].x ** 3) + (secext[i + 1].x ** 2) * secext[i].x + secext[i + 1].x * (secext[i].x ** 2) + (secext[i].x ** 3));
      IyyOExt += IyyOi;
    }
    let IyyOInt = 0;
    for (let i = 0; i < secint.length - 1; i += 1) {
      const IyyOi = (secint[i + 1].y - secint[i].y) * ((secint[i + 1].x ** 3) + (secint[i + 1].x ** 2) * secint[i].x + secint[i + 1].x * (secint[i].x ** 2) + (secint[i].x ** 3));
      IyyOInt += IyyOi;
    }
    let IyyO = (IyyOExt - IyyOInt) * (1 / 12);
    let IyyG = IyyO - area * (xg ** 2);

    //IyyO = Math.round(IyyO * 1000) / 1000;
    //IyyG = Math.round(IyyG * 1000) / 1000;

    return {
      IyyO,
      IyyG
    };
  }

  get ixy() {
    const secext = this.sectionext;
    const secint = this.sectionint;
    const area = this.area;
    const xg = this.x;
    const yg = this.y;

    let IxyOExt = 0;
    for (let i = 0; i < secext.length - 1; i += 1) {
      const IxyOi = (secext[i + 1].x * secext[i + 1].y) * (secext[i + 1].x * secext[i + 1].y + secext[i + 1].x * secext[i].y + (secext[i + 1].x + secext[i + 1].x) * (secext[i + 1].y + secext[i].y));
      IxyOExt += IxyOi;
    }
    let IxyOInt = 0;
    for (let i = 0; i < secint.length - 1; i += 1) {
      const IxyOi = (secint[i + 1].x * secint[i + 1].y) * (secint[i + 1].x * secint[i + 1].y + secint[i + 1].x * secint[i].y + (secint[i + 1].x + secint[i + 1].x) * (secint[i + 1].y + secint[i].y));
      IxyOInt += IxyOi;
    }
    let IxyO = (IxyOExt - IxyOInt) * (1 / 24);
    let IxyG = IxyO - area * xg * yg;

    //IxyO = Math.round(IxyO * 1000) / 1000;
    //IxyG = Math.round(IxyG * 1000) / 1000;

    return {
      IxyO,
      IxyG
    };
  }
}

module.exports = CustomSection;
