import { useInputTextAsNum } from "@/hooks/useInputTextAsNum";
import useQuoterContext from "@/hooks/useQuoterContext";
import React, { use, useContext, useEffect, useState } from "react";
import EngancheCurrencyInput from "./inputs/enganche/EngancheCurrencyInput";
import EngancheDiscreteSlider from "./inputs/enganche/EngancheDiscreteSlider";
import EnganchePercentageDiscreteSlider from "./inputs/enganche/EnganchePercentageDiscreteSlider";
import EngancheTextInput from "./inputs/enganche/EngancheTextInput";

type Props = {};

export default function EngancheSection({}: Props) {
  const {
    minEnganche,
    maxEnganche,
    minEnganchePercentage,
    maxEnganchePercentage,
    planKind,
    pagoTotal,
  } = useQuoterContext();

  return (
    <div className="enganche-input-container input-section">
      <label htmlFor="enganche" className="quoter__enganche-label">
        Enganche
      </label>

      <EngancheCurrencyInput />
      {/* <EngancheTextInput /> */}
      {/* <EngancheDiscreteSlider
        step={Math.floor((maxEnganche - minEnganche) / 10)}
      /> */}
      <EnganchePercentageDiscreteSlider isDisabled={Number.isNaN(pagoTotal)} />

      <div className="enganche-input-slider__min-max-labels">
        <span className="enganche-input-slider__min-label">
          {minEnganchePercentage}%
        </span>
        <span className="enganche-input-slider__min-label">
          {maxEnganchePercentage}%
        </span>
      </div>
    </div>
  );
}
