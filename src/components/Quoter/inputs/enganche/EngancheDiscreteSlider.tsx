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
      focusThumbOnChange={false}
      value={enganche}
      min={minEnganche}
      max={maxEnganche}
      step={step}
      onChange={(val) => {
        setEnganche(val);
      }}
    >
      <SliderTrack>
        <Box position="relative" right={10} />
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>

    // <input
    //   type="range"
    //   value={enganche}
    //   min={minEnganche}
    //   max={maxEnganche}
    //   step={step}
    //   onChange={(ev) => {
    //     setEnganche(ev.currentTarget.valueAsNumber);
    //   }}
    // />
  );
}
