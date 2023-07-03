const plans: {
  [planKind: string]: {
    engancheInicialPercentage: number;
    minEnganchePercentageInicial: number;
    maxEnganchePercentageInicial: number;
    pagoContraEntregaPercentage: number;
    plazoInicial: number;
  };
} = {
  contado: {
    engancheInicialPercentage: 80,
    minEnganchePercentageInicial: 80,
    maxEnganchePercentageInicial: 100,
    pagoContraEntregaPercentage: 20,
    plazoInicial: 0,
  },
  "24-meses": {
    engancheInicialPercentage: 10,
    minEnganchePercentageInicial: 10,
    maxEnganchePercentageInicial: 100,
    pagoContraEntregaPercentage: 65,
    plazoInicial: 24,
  },
  "36-meses": {
    engancheInicialPercentage: 10,
    minEnganchePercentageInicial: 10,
    maxEnganchePercentageInicial: 100,
    pagoContraEntregaPercentage: 65,
    plazoInicial: 36,
  },
  constructor: {
    engancheInicialPercentage: 15,
    minEnganchePercentageInicial: 15,
    maxEnganchePercentageInicial: 100,
    pagoContraEntregaPercentage: 85,
    plazoInicial: 3,
  },
};

export default plans;
