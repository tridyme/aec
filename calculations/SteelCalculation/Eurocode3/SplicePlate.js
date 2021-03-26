class SplicePlate {
  constructor({ initialState }) {
    this.initialState = initialState;
  };

  analysis() {
    return {
      FvSd: this.FvSd(),
      FvRd: this.FvRd(),
      VRd1: this.VRd1(),
      alpha: this.alpha(),
      Fbrd: this.Fbrd(),
      VRd2: this.VRd2(),
      VRd: this.VRd(),
      Araw: this.Araw(),
      Anet: this.Anet(),
      Npl: this.Npl(),
      Nu: this.Nu(),
    }
  }

  // Effort appliqué sur un seul boulon (KN)
  FvSd() {
    const {
      FtEd,
      numberBolts,
      p
    } = this.initialState;
    return (FtEd / 1000) / (numberBolts * p);
  }

  // Effort résistant au cisaillement d'un boulon (KN)
  FvRd() {
    const {
      As,
      fub,
      gammaMb
    } = this.initialState;
    return 0.5 * (As/100) * (fub/10) / gammaMb;
  }

  // Effort résistant vis à vis du cisaillement des boulons (KN)
  VRd1() {
    const {
      numberBolts,
      p
    } = this.initialState;
    const FvRd = this.FvRd();
    return numberBolts * p * FvRd;
  }

  // alpha
  alpha() {
    const {
      e1,
      d0,
      p1,
      fub,
      fu
    } = this.initialState;
    return Math.min(e1/(3*d0), (p1/(3*d0))-0.25, fub/fu, 1);
  }

  // Fbrd (KN)
  Fbrd() {
    const {
      d,
      t,
      fu,
      gammaMb
    } = this.initialState;
    const alpha = this.alpha();
    return 2.5*apha*(d/10)*(t/10)*(fu/10)/gammaMb;
  }

  // Effort résistant vis à vis de la pression diamétrale (KN)
  VRd2() {
    const {
      numberBolts
    } = this.initialState;
    const Fbrd = this.Fbrd();
    return numberBolts * Fbrd;
  }

  // Effort résistant de l'assemblage par gousset (KN)
  VRd() {
    const VRd1 = this.VRd1();
    const VRd2 = this.VRd2();
    return Math.min(VRd1, VRd2);
  }

  // Section brute (cm²)
  Araw() {
    const {
      D
    } = this.initialState;
    return 2*0.19*(D/10)**2;
  }

  // Section nette (cm²)
  Anet() {
    const {
      numberBolts,
      d0,
      tf
    } = this.initialState;
    const Araw = this.Araw();
    return Araw - 2*numberBolts*(d0/10)*(tf/10);
  }

  // Résistance à la rupture en section brute (KN)
  Npl() {
    const {
      fy,
      gammaM0
    } = this.initialState;
    const Araw = this.Araw();
    return Araw*(fy/10)/gammaM0;
  }

  // Résistance à la rupture en section nette (KN)
  Nu() {
    const {
      fu,
      gammaM2
    } = this.initialState;
    const Anet = this.Anet()
  }
}
module.exports = TensionChordSplice;

