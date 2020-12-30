const CustomSection = require('./CustomSection');

class RectangularSection {
  constructor(height, width) {
    this.h = height;
    this.b = width;
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

module.exports = RectangularSection;