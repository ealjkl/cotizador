type Props = {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function PlazoSelect({ onChange }: Props) {
  return (
    <div className="plazo-select-container">
      <select
        name="no-mensualidades"
        id="no-mensualidades"
        onChange={onChange}
        className="plazo-select-input"
      >
        <option value="36">36 meses</option>
        <option value="48">48 meses</option>
        <option value="72">72 meses</option>
      </select>
    </div>
  );
}
