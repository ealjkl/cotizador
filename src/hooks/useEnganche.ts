"use strict";
import { useState } from "react";

export type EngancheInicialVar =
  | {
      engancheInicial?: number;
      engancheInicialPercentage?: never;
    }
  | {
      engancheInicialPercentage?: number;
      engancheInicial?: never;
    };

export default function useEnganche(
  input: {
    precioBase: number;
    minEnganchePercentage?: number;
    maxEnganchePercentage?: number;
  } & EngancheInicialVar
) {
  let {
    precioBase,
    minEnganchePercentage,
    maxEnganchePercentage,
    engancheInicial,
    engancheInicialPercentage,
  } = input;

  minEnganchePercentage ??= 0;
  maxEnganchePercentage ??= 100;

  if (engancheInicial == undefined && engancheInicialPercentage == undefined) {
    engancheInicialPercentage = maxEnganchePercentage;
  }

  //NOTE: I am pretty sure this ensures that input.engancheInicialPercentage is a number
  engancheInicial =
    engancheInicial != undefined
      ? engancheInicial
      : (engancheInicialPercentage! * precioBase) / 100;
  engancheInicial satisfies number;

  const [enganche, setEnganche] = useState<number>(engancheInicial);
  const enganchePercentage = (enganche / precioBase) * 100;

  function setEnganchePercentage(newEnganchePercentage: number) {
    setEnganche((newEnganchePercentage * precioBase) / 100);
  }

  return {
    setEnganche,
    setEnganchePercentage,
    enganche,
    enganchePercentage,
  };
}
