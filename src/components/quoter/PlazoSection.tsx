import PlanSelect from "./inputs/plan/PlanSelect";

type Props = {};

export default function PlazoSection({}: Props) {
  return (
    <div className="plazo-input-container input-section">
      <label htmlFor="plazo" className="quoter__plazo-label">
        Plan
      </label>
      <PlanSelect />
    </div>
  );
}
