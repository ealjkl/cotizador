import React, { useCallback, useEffect, useState } from "react";

const baseErrors = {
  valLTMinError: new Error("Value less than min"),
  valGTMaxError: new Error("Value greater than min"),
};

export function useInputTextAsNum({
  value,
  minValue = -Infinity,
  maxValue = Infinity,
  setValue,
  round = true,
}: {
  value: number;
  minValue?: number;
  maxValue?: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  round?: boolean;
}) {
  const [valueString, setValueStringInner] = useState<string>(String(value));
  const [valLTMinError, setValLTMinError] = useState<Error | null>(null);
  const [valGTMaxError, setValGTMaxError] = useState<Error | null>(null);

  const [shouldStringValChange, setShouldStringValChange] = useState(true);

  const errors = {
    valLTMinError,
    valGTMaxError,
  };

  const setValueString = useCallback(
    (newValueString: string) => {
      setValueStringInner(newValueString);
      const newValue = parseFloat(newValueString);

      if (Number.isNaN(newValue)) {
        return;
      }
      setShouldStringValChange(false);

      if (newValue < minValue) {
        setValLTMinError(baseErrors.valLTMinError);
        setValue(minValue);
        return;
      }

      if (newValue > maxValue) {
        setValGTMaxError(baseErrors.valGTMaxError);
        setValue(maxValue);
        return;
      }
      setValue(newValue);
    },
    [setValue, minValue, maxValue]
  );

  useEffect(() => {
    let newValue = value;
    if (round) {
      newValue = Math.round(value);
    }
    if (shouldStringValChange) {
      setValueStringInner(String(newValue));
    }
    setShouldStringValChange(true);
  }, [value]); // eslint-disable-line

  return {
    valueString,
    setValueString,
    errors,
  };
}
