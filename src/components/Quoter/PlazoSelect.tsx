type Props = {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function PlazoSelect({ onChange }: Props) {
  return (
    <select name="no-mensualidades" id="no-mensualidades" onChange={onChange}>
      <option value="36">36 meses</option>
      <option value="48">48 meses</option>
      <option value="72">72 meses</option>
      <option value="other">Otro</option>
    </select>
  );
}
