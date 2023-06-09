import { useInputTextAsNum } from "@/hooks/useInputTextAsNum";
import useQuoterContext from "@/hooks/useQuoterContext";
import React, { use, useContext, useEffect, useState } from "react";
import EngancheDiscreteSlider from "./inputs/enganche/EngancheDiscreteSlider";
import EnganchePercentageSlider from "./inputs/enganche/EnganchePercentageDiscreteSlider";
import EngancheTextInput from "./inputs/enganche/EngancheTextInput";

type Props = {};

export default function EngancheSection({}: Props) {
  const {
    minEnganche,
    maxEnganche,
    minEnganchePercentage,
    maxEnganchePercentage,
  } = useQuoterContext();

  return (
    <div className="enganche-input-container input-section">
      <label htmlFor="enganche" className="quoter__enganche-label">
        Enganche
      </label>

      <EngancheTextInput />
      <EngancheDiscreteSlider
        step={Math.floor((maxEnganche - minEnganche) / 10)}
      />

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
