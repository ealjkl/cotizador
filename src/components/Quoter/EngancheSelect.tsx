type Props = {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
};

export default function EngancheSelect({ onChange }: Props) {
  return (
    <select name="enganche" id="enganche" onChange={onChange}>
      <option value="10">10%</option>
      <option value="20">20%</option>
      <option value="30">30%</option>
      <option value="100">100%</option>
      <option value="other">Otro</option>
    </select>
  );
}
