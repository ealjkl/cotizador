import { customCreateSvgElementFromObject } from "@/utils/customCreateSvgElementFromObject";
import { SvgObject } from "@/utils/getSvg";
import React, { forwardRef } from "react";
import ariaSvg from "../../data/aria-masterplan.json";

type Props = {
  ref?: React.RefObject<SVGSVGElement>;
  svgObject: SvgObject;
  onClick?: (ev: React.MouseEvent<Element, MouseEvent>, id: string) => void;
};

const main = {
  x: 0,
  y: 0,
  width: 560.86,
  height: 228.67,
};

const background = {
  x: -30,
  y: -40,
  width: 760,
  // height: 900,
};

const margin = {
  top: 50,
  right: 70,
  left: 20,
  bottom: 50,
};

const viewBox = {
  x: main.x - margin.left,
  y: main.y - margin.top,
  width: main.width + margin.left + margin.right,
  height: main.height + margin.top + margin.bottom,
};

const AriaMasterPlan = forwardRef<SVGSVGElement, Props>((props, ref) => {
  //TODO: make all this modifications before
  props.svgObject.attributes.viewBox = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;
  return customCreateSvgElementFromObject(
    props.svgObject,
    {
      onClick: props.onClick,
      ref,
    },
    <image
      href="aria/blueprint/aria-masterplan-background2.png"
      x={background.x}
      y={background.y}
      width={background.width}
    />
  );
});

AriaMasterPlan.displayName = "AriaMasterPlan";
export default AriaMasterPlan;
