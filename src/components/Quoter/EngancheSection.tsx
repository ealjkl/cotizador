import EngancheSelect from "./EngancheSelect";

type Props = {
  total: number;
  enganche: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  minEnganchePercentage?: number;
  maxEnganchePercentage?: number;
};

export default function EngancheSection({
  onChange,
  enganche,
  total,
  minEnganchePercentage = 10,
  maxEnganchePercentage = 100,
}: Props) {
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
        onChange={onChange}
      />
      <input
        type="range"
        min={minEnganchePercentage}
        max={maxEnganchePercentage}
        value={Number.isNaN(enganche) ? "" : enganche}
        onChange={onChange}
      />
      <p>{total}</p>
      <p>{enganche}</p>
      <p>{Math.floor((enganche / total) * 100)}</p>
    </div>
  );
}
