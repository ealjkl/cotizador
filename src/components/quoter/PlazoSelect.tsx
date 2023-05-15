import useQuoterContext from "@/hooks/useQuoterContext";

type Props = {};

export default function PlazoSelect({}: Props) {
  const { plazo, setPlazo } = useQuoterContext();
  return (
    <div className="plazo-select-container">
      <select
        value={plazo}
        name="no-mensualidades"
        id="no-mensualidades"
        onChange={(ev) => {
          setPlazo(parseInt(ev.currentTarget.value));
        }}
        className="plazo-select-input"
      >
        <option value="36">36 meses</option>
        <option value="48">48 meses</option>
        <option value="72">72 meses</option>
      </select>
    </div>
  );
}
