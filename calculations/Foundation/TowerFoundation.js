class TowerFoundation {
  constructor({ initialState }) {
    this.initialState = initialState;
  };

  analysis() {
    return {
      Nmassif: this.Nmassif(),
      AElsX: this.AElsX(),
      AEluX: this.AEluX(),
      AElsY: this.AElsY(),
      AEluY: this.AEluY(),
      ratioElsX: this.ratioElsX(),
      ratioEluX: this.ratioEluX(),
      ratioElsY: this.ratioElsY(),
      ratioEluY: this.ratioEluY(),
      ratioAX: this.ratioAX(),
      elsSigmavX: this.elsSigmavX(),
      ratioElsSigmavX: this.ratioElsSigmavX(),
      eluSigmavX: this.eluSigmavX(),
      ratioEluSigmavX: this.ratioEluSigmavX(),
      ratioAY: this.ratioAY(),
      elsSigmavY: this.elsSigmavY(),
      ratioElsSigmavY: this.ratioElsSigmavY(),
      eluSigmavY: this.eluSigmavY(),
      ratioEluSigmavY: this.ratioEluSigmavY(),
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

  // Surface de compression suivant X à l'ELS
  AElsX() {
    const {
      A,
      B,
      MXels,
      Nels,
    } = this.initialState;
    const Nmassif = this.Nmassif();
    return (A - 2 * MXels / (Nels + Nmassif)) * (B - 2 * MXels / (Nels + Nmassif));
  }

  // Surface de compression suivant Y à l'ELS
  AElsY() {
    const {
      A,
      B,
      MYels,
      Nels,
    } = this.initialState;
    const Nmassif = this.Nmassif();
    return (A - 2 * MYels / (Nels + Nmassif)) * (B - 2 * MYels / (Nels + Nmassif));
  }

  // Surface de compression suivant X à l'ELU
  AEluX() {
    const {
      A,
      B,
      MXelu,
      Nelu,
    } = this.initialState;
    const Nmassif = this.Nmassif();
    return (A - 2 * MXelu / (Nelu + Nmassif)) * (B - 2 * MXelu / (Nelu + Nmassif));
  }

  // Surface de compression suivant Y à l'ELU
  AEluY() {
    const {
      A,
      B,
      MYelu,
      Nelu,
    } = this.initialState;
    const Nmassif = this.Nmassif();
    return (A - 2 * MYelu / (Nelu + Nmassif)) * (B - 2 * MYelu / (Nelu + Nmassif));
  }

  // Ratio contraintes suivant X à  l'ELS
  ratioElsX() {
    const {
      Nels,
      sigmaels
    } = this.initialState;
    const Nmassif = this.Nmassif();
    const AElsX = this.AElsX();
    return (Nels + Nmassif) / AElsX / sigmaels;
  }

  // Ratio contraintes suivant X à  l'ELU
  ratioEluX() {
    const {
      Nelu,
      sigmaelu
    } = this.initialState;
    const Nmassif = this.Nmassif();
    const AEluX = this.AEluX();
    return (Nelu + Nmassif) / AEluX / sigmaelu;
  }

  // Ratio contraintes suivant Y à  l'ELS
  ratioElsY() {
    const {
      Nels,
      sigmaels
    } = this.initialState;
    const Nmassif = this.Nmassif();
    const AElsY = this.AElsY();
    return (Nels + Nmassif) / AElsY / sigmaels;
  }

  // Ratio contraintes suivant Y à  l'ELU
  ratioEluY() {
    const {
      Nelu,
      sigmaelu
    } = this.initialState;
    const Nmassif = this.Nmassif();
    const AEluY = this.AEluY();
    return (Nelu + Nmassif) / AEluY / sigmaelu;
  }

  // Ratio de section suivant X à  l'ELS
  ratioAX() {
    const {
      A,
      B,
    } = this.initialState;
    const AElsX = this.AElsX();
    return AElsX / (A * B);
  }

  // Contrainte suivant X à  l'ELS
  elsSigmavX() {
    const {
      Nels
    } = this.initialState;
    const Nmassif = this.Nmassif();
    const AElsX = this.AElsX();
    return (Nels + Nmassif) / AElsX;
  }

  // ratio de contrainte suivant X à  l'ELS
  ratioElsSigmavX() {
    const {
      sigmaels
    } = this.initialState;
    const elsSigmavX = this.elsSigmavX();
    return elsSigmavX / sigmaels;
  }

  // Contrainte suivant X à  l'ELU
  eluSigmavX() {
    const {
      Nelu
    } = this.initialState;
    const Nmassif = this.Nmassif();
    const AEluX = this.AEluX();
    return (Nelu + 1.35 * Nmassif) / AEluX;
  }

  // ratio de contrainte suivant X à  l'ELU
  ratioEluSigmavX() {
    const {
      sigmaelu
    } = this.initialState;
    const eluSigmavX = this.eluSigmavX();
    return eluSigmavX / sigmaelu;
  }

  // Ratio de section suivant Y à  l'ELS
  ratioAY() {
    const {
      A,
      B,
    } = this.initialState;
    const AElsY = this.AElsY();
    return AElsY / (A * B);
  }

  // Contrainte suivant Y à  l'ELS
  elsSigmavY() {
    const {
      Nels
    } = this.initialState;
    const Nmassif = this.Nmassif();
    const AElsY = this.AElsY();
    return (Nels + Nmassif) / AElsY;
  }

  // ratio de contrainte suivant Y à  l'ELS
  ratioElsSigmavY() {
    const {
      sigmaels
    } = this.initialState;
    const elsSigmavY = this.elsSigmavY();
    return elsSigmavY / sigmaels;
  }

  // Contrainte suivant Y à  l'ELU
  eluSigmavY() {
    const {
      Nelu
    } = this.initialState;
    const Nmassif = this.Nmassif();
    const AEluY = this.AEluY();
    return (Nelu + 1.35 * Nmassif) / AEluY;
  }

  // ratio de contrainte suivant Y à  l'ELU
  ratioEluSigmavY() {
    const {
      sigmaelu
    } = this.initialState;
    const eluSigmavY = this.eluSigmavY();
    return eluSigmavY / sigmaelu;
  }

  //-------------------------------------------------------------
  // Vérification Fascicule 62 - titre V
  // Moment à la base du pylone à l'ELS
  //-------------------------------------------------------------
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
    return MElu + TElu * (H + Hms);
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
      sigmaelu
    } = this.initialState;
    const iDeltaBetaElu = this.iDeltaBetaElu();
    return sigmaelu * iDeltaBetaElu;
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
