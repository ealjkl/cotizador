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

export default function EngancheDiscreteSlider({ step = 1 }: Props = {}) {
  //TODO: see if this is the way to handle the null case, because this should not be used without a context
  const { enganche, minEnganche, maxEnganche, setEnganche } =
    useQuoterContext();
  return (
    <Slider
      sx={{
        margin: "1em 0",
      }}
      focusThumbOnChange={false}
      value={enganche}
      min={minEnganche}
      max={maxEnganche}
      step={step}
      onChange={(val) => {
        setEnganche(val);
      }}
    >
      <SliderTrack bg="var(--terciary-color)">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="var(--highlight-input)" />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
}
