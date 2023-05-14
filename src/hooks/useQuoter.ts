import { QuoterContextType } from "@/components/Quoter/QuoterContext";
import { useState } from "react";
import useEnganche from "./useEnganche";
import type { EngancheInicialVar } from "./useEnganche";

export default function useQuoter<T>(
  input: {
    preciosTable?: T;
    precioBase: number;
    plazoInicial?: number;
    minEnganchePercentage?: number;
    maxEnganchePercentage?: number;
  } & EngancheInicialVar
): QuoterContextType {
  let {
    precioBase,
    preciosTable,
    plazoInicial = 12,
    minEnganchePercentage = 0,
    maxEnganchePercentage = 100,
    engancheInicial,
    engancheInicialPercentage,
  } = input;

  const minEnganche = (minEnganchePercentage * precioBase) / 100;
  const maxEnganche = (maxEnganchePercentage * precioBase) / 100;

  minEnganchePercentage ??= 0;
  maxEnganchePercentage ??= 100;

  if (engancheInicial == undefined && engancheInicialPercentage == undefined) {
    engancheInicialPercentage = minEnganchePercentage;
  }

  let engancheInicialVar = {
    engancheInicial,
    engancheInicialPercentage,
  } as EngancheInicialVar;

  const [plazo, setPlazo] = useState<number>(plazoInicial);
  const { enganche, enganchePercentage, setEnganche, setEnganchePercentage } =
    useEnganche({
      ...engancheInicialVar,
      precioBase,
      maxEnganchePercentage,
      minEnganchePercentage,
    });

  const { pagoInicial, pagoMensualidad, pagoTotal } = computePagos({
    precioBase,
    enganche,
    plazo,
  });

  return {
    precioBase,
    enganche,
    enganchePercentage,
    minEnganche,
    maxEnganche,
    minEnganchePercentage,
    maxEnganchePercentage,
    plazo,
    pagoInicial,
    pagoMensualidad,
    pagoTotal,

    setEnganche,
    setEnganchePercentage,
    setPlazo,
  };
}

function computePagos({
  precioBase,
  enganche,
  plazo,
}: {
  precioBase: number;
  enganche: number;
  plazo: number;
}) {
  // TODO: this should change based on formula
  const pagoTotal = precioBase;

  //NOTE: this could change if there are more initial charges other than enganche, like an insurance
  const pagoInicial = enganche;
  const pagoMensualidad = (pagoTotal - pagoInicial) / plazo;

  return {
    pagoInicial,
    pagoMensualidad,
    pagoTotal,
  };
}
