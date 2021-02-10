const CustomSection = require('./CustomSection');

class CircularHollowSection {
  constructor({ D, t }) {
    this.D = D;
    this.t = t;
  }
  
  get sectionAnalysis() {
    return {
      yg: this.yg,
      zg: this.zg,
      Ry: this.D / 2,
      Rz: this.D / 2,
      A: this.A,
      Av: this.Av,
      Iy: this.Iy,
      Iz: this.Iz,
      Iyz: this.Iyz,
      It: this.It,
      Iw: this.Iw,
      Wely: this.Wely,
      Welz: this.Welz,
      Wply: this.Wply,
      Wplz: this.Wplz
    }
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
  
  get yg() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.xg;
  }

  get zg() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.yg;
  }

  get A() {
    const D = Number(this.D);
    const t = Number(this.t);
    const Pi = Math.PI;

    return Pi*((D/2)**2 - (D/2-t)**2);
  }

  get Av() {
    const A = this.A;
    const Pi = Math.PI;

    return 2*A/Pi;
  }

  get Iy() {
    const D = this.D;
    const t = this.t;
    const Pi = Math.PI;

    return Pi/4*((D/2)**4 - (D/2-t)**4);
  }

  get Iz() {
    const D = this.D;
    const t = this.t;
    const Pi = Math.PI;

    return Pi/4*((D/2)**4 - (D/2-t)**4);
  }

  get Iyz() {
    const D = this.D;
    const t = this.t;
    const Pi = Math.PI;
    return Pi/2*((D/2)**4 - (D/2-t)**4);
  }

  get It() {
    const D = this.D;
    const t = this.t;
    const Pi = Math.PI;

    return Pi/4*((D/2)**4 - (D/2-t)**4);
  }

  get Iw() {
    return 0;
  }

  get Wely() {
    const Iy = this.Iy;
    const D = this.D;

    return Iy / (D/2);
  }

  get Welz() {
    const Iz = this.Iz;
    const D = this.D;

    return Iz / (D/2);
  }

  get Wply() {
    const D = this.D;
    const t = this.t;

    return 4/3*((D/2)**3-(D/2-t)**3);
  }

  get Wplz() {
    const D = this.D;
    const t = this.t;

    return 4/3*((D/2)**3-(D/2-t)**3);
  }
}

module.exports = CircularHollowSection;