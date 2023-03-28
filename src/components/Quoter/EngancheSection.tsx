import React, { useEffect } from "react";
import EngancheSelect from "./EngancheSelect";

type Props = {
  total: number;
  enganche: number;
  engancheString: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  minEnganchePercentage?: number;
  maxEnganchePercentage?: number;
  setEngancheString?: (value: React.SetStateAction<string>) => void;
  setEnganche: (value: React.SetStateAction<number>) => void;
};

export default function EngancheSection({
  onChange,
  enganche,
  engancheString,
  total,
  setEngancheString,
  setEnganche,
  minEnganchePercentage = 10,
  maxEnganchePercentage = 90,
}: Props) {
  const minEngancheValue = Math.floor((minEnganchePercentage * total) / 100);
  const maxEngancheValue = Math.ceil((maxEnganchePercentage * total) / 100);

  useEffect(() => {
    const candEganche = parseInt(engancheString);
    if (Number.isNaN(candEganche) && engancheString != "") {
      return;
    }
    if (candEganche > maxEngancheValue) {
      setEnganche(maxEngancheValue);
      return;
    }
    if (candEganche < minEngancheValue || engancheString == "") {
      setEnganche(minEngancheValue);
      return;
    }

    setEnganche(candEganche);
  }, [engancheString, minEngancheValue, maxEngancheValue, setEnganche]);

  return (
    <div className="enganche-input-container input-section">
      <label htmlFor="enganche" className="quoter__enganche-label">
        Enganche
      </label>
      <input
        type="currency"
        className="enganche-input-box"
        value={engancheString}
        onInput={(ev) => {
          if (!setEngancheString) return;
          setEngancheString(ev.currentTarget.value);
        }}
      />
      <input
        type="range"
        className="enganche-input-slider"
        min={minEngancheValue}
        max={maxEngancheValue}
        step={Math.floor((maxEngancheValue - minEngancheValue) / 10)}
        value={enganche}
        onInput={(ev) => {
          if (!setEngancheString) return;
          setEngancheString(ev.currentTarget.value);
        }}
      />
      <div className="enganche-input-slider__min-max-labels">
        <span className="enganche-input-slider__min-label">
          {minEnganchePercentage}%
        </span>
        <span className="enganche-input-slider__min-label">
          {maxEnganchePercentage}%
        </span>
      </div>
      {/* <p className="enganche-percentage">
        {Math.floor((enganche / total) * 100)}
        <span className="enganche-percentage-symbol">%</span>
      </p> */}
    </div>
  );
}
