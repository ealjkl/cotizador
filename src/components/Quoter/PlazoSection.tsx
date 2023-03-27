import PlazoSelect from "./PlazoSelect";

type Props = {
  plazo: number;
  setPlazo: React.Dispatch<React.SetStateAction<number>>;
};

export default function PlazoSection({ plazo, setPlazo }: Props) {
  return (
    <div className="plazo-input-container input-section">
      <label htmlFor="plazo" className="quoter__plazo-label">
        Plazo{" "}
      </label>
      <PlazoSelect
        onChange={(ev) => {
          setPlazo(parseInt(ev.currentTarget.value));
        }}
      />
    </div>
  );
}
