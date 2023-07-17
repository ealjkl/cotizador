import NoQuoterContextError from "@/errors/NoQuoterContextError";
import { useContext } from "react";
import QuoterContext from "../../QuoterContext";

type Props = {
  step?: number;
};

export default function EnganchePercentageSlider({ step = 1 }: Props = {}) {
  //TODO: see if this is the way to handle the null case, because this should not be used without a context
  const quoter = useContext(QuoterContext)!;
  if (!quoter) {
    throw new NoQuoterContextError();
  }

  const {
    enganchePercentage,
    minEnganchePercentage,
    maxEnganchePercentage,
    setEnganchePercentage,
  } = quoter;

  return (
    <input
      type="range"
      value={enganchePercentage}
      min={minEnganchePercentage}
      max={maxEnganchePercentage}
      step={step}
      onChange={(ev) => {
        setEnganchePercentage(ev.currentTarget.valueAsNumber);
      }}
    />
  );
}
