import { usePlans } from "@/contexts/PricesContext";
import usePlanQuoter from "@/hooks/usePlan";
import useQuoterContext from "@/hooks/useQuoterContext";
import { Select } from "@chakra-ui/react";

type Props = {};

export default function PlanSelect({}: Props) {
  // const { plazo, setPlazo } = useQuoterContext();
  const { setPlanKind, planKind } = useQuoterContext();
  const plans = usePlans();
  return (
    <div className="plazo-select-container">
      <Select
        borderColor={"black"}
        // variant="flushed"
        // value={plazo}
        name="no-mensualidades"
        id="no-mensualidades"
        onChange={(ev) => {
          const value = ev.currentTarget.value;
          setPlanKind(value as any);
        }}
        focusBorderColor="black"
        sx={{
          border: "1px solid black",
        }}
        // colorScheme={"whatsapp"}
        className="plazo-select-input"
      >
        {Object.entries(plans).map(([planKind, plan]) => (
          <option key={planKind} value={planKind}>
            {(plan as any).plan}
          </option>
        ))}
        {/* <option value="24-meses">24 meses</option>
        <option value="12-meses">12 meses</option>
        <option value="contado">Contado</option>
        <option value="constructorPlan">Constructor</option> */}
      </Select>
    </div>
  );
}
