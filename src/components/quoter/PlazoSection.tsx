import useQuoterContext from "@/hooks/useQuoterContext";
import PlanSelect from "./inputs/plan/PlanSelect";
import PlazoSelect from "./inputs/plazo/PlazoSelect";

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
