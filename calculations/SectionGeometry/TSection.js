const CustomSection = require('./CustomSection');

class TSection {
  constructor(b, h, b0, h0) {
    this.b = b;
    this.h = h;
    this.b0 = b0;
    this.h0 = h0;
  }
  
  get sectionext() {
    const b = this.b;
    const h = this.h;
    const b0 = this.b0;
    const h0 = this.h0;
    return [
      { x: 0, y: h },
      { x: 0, y: h - h0 },
      { x: b / 2 - b0 / 2, y: h - h0 },
      { x: b / 2 - b0 / 2, y: 0 },
      { x: b / 2 + b0 / 2, y: 0 },
      { x: b / 2 + b0 / 2, y: h - h0 },
      { x: b, y: h - h0 },
      { x: b, y: h },
      { x: 0, y: h }
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
}

module.exports = TSection;