import NoQuoterContextError from "@/errors/NoQuoterContextError";
import { useContext } from "react";
import QuoterContext from "../../QuoterContext";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from "@chakra-ui/react";
import useQuoterContext from "@/hooks/useQuoterContext";

type Props = {
  step?: number;
};

export default function EnganchePercentageDiscreteSlider({
  step = 1,
}: Props = {}) {
  //TODO: see if this is the way to handle the null case, because this should not be used without a context
  const {
    enganchePercentage,
    minEnganchePercentage,
    maxEnganchePercentage,
    setEnganchePercentage,
  } = useQuoterContext();

  return (
    <Slider
      sx={{
        margin: "1em 0",
      }}
      focusThumbOnChange={false}
      value={enganchePercentage}
      min={minEnganchePercentage}
      max={maxEnganchePercentage}
      step={step}
      onChange={(val) => {
        setEnganchePercentage(val);
      }}
    >
      <SliderMark
        value={Math.round(enganchePercentage)}
        sx={{
          borderRadius: "5px",
          paddingX: "3px",
        }}
        textAlign="center"
        bg="var(--secondary-color)"
        color="white"
        mt="5"
        ml="-3"
        w="15"
      >
        {Math.round(enganchePercentage)}%
      </SliderMark>
      <SliderTrack bg="var(--terciary-color)">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="var(--highlight-input)" />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
}
