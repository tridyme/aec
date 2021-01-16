const CustomSection = require('./CustomSection');

class CircularHollowSection {
  constructor(diameter, thickness) {
    this.D = diameter;
    this.t = thickness;
  }
  
  get sectionext() {
		const D = Number(this.D);
		const t = Number(this.t);
		const arrExt = [];
		for (let i = 0; i < 50; i += 1) {
			const xext = D / 2 * Math.cos(i * 2 * Math.PI / 49);
			const yext = D / 2 * Math.sin(i * 2 * Math.PI / 49);
			arrExt.push({ x: xext, y: yext });
		}
    return arrExt;
  }

  get sectionint() {
		const D = Number(this.D);
		const t = Number(this.t);
		const arrInt = [];
		for (let i = 0; i < 50; i += 1) {
			const xint = (D / 2 - t) * Math.cos(i * 2 * Math.PI / 49);
			const yint = (D / 2 - t) * Math.sin(i * 2 * Math.PI / 49);
			arrInt.push({ x: xint, y: yint });
		}
    return arrInt;
  }
  
  get xg() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.xg;
  }

  get yg() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.yg;
  }

  get area() {
    const D = Number(this.D);
    const t = Number(this.t);
    const Pi = Math.PI;

    return Pi*((D/2)**2 - (D/2-t)**2);
  }

  get Av() {
    const A = this.area;
    const Pi = Math.PI;

    return 2*A/Pi;
  }

  get ixx() {
    const D = this.D;
    const t = this.t;
    const Pi = Math.PI;

    return Pi/4*((D/2)**4 - (D/2-t)**4);
  }

  get iyy() {
    const D = this.D;
    const t = this.t;
    const Pi = Math.PI;

    return Pi/4*((D/2)**4 - (D/2-t)**4);
  }

  get ixy() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.ixy;
  }

  get Welx() {
    const ixx = this.ixx;
    const D = this.D;

    return ixx / (D/2);
  }

  get Wely() {
    const iyy = this.iyy;
    const D = this.D;

    return iyy / (D/2);
  }

  get Wplx() {
    const D = this.D;
    const t = this.t;

    return 4/3*((D/2)**3-(D/2-t)**3);
  }

  get Wply() {
    const D = this.D;
    const t = this.t;

    return 4/3*((D/2)**3-(D/2-t)**3);
  }
}

module.exports = CircularHollowSection;