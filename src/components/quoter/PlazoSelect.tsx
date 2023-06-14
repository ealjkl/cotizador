import useQuoterContext from "@/hooks/useQuoterContext";
import { Select } from "@chakra-ui/react";

type Props = {};

export default function PlazoSelect({}: Props) {
  const { plazo, setPlazo } = useQuoterContext();
  return (
    <div className="plazo-select-container">
      <Select
        borderColor={"black"}
        // variant="flushed"
        value={plazo}
        name="no-mensualidades"
        id="no-mensualidades"
        onChange={(ev) => {
          setPlazo(parseInt(ev.currentTarget.value));
        }}
        focusBorderColor="black"
        // colorScheme={"whatsapp"}
        className="plazo-select-input"
      >
        <option value="36">36 meses</option>
        <option value="48">48 meses</option>
        <option value="72">72 meses</option>
      </Select>
    </div>
  );
}
