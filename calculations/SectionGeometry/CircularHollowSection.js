const CustomSection = require('./CustomSection');

class CircularHollowSection {
  constructor(diameter, thickness) {
    this.D = diameter;
    this.t = thickness;
  }
  
  get sectionext() {
		const D = Number(this.D.value);
		const t = Number(this.t.value);
		const arrExt = [];
		for (let i = 0; i < 50; i += 1) {
			const xext = D / 2 * Math.cos(i * 2 * Math.PI / 49);
			const yext = D / 2 * Math.sin(i * 2 * Math.PI / 49);
			arrExt.push({ x: xext, y: yext });
		}
    return arrExt;
  }

  get sectionint() {
		const D = Number(this.D.value);
		const t = Number(this.t.value);
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
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.area;
  }

  get ixx() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.ixx;
  }

  get iyy() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.iyy;
  }

  get ixy() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.ixy;
  }
}

module.exports = CircularHollowSection;