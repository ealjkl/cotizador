import PlansContext, { usePlans } from "@/contexts/PricesContext";
import React, { useContext, useEffect, useState } from "react";
import useQuoterContext from "./useQuoterContext";

export type PlanKind = "contado" | "12-meses" | "24-meses" | "constructorPlan";

export default function usePlanQuoter(
  input: { planInicial: PlanKind },
  partialQuoter: {
    setEnganche: React.Dispatch<React.SetStateAction<number>>;
    setEnganchePercentage: (newEnganchePercentage: number) => void;
    // setEngancheString: React.Dispatch<React.SetStateAction<number>>;
    setMinEnganchePercentage: React.Dispatch<React.SetStateAction<number>>;
    setMaxEnganchePercentage: React.Dispatch<React.SetStateAction<number>>;
    setPlazo: React.Dispatch<React.SetStateAction<number>>;
  }
) {
  const plans = usePlans();
  const [planKind, setPlanKind] = useState(input.planInicial);
  const plan = plans[planKind];
  const [pagoContraEntregaPercentage, setPagoContraEntregaPercentage] =
    useState(plan.pagoContraEntregaPercentage);
  const {
    setEnganchePercentage,
    setMinEnganchePercentage,
    setMaxEnganchePercentage,
    setPlazo,
  } = partialQuoter;

  return {
    planKind,
    setPagoContraEntregaPercentage,
    pagoContraEntregaPercentage,
    setPlanKind,
  };
}
