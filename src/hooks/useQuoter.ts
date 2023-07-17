import { QuoterContextType } from "@/components/quoter/QuoterContext";
import { useEffect, useState } from "react";
import useEnganche from "./useEnganche";
import type { EngancheInicialVar } from "./useEnganche";
import usePlanQuoter, { PlanKind } from "./usePlan";
import plans, { planInicial, planKindInicial } from "@/data/plans";

export default function useQuoter(
  input: {
    m2: number;
    plazoInicial?: number;
    minEnganchePercentageInicial?: number;
    maxEnganchePercentageInicial?: number;
  } & EngancheInicialVar
): QuoterContextType {
  let {
    m2,
    plazoInicial = 12,
    minEnganchePercentageInicial = 0,
    maxEnganchePercentageInicial = 100,
    engancheInicial,
    engancheInicialPercentage,
  } = input;

  const [minEnganchePercentage, setMinEnganchePercentage] = useState<number>(
    minEnganchePercentageInicial
  );
  const [maxEnganchePercentage, setMaxEnganchePercentage] = useState<number>(
    maxEnganchePercentageInicial
  );
  minEnganchePercentageInicial ??= 0;
  maxEnganchePercentageInicial ??= 100;

  if (engancheInicial == undefined && engancheInicialPercentage == undefined) {
    engancheInicialPercentage = minEnganchePercentageInicial;
  }

  let engancheInicialVar = {
    engancheInicial,
    engancheInicialPercentage,
  } as EngancheInicialVar;

  const [plazo, setPlazo] = useState<number>(plazoInicial);
  const [precioBase, setPrecioBase] = useState<number>(
    planInicial.precioM2 * m2
  );

  const { enganche, enganchePercentage, setEnganche, setEnganchePercentage } =
    useEnganche({
      ...engancheInicialVar,
      precioBase,
      maxEnganchePercentage: maxEnganchePercentageInicial,
      minEnganchePercentage: minEnganchePercentageInicial,
    });

  const { planKind, setPlanKind, pagoContraEntregaPercentage } = usePlanQuoter(
    {
      planInicial: "contado",
    },
    {
      setEnganche,
      setEnganchePercentage,
      setMinEnganchePercentage,
      setMaxEnganchePercentage,
      setPlazo,
    }
  );

  useEffect(() => {
    setPrecioBase(plans[planKind].precioM2 * m2);
  }, [planKind]);

  const minEnganche = (minEnganchePercentage * precioBase) / 100;
  const maxEnganche = (maxEnganchePercentage * precioBase) / 100;

  const { pagoInicial, pagoMensualidad, pagoTotal, pagoContraEntrega } =
    computePagos({
      precioBase,
      enganchePercentage,
      plazo,
      pagoContraEntregaPercentage,
    });

  return {
    precioBase,
    enganche,
    pagoContraEntrega,
    enganchePercentage,
    minEnganche,
    maxEnganche,
    minEnganchePercentage,
    maxEnganchePercentage,
    plazo,
    planKind,
    pagoInicial,
    pagoMensualidad,
    pagoTotal,
    setEnganche,
    setPlanKind,
    setMinEnganchePercentage,
    setMaxEnganchePercentage,
    setEnganchePercentage,
    setPlazo,
  };
}

function computePagos({
  precioBase,
  enganchePercentage,
  plazo,
  pagoContraEntregaPercentage,
}: {
  precioBase: number;
  enganchePercentage: number;
  plazo: number;
  pagoContraEntregaPercentage: number;
}) {
  // TODO: this should change based on formula
  let pagoTotal = precioBase;

  const pagoMensualidadesTotalPercentage =
    100 - enganchePercentage - pagoContraEntregaPercentage;
  const pagoContraEntregaRealPercentage =
    pagoContraEntregaPercentage + Math.min(0, pagoMensualidadesTotalPercentage);

  const pagoMensualidadTotalRealPercentage = Math.max(
    pagoMensualidadesTotalPercentage,
    0
  );

  const pagoMensualidadPercentage = pagoMensualidadTotalRealPercentage / plazo;

  const pagoInicial = (enganchePercentage * pagoTotal) / 100;
  const pagoMensualidad = (pagoTotal * pagoMensualidadPercentage) / 100;
  const pagoContraEntrega = (pagoTotal * pagoContraEntregaRealPercentage) / 100;

  return {
    pagoInicial,
    pagoMensualidad,
    pagoContraEntrega,
    pagoTotal,
  };
}
