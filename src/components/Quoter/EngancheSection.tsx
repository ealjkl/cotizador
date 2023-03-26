import EngancheSelect from "./EngancheSelect";

type Props = {
  total: number;
  enganche: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  minEnganchePercentage?: number;
  maxEnganchePercentage?: number;
  setEnganche?: (value: React.SetStateAction<number>) => void;
};

export default function EngancheSection({
  onChange,
  enganche,
  total,
  setEnganche,
  minEnganchePercentage = 10,
  maxEnganchePercentage = 100,
}: Props) {
  const minEngancheValue = Math.floor((minEnganchePercentage * total) / 100);
  const maxEngancheValue = Math.ceil((maxEnganchePercentage * total) / 100);
  let displayedEnganche = enganche;
  if (Number.isNaN(enganche)) {
    displayedEnganche = minEngancheValue;
  } else if (enganche < minEngancheValue) {
    displayedEnganche = minEngancheValue;
  } else if (enganche > maxEngancheValue) {
    displayedEnganche = maxEngancheValue;
  }
  Number.isNaN(enganche) || 0 < minEngancheValue ? minEngancheValue : enganche;
  return (
    <div className="enganche-input-container">
      <label htmlFor="enganche" className="quoter__enganche-label">
        Enganche
      </label>
      {/* <EngancheSelect
        onChange={onChange}
        // onChange={(ev) => { if (ev.currentTarget.value === "other") {
        //     setOtherEnganche(true);
        //   } else {
        //     setOtherEnganche(false);
        //     setEnganche(parseInt(ev.currentTarget.value));
        //   }
        // }}
      /> */}
      <input
        type="number"
        value={Number.isNaN(enganche) ? "" : enganche}
        onChange={(ev) => {
          if (!setEnganche) return;
          let val = parseInt(ev.currentTarget.value);
          setEnganche(val);
        }}
      />
      <input
        type="range"
        min={minEngancheValue}
        max={maxEngancheValue}
        value={Number.isNaN(enganche) ? "" : enganche}
        onChange={(ev) => {
          if (!setEnganche) return;
          let val = parseInt(ev.currentTarget.value);
          setEnganche(val);
        }}
      />
      <p>enganche {displayedEnganche}</p>

      <p>{Math.floor((displayedEnganche / total) * 100)}</p>
    </div>
  );
}
