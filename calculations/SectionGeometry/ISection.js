const CustomSection = require('./CustomSection');

class ISection {
  constructor({ tf, tw, b, h, c }) {
    this.tf = tf;
		this.tw = tw;
		this.b = b;
		this.h = h;
		this.c = c;
  }
  
  get sectionext() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return [
			{ x: 0, y: 0 },
			{ x: b / 2 - c, y: 0 },
			{ x: b / 2 - c, y: tf - 2 * c },
			{ x: tw / 2 - c, y: tf - 2 * c },
			{ x: tw / 2 - c, y: h - tf },
			{ x: b / 2 - c, y: h - tf },
			{ x: b / 2 - c, y: h - 2 * c },
			{ x: -b / 2 + c, y: h - 2 * c },
			{ x: -b / 2 + c, y: h - tf },
			{ x: -tw / 2 + c, y: h - tf },
			{ x: -tw / 2 + c, y: tf - 2 * c },
			{ x: -b / 2 + c, y: tf - 2 * c },
			{ x: -b / 2 + c, y: 0 },
			{ x: 0, y: 0 }
		];
  }

  get sectionint() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return [
			{ x: 0, y: 0 },
			{ x: 0, y: 0 }
		];
  }
  
  get yg() {
    return 0;
  }

  get zg() {
		const h = Number(this.h);
    const c = Number(this.c);
    return (h - 2 * c) / 2;
  }

  get A() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return 2 * (tf - 2 * c) * (b - 2 * c) + (h - 2 * (tf - c)) * (tw - 2 * c);
  }

  get Av() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return 2 * (tf - 2 * c) * (b - 2 * c) + (h - 2 * (tf - c)) * (tw - 2 * c) - 2 * (b - 2 * c) * (tf - 2 * c);
  }

  get Iy() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return ((b - 2 * c) * ((h - 2 * c) ** 3) - (b - tw) * ((h - 2 * (tf - c)) ** 3)) / 12;
  }

  get Iz() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return (2 * (tf - 2 * c) * ((b - 2 * c) ** 3) + ((tw - 2 * c) ** 3) * (h - 2 * (tf - c))) / 12;
  }

  get Iyz() {
    const SectionCharac = new CustomSection(this.sectionext, this.sectionint);
    return SectionCharac.ixy.IxyG;
	}
	
	get It() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return (2 * (b - 2 * c) * ((tf - 2 * c) ** 3) + ((tw - 2 * c) ** 3) * (h - 2 * (tf - c))) / 3;
  }

	get Iw() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return (2 * (tf - 2 * c) * ((b - 2 * c) ** 3) + ((tw - 2 * c) ** 3) * (h - 2 * (tf - c))) / 48 * ((h - tf) ** 2);
	}
	
  get Wely() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return ((b - 2 * c) * ((h - 2 * c) ** 3) - (b - tw) * ((h - 2 * (tf - c)) ** 3)) / (6 * (h - 2 * c));
  }

  get Welz() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return (2 * (tf - 2 * c) * ((b - 2 * c) ** 3) + ((tw - 2 * c) ** 3) * (h - 2 * (tf - c))) / (6 * (b - 2 * c));
  }

  get Wply() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return ((tw - 2 * c) * ((h - 2 * c) ** 2)) / 4 + (tf - 2 * c) * (h - tf) * (b - tw);
  }

  get Wplz() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const c = Number(this.c);
    return ((b - 2 * c) ** 2) * (tf - 2 * c) / 2 + (h - 2 * (tf - c)) * ((tw - 2 * c) ** 2) / 4;
  }
}

module.exports = ISection;