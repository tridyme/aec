class TowerFoundation {
  constructor(initialState) {
    this.initialState = {
      Nels: Number(initialState.Nels),
      MXels: Number(initialState.MXels),
      VXels: Number(initialState.VXels),
      MYels: Number(initialState.MYels),
      VYels: Number(initialState.VYels),
      Nelu: Number(initialState.Nelu),
      MXelu: Number(initialState.MXelu),
      VXelu: Number(initialState.VXelu),
      MYelu: Number(initialState.MYelu),
      VYelu: Number(initialState.VYelu),
      A: Number(initialState.A),
      B: Number(initialState.B),
      C: Number(initialState.C),
      D: Number(initialState.D),
      E: Number(initialState.E),
      F: Number(initialState.F),
      L: Number(initialState.L),
      H: Number(initialState.H),
      Lf: Number(initialState.Lf),
      deltady: Number(initialState.deltady),
      Hf: Number(initialState.Hf),
      Hs: Number(initialState.Hs),
      Hms: Number(initialState.Hms),
      sigmaels: Number(initialState.sigmaelu),
      sigmaelu: Number(initialState.sigmaelu),
      ztn: Number(initialState.ztn),
      phi: Number(initialState.phi),
      c: Number(initialState.c),
      roRemblai: Number(initialState.roRemblai),
      roBeton: Number(initialState.roBeton)
    };
  };

  analysis() {
    return {
      Nmassif: this.Nmassif(),
      MEls: this.MEls(),
      TEls: this.TEls(),
      CrEls: this.CrEls(),
      MrEls: this.MrEls(),
      eEls: this.eEls(),
      Bon6Els: this.Bon6Els(),
      etatSemelleEls: this.etatSemelleEls(),
      LcEls: this.LcEls(),
      ratioCompressionSolEls: this.ratioCompressionSolEls(),
      sigmaMaxEls: this.sigmaMaxEls(),
      sigmaMinEls: this.sigmaMinEls(),
      sigmaRefEls: this.sigmaRefEls(),
      deltaEls: this.deltaEls(),
      iDeltaBetaEls: this.iDeltaBetaEls(),
      sigmaRedEls: this.sigmaRedEls(),
      ratioContrainteEls: this.ratioContrainteEls(),
      ratioRenversementEls: this.ratioRenversementEls(),
      MElu: this.MElu(),
      TElu: this.TElu(),
      CrElu: this.CrElu(),
      MrElu: this.MrElu(),
      eElu: this.eElu(),
      Bon6Elu: this.Bon6Elu(),
      etatSemelleElu: this.etatSemelleElu(),
      LcElu: this.LcElu(),
      ratioCompressionSolElu: this.ratioCompressionSolElu(),
      sigmaMaxElu: this.sigmaMaxElu(),
      sigmaMinElu: this.sigmaMinElu(),
      sigmaRefElu: this.sigmaRefElu(),
      deltaElu: this.deltaElu(),
      iDeltaBetaElu: this.iDeltaBetaElu(),
      sigmaRedElu: this.sigmaRedElu(),
      ratioContrainteElu: this.ratioContrainteElu(),
      ratioRenversementElu: this.ratioRenversementElu()
    }
  }

  // Poids du massif + sol
  Nmassif() {
    const {
      A,
      B,
      H,
      Hms,
      roRemblai,
      roBeton
    } = this.initialState;
    return A * B * H * roBeton + roRemblai * A * B * Hms;
  }

  // Vérification Fascicule 62 - titre V
  // Moment à la base du pylone à l'ELS
  MEls() {
    const {
      MXels,
      MYels
    } = this.initialState;
    return (MXels ** 2 + MYels ** 2) ** (0.5);
  }

  // Effort tranchant à l'ELS
  TEls() {
    const {
      VXels,
      VYels
    } = this.initialState;
    return (VXels ** 2 + VYels ** 2) ** (0.5);
  }

  // Compression résultante à l'ELS
  CrEls() {
    const {
      Nels
    } = this.initialState;
    const Nmassif = this.Nmassif();
    return Nels + Nmassif;
  }

  // Moment en fond de fouille à l'ELS
  MrEls() {
    const {
      H,
      Hms
    } = this.initialState;
    const MEls = this.MEls();
    const TEls = this.TEls();
    return MEls + TEls * (H + Hms);
  }

  // Excentricité à l'ELS
  eEls() {
    const MrEls = this.MrEls();
    const CrEls = this.CrEls();
    return MrEls / CrEls;
  }

  // Rapport B / 6
  Bon6Els() {
    const {
      B
    } = this.initialState;
    return B / 6;
  }

  // Etat de la semelle à l'ELS
  etatSemelleEls() {
    const Bon6Els = this.Bon6Els();
    const eEls = this.eEls();

    if (eEls < Bon6Els) {
      return "Semelle entièrement comprimée";
    } else {
      return "Semelle partiellement comprimée";
    }
  }


  // Longueur comprimée à l'ELS
  LcEls() {
    const {
      B
    } = this.initialState;
    const Bon6Els = this.Bon6Els();
    const eEls = this.eEls();

    if (eEls < Bon6Els) {
      return B;
    } else {
      return (B / 2 - eEls) * 3;
    }
  }

  // Ratio compression du massif à l'ELS
  ratioCompressionSolEls() {
    const {
      B
    } = this.initialState;
    const LcEls = this.LcEls();
    return LcEls / B;
  }

  // Contrainte Max à l'ELS
  sigmaMaxEls() {
    const {
      A
    } = this.initialState;
    const LcEls = this.LcEls();
    const CrEls = this.CrEls();
    return 2 * CrEls / A / LcEls;
  }

  // Contrainte Min à l'ELS
  sigmaMinEls() {
    const {
      A
    } = this.initialState;
    const LcEls = this.LcEls();
    const CrEls = this.CrEls();
    return 0;
  }

  // Contrainte de référance à l'ELS
  sigmaRefEls() {
    const qmax = this.sigmaMaxEls();

    return 3 * qmax / 4;
  }

  // Angle d'inclinaison des efforts
  deltaEls() {
    const TEls = this.TEls();
    const CrEls = this.CrEls();
    return Math.atan(TEls / CrEls) * 180 / Math.PI;
  }

  // Coefficient de réduction de la charge
  iDeltaBetaEls() {
    const deltaEls = this.deltaEls();
    return (1 - deltaEls / 90) ** 2;
  }

  // Contrainte de calcul ELS réduite
  sigmaRedEls() {
    const {
      sigmaels
    } = this.initialState;
    const iDeltaBetaEls = this.iDeltaBetaEls();
    return sigmaels * iDeltaBetaEls;
  }

  // Ratio contraintes ELS
  ratioContrainteEls() {
    const sigmaRefEls = this.sigmaRefEls();
    const sigmaRedEls = this.sigmaRedEls();
    return sigmaRefEls / sigmaRedEls;
  }


  // Ratio renversement ELS
  ratioRenversementEls() {
    const {
      B
    } = this.initialState;
    const CrEls = this.CrEls();
    const MrEls = this.MrEls();
    return MrEls / (CrEls * B / 2);
  }


  // Moment à la base du pylone à l'ELU
  MElu() {
    const {
      MXelu,
      MYelu
    } = this.initialState;
    return (MXelu ** 2 + MYelu ** 2) ** (0.5);
  }

  // Effort tranchant à l'ELU
  TElu() {
    const {
      VXelu,
      VYelu
    } = this.initialState;
    return (VXelu ** 2 + VYelu ** 2) ** (0.5);
  }

  // Compression résultante à l'ELU
  CrElu() {
    const {
      Nelu
    } = this.initialState;
    const Nmassif = this.Nmassif();
    return Nelu + 1.35 * Nmassif;
  }

  // Moment en fond de fouille à l'ELU
  MrElu() {
    const {
      H,
      Hms
    } = this.initialState;
    const MElu = this.MElu();
    const TElu = this.TElu();
    return MElu + TElu * (Number(H) + Number(Hms));
  }

  // Excentricité à l'ELU
  eElu() {
    const MrElu = this.MrElu();
    const CrElu = this.CrElu();
    return MrElu / CrElu;
  }

  // Rapport B / 6
  Bon6Elu() {
    const {
      B
    } = this.initialState;
    return B / 6;
  }

  // Etat de la semelle à l'ELU
  etatSemelleElu() {
    const Bon6Elu = this.Bon6Elu();
    const eElu = this.eElu();

    if (eElu < Bon6Elu) {
      return "Semelle entièrement comprimée";
    } else {
      return "Semelle partiellement comprimée";
    }
  }


  // Longueur comprimée à l'ELU
  LcElu() {
    const {
      B
    } = this.initialState;
    const Bon6Elu = this.Bon6Elu();
    const eElu = this.eElu();

    if (eElu < Bon6Elu) {
      return B;
    } else {
      return (B / 2 - eElu) * 3;
    }
  }

  // Ratio compression du massif à l'ELU
  ratioCompressionSolElu() {
    const {
      B
    } = this.initialState;
    const LcElu = this.LcElu();
    return LcElu / B;
  }

  // Contrainte Max à l'ELU
  sigmaMaxElu() {
    const {
      A
    } = this.initialState;
    const LcElu = this.LcElu();
    const CrElu = this.CrElu();
    return 2 * CrElu / A / LcElu;
  }

  // Contrainte Min à l'ELU
  sigmaMinElu() {
    const {
      A
    } = this.initialState;
    const LcElu = this.LcElu();
    const CrElu = this.CrElu();
    return 0;
  }

  // Contrainte de référance à l'ELU
  sigmaRefElu() {
    const qmax = this.sigmaMaxElu();

    return 3 * qmax / 4;
  }

  // Angle d'inclinaison des efforts
  deltaElu() {
    const TElu = this.TElu();
    const CrElu = this.CrElu();
    return Math.atan(TElu / CrElu) * 180 / Math.PI;
  }

  // Coefficient de réduction de la charge
  iDeltaBetaElu() {
    const deltaElu = this.deltaElu();
    return (1 - deltaElu / 90) ** 2;
  }

  // Contrainte de calcul ELU réduite
  sigmaRedElu() {
    const {
      sigmaels
    } = this.initialState;
    const iDeltaBetaElu = this.iDeltaBetaElu();
    return sigmaels * iDeltaBetaElu;
  }

  // Ratio contraintes ELU
  ratioContrainteElu() {
    const sigmaRefElu = this.sigmaRefElu();
    const sigmaRedElu = this.sigmaRedElu();
    return sigmaRefElu / sigmaRedElu;
  }

  // Ratio renversement ELU
  ratioRenversementElu() {
    const {
      B
    } = this.initialState;
    const CrElu = this.CrElu();
    const MrElu = this.MrElu();
    return MrElu / (CrElu * B / 2);
  }
}

module.exports = TowerFoundation;
