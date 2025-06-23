import { useInputTextAsNum } from "@/hooks/useInputTextAsNum";
import useQuoterContext from "@/hooks/useQuoterContext";
import {
  CheckboxIcon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { NumericFormat } from "react-number-format";

export default function EngancheCurrencyInput() {
  const { enganche, minEnganche, maxEnganche, setEnganche, pagoTotal } =
    useQuoterContext();

  const { valueString: engancheString, setValueString: setEngancheString } =
    useInputTextAsNum({
      value: enganche,
      setValue: setEnganche,
      minValue: minEnganche,
      maxValue: maxEnganche,
    });

  const isDisabled = Number.isNaN(pagoTotal);
  return (
    <>
      {/* <InputGroup>
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
        /> */}
      <NumericFormat
        value={engancheString}
        onInput={(e: any) => {
          const val = e.currentTarget.value as string;
          const parsedValue = val.replaceAll(",", "");
          setEngancheString(parsedValue);
        }}
        allowLeadingZeros
        thousandSeparator=","
        customInput={CustomInput}
      />
      {/* </InputGroup> */}
    </>
  );
}

function CustomInput(props: any) {
  const { pagoTotal } = useQuoterContext();
  const isDisabled = Number.isNaN(pagoTotal);
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        fontSize="1.6rem"
        sx={{
          color: isDisabled ? "var(--disabled-input)" : undefined,
          padding: "0",
          margin: "0",
          bottom: "0",
          top: "",
        }}
      >
        $
      </InputLeftElement>
      <Input
        isDisabled={isDisabled}
        {...props}
        key="enganche-input-box"
        type="currency"
        id="enganche"
        className={"enganche-input-box" + " " + (isDisabled ? "disabled" : "")}
        // value={engancheString}
        // onInput={(ev) => {
        //   setEngancheString(ev.currentTarget.value);
        // }}
        focusBorderColor="transparent"
        sx={{
          borderRadius: 0,
          outline: "none",
          "&:hover": {
            borderColor: isDisabled ? null : "var(--highlight-input)",
          },
          "&:focus": {
            outline: "none",
          },
        }}
      />
    </InputGroup>
  );
}
