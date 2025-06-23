export type Plan = {
  engancheInicialPercentage: number;
  minEnganchePercentageInicial: number;
  maxEnganchePercentageInicial: number;
  pagoContraEntregaPercentage: number;
  plazoInicial: number;
  precioM2: number;
  plan: string;
};

// const plans: {
//   [planKind: string]: Plan;
// } = {
//   contado: {
//     engancheInicialPercentage: 80,
//     minEnganchePercentageInicial: 80,
//     maxEnganchePercentageInicial: 100,
//     pagoContraEntregaPercentage: 20,
//     precioM2: 3_600,
//     plazoInicial: 0,
//   },
//   "24-meses": {
//     engancheInicialPercentage: 10,
//     minEnganchePercentageInicial: 10,
//     maxEnganchePercentageInicial: 79,
//     pagoContraEntregaPercentage: 65,
//     plazoInicial: 24,
//     precioM2: 3_900,
//   },
//   "36-meses": {
//     engancheInicialPercentage: 10,
//     minEnganchePercentageInicial: 10,
//     maxEnganchePercentageInicial: 79,
//     pagoContraEntregaPercentage: 65,
//     plazoInicial: 36,
//     precioM2: 4_100,
//   },
//   constructorPlan: {
//     engancheInicialPercentage: 15,
//     minEnganchePercentageInicial: 15,
//     maxEnganchePercentageInicial: 93,
//     pagoContraEntregaPercentage: 85,
//     plazoInicial: 3,
//     precioM2: 4_100,
//   },
// };

// export const planKindInicial = "24-meses";
// export const planInicial = plans[planKindInicial];

// export default plans;
