import { useInputTextAsNum } from "@/hooks/useInputTextAsNum";
import useQuoterContext from "@/hooks/useQuoterContext";

export default function EngancheTextInput() {
  const { enganche, minEnganche, maxEnganche, setEnganche } =
    useQuoterContext();

  const { valueString: engancheString, setValueString: setEngancheString } =
    useInputTextAsNum({
      value: enganche,
      setValue: setEnganche,
      minValue: minEnganche,
      maxValue: maxEnganche,
    });
  return (
    <input
      key="enganche-input-box"
      type="currency"
      id="enganche"
      className="enganche-input-box"
      value={engancheString}
      onInput={(ev) => {
        setEngancheString(ev.currentTarget.value);
      }}
    />
  );
}
