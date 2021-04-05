class SplicePlate {
  constructor({ initialState }) {
    this.initialState = initialState;
  };

  documentation() {
    const doc = {
      //Input
      FtEd: {
        name: 'FtEd', // le "name" doit être égale à la clé et ne doit pas contenir de caractère spéciaux
        text: 'FtEd',
        description: "Effort normal par boulon",
        unit: { name: 'N', text: 'N' }, // Unitée utilisée pour les calculs (important pour la suite quand on voudra intégré un système de conversion)
        code: "EN 1993-1-8:2005", // Mettre le code associé si existe
        reference: "4.2" // Mettre référence (chapitre) du code associé si existe
      },
      FvEd: {
        name: 'FvEd', 
        text: 'FvEd',
        description: "Effort tranchant par boulon",
        unit: { name: 'N', text: 'N' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      numberBolts: {
        name: 'numberBolts', 
        text: 'numberBolts',
        description: "Nombre de boulons",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: " ", 
        reference: " " 
      },
      p1: {
        name: 'p1', 
        text: 'p1',
        description: "Pince longitudinale",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      e1: {
        name: 'e1', 
        text: 'e1',
        description: "Entraxe longitudinal",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      d: {
        name: 'd', 
        text: 'd',
        description: "Diamètre nominal du boulon",
        unit: { name: 'mm', text: 'mm' },
        code: "ISO 965", 
        reference: " " 
      },
      As: {
        name: 'As', 
        text: 'As',
        description: "Section nette du boulon",
        unit: { name: 'mm²', text: 'mm²' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      d0: {
        name: 'd0', 
        text: 'd0',
        description: "Diamètre perçage",
        unit: { name: 'mm', text: 'mm' },
        code: "ISO 4016", 
        reference: " " 
      },
      D: {
        name: 'D', 
        text: 'D',
        description: "Diamétre du tube",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      tf: {
        name: 'tf', 
        text: 'tf',
        description: "Epaisseur du tube",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      t: {
        name: 't', 
        text: 't',
        description: "Epaisseur gousset",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      p: {
        name: 'p', 
        text: 'p',
        description: "Nombre de plan de cisaillement",
        unit: { name: 'mm', text: 'mm' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      fy: {
        name: 'fy', 
        text: 'fy',
        description: "Limite élastique des pièces assemblées",
        unit: { name: 'N/mm²', text: 'N/mm²' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      fu: {
        name: 'fu', 
        text: 'fu',
        description: "Contrainte de rupture des pièces assemblées",
        unit: { name: 'N/mm²', text: 'N/mm²' }, 
        code: "EN 1993-1-4", 
        reference: "2.1" 
      },
      fub: {
        name: 'fub', 
        text: 'fub',
        description: "Contrainte de rupture pour la classe",
        unit: { name: 'N/mm²', text: 'N/mm²' }, 
        code: "EN 1993-1-4", 
        reference: "2.1" 
      },
      fyb: {
        name: 'fyb', 
        text: 'fyb',
        description: "Limite élastique pour la classe",
        unit: { name: 'N/mm²', text: 'N/mm²' }, 
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      gammaM0: {
        name: 'gammaM0', 
        text: 'gammaM0',
        description: "Facteur partiel de sécurité",
        unit: { name: ' ', text: ' ' }, //Without unit
        code: "EN 1993-1-8:2005", 
        reference: "2.1" 
      },
      gammaM2: {
        name: 'gammaM2', 
        text: 'gammaM2',
        description: "Coefficient partiel pour les assemblage boulonnés",
        unit: { name: ' ', text: ' ' }, //Without unit
        code: "EN 1993-1-8:2005", 
        reference: "2.1" 
      },
      gammaMb: {
        name: 'gammaM3', 
        text: 'gammaM3',
        description: "Coefficient partiel de resistance des assemblages boulonnés ",
        unit: { name: ' ', text: ' ' }, //Without unit
        code: "EN 1993-1-8:2005", 
        reference: "2.1" 
      },
      
      // Output
      FvSd: {
        name: 'FvSd', 
        text: 'FvSd',
        description: "Effort appliqué sur un seul boulon",
        unit: { name: 'KN', text: 'KN' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      FvRd: {
        name: 'FvRd', 
        text: 'FvRd',
        description: "Effort résistant au cisaillement d'un boulon",
        unit: { name: 'KN', text: 'KN' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      VRd1: {
        name: 'VRd1', 
        text: 'VRd1',
        description: "Effort résistant vis à vis du cisaillement des boulons",
        unit: { name: 'KN', text: 'KN' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      alpha: {
        name: 'alpha', 
        text: 'alpha',
        description: " ",
        unit: { name: ' ', text: ' ' }, // Without unit
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      Fbrd: {
        name: 'Fbrd', 
        text: 'Fbrd',
        description: "La résistance à la pression diamétrale ",
        unit: { name: 'KN', text: 'KN' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      VRd2: {
        name: 'VRd2', 
        text: 'VRd2',
        description: "Effort résistant vis à vis de la pression diamétrale",
        unit: { name: 'KN', text: 'KN' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      VRd: {
        name: 'VRd', 
        text: 'VRd',
        description: "Effort résistant de l'assemblage par gousset",
        unit: { name: 'KN', text: 'KN' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      Araw: {
        name: 'Araw', 
        text: 'Araw',
        description: "Section brute",
        unit: { name: 'cm²', text: 'cm²' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      Anet: {
        name: 'Anet', 
        text: 'Anet',
        description: "Section nette",
        unit: { name: 'cm²', text: 'cm²' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      Npl: {
        name: 'Npl', 
        text: 'Npl',
        description: "Résistance à la rupture en section brute",
        unit: { name: 'KN', text: 'KN' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
      Nu: {
        name: 'Nu', 
        text: 'Nu',
        description: "Résistance à la rupture en section nette",
        unit: { name: 'KN', text: 'KN' },
        code: "EN 1993-1-8:2005", 
        reference: "4.2" 
      },
    }
  }

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
    return 2.5*alpha*(d/10)*(t/10)*(fu/10)/gammaMb;
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
    return 0.9*Anet*(fu/10)/gammaM2;
  }
}
module.exports = SplicePlate;

