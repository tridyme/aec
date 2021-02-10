const CustomSection = require('./CustomSection');

class RectangularSection {
  constructor({ h, b }) {
    this.h = h;
    this.b = b;
  }
  
  get sectionext() {
    const h = this.h;
    const b = this.b;
    return [
      { x: 0, y: 0 },
      { x: b, y: 0 },
      { x: b, y: h },
      { x: 0, y: h },
      { x: 0, y: 0 }
    ]
  }

  get sectionint() {
    return [
      { x: 0, y: 0 },
      { x: 0, y: 0 }
    ]
  }
  
  get yg() {
    const b = this.b;
    return b / 2;
  }

  get zg() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.yg;
  }

  get A() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.area;
  }

  get Iy() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.ixx.IxxG;
  }

  get Iz() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.iyy.IyyG;
  }

  get Iyz() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.ixy.IxyG;
  }
}

module.exports = RectangularSection;