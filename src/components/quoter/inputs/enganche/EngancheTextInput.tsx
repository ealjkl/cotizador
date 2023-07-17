import { useInputTextAsNum } from "@/hooks/useInputTextAsNum";
import useQuoterContext from "@/hooks/useQuoterContext";
import {
  CheckboxIcon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

export default function EngancheTextInput() {
  const { enganche, minEnganche, maxEnganche, setEnganche } =
    useQuoterContext();

  const { valueString: engancheString, setValueString: setEngancheString } =
    useInputTextAsNum({
      value: enganche,
      setValue: setEnganche,
      minValue: minEnganche,
      maxValue: maxEnganche,
    });
  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          fontSize="1.6rem"
          sx={{
            padding: "0",
            margin: "0",
            bottom: "0",
            top: "",
          }}
        >
          $
        </InputLeftElement>
        <Input
          key="enganche-input-box"
          type="currency"
          id="enganche"
          className="enganche-input-box"
          value={engancheString}
          onInput={(ev) => {
            setEngancheString(ev.currentTarget.value);
          }}
          focusBorderColor="transparent"
          sx={{
            borderRadius: 0,
            outline: "none",
            "&:hover": {
              borderColor: "var(--highlight-input)",
            },
            "&:focus": {
              outline: "none",
            },
          }}
        />
      </InputGroup>
    </>
  );
}
