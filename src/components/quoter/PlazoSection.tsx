import useQuoterContext from "@/hooks/useQuoterContext";
import PlazoSelect from "./PlazoSelect";

type Props = {};

export default function PlazoSection({}: Props) {
  return (
    <div className="plazo-input-container input-section">
      <label htmlFor="plazo" className="quoter__plazo-label">
        Plazo{" "}
      </label>
      <PlazoSelect />
    </div>
  );
}
