const CustomSection = require('./CustomSection');

class BoxSection {
	constructor({ tf, tw, b, h, d, c }) {
		this.tf = tf;
		this.tw = tw;
		this.b = b;
		this.h = h;
		this.d = d;
		this.c = c;
	}

	get sectionext() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const d = Number(this.d);
		const c = Number(this.c);
		return [
			{ x: 0, y: 0 },
			{ x: b / 2 - c, y: 0 },
			{ x: b / 2 - c, y: tf - 2 * c },
			{ x: d / 2 + tw - c, y: tf - 2 * c },
			{ x: d / 2 + tw - c, y: h - tf },
			{ x: b / 2 - c, y: h - tf },
			{ x: b / 2 - c, y: h - 2 * c },
			{ x: -b / 2 + c, y: h - 2 * c },
			{ x: -b / 2 + c, y: h - tf },
			{ x: -d / 2 - tw + c, y: h - tf },
			{ x: -d / 2 - tw + c, y: tf - 2 * c },
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
		const d = Number(this.d);
		const c = Number(this.c);
		return [
			{ x: 0, y: tf - 2 * c },
			{ x: d / 2 + c, y: tf - 2 * c },
			{ x: d / 2 + c, y: h - tf },
			{ x: -d / 2 - c, y: h - tf },
			{ x: -d / 2 - c, y: tf - 2 * c },
			{ x: 0, y: tf - 2 * c }
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
		const d = Number(this.d);
		const c = Number(this.c);
		return 2 * (tf - 2 * c) * (b - 2 * c) + 2 * (h - 2 * (tf - c)) * (tw - 2 * c);
	}

	get Av() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const d = Number(this.d);
		const c = Number(this.c);
		return 2 * (tf - 2 * c) * (b - 2 * c) + 2 * (h - 2 * (tf - c)) * (tw - 2 * c) - 2 * (b - 2 * c) * (tf - 2 * c);
	}

	get Iy() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const d = Number(this.d);
		const c = Number(this.c);
		return (b - 2 * c) * ((h - 2 * c) ** 3) / 12 - (b - 2 * (tw - c)) * ((h - 2 * (tf - c)) ** 3) / 12;
	}

	get Iz() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const d = Number(this.d);
		const c = Number(this.c);
		return (tf - 2 * c) * ((b - 2 * c) ** 3) / 6 + 2 * ((h - 2 * (tf - c)) * ((tw - 2 * c) ** 3) + (h - 2 * (tf - c)) * (tw - 2 * c) * ((d / 2 + tw / 2) ** 2));
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
		const d = Number(this.d);
		const c = Number(this.c);
		return 2 * (tf - 2 * c) * (tw - 2 * c) * ((d + tw) ** 2) * ((h - tf) ** 2) / ((tw - 2 * c) * (d + tw) + (tf - 2 * c) * (h - tf));
	}

	get Iw() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const d = Number(this.d);
		const c = Number(this.c);
		return (tf - 2 * c) * ((b - 2 * c) ** 3) * ((h - tf) ** 2) / 24 + (tw - 2 * c) * ((d + tw) ** 2) * ((h - 2 * (tf - c)) ** 3) / 24;
	}

	get Wely() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const d = Number(this.d);
		const c = Number(this.c);
		return 2 * ((b - 2 * c) * ((h - 2 * c) ** 3) / 12 - (b - 2 * (tw - c)) * ((h - 2 * (tf - c)) ** 3) / 12) / (h - 2 * c);
	}

	get Welz() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const d = Number(this.d);
		const c = Number(this.c);
		return 2 * ((tf - 2 * c) * ((b - 2 * c) ** 3) / 6 + 2 * ((h - 2 * (tf - c)) * ((tw - 2 * c) ** 3) + (h - 2 * (tf - c)) * (tw - 2 * c) * ((d / 2 + tw / 2) ** 2))) / (b - 2 * c);
	}

	get Wply() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const d = Number(this.d);
		const c = Number(this.c);
		return (tw - 2 * c) * ((h - 2 * c) ** 2) / 2 + (tf - 2 * c) * (h - tf) * (b - 2 * (tw - c));
	}

	get Wplz() {
		const tf = Number(this.tf);
		const tw = Number(this.tw);
		const b = Number(this.b);
		const h = Number(this.h);
		const d = Number(this.d);
		const c = Number(this.c);
		return (tf - 2 * c) * ((b - 2 * c) ** 2) / 2 + (tw - 2 * c) * (h - 2 * (tf - c)) * (d + tw);
	}
}

module.exports = BoxSection;