import { customCreateSvgElementFromObject } from "@/utils/customCreateSvgElementFromObject";
import getLots from "@/utils/getLot";
import React, { forwardRef } from "react";
import svg from "../../data/aria-masterplan.json";
import { createSvgElementFromObject } from "../../utils/createSvgElementFromObject";

type Props = {
  ref?: React.RefObject<SVGSVGElement>;
  onClick?: (ev: React.MouseEvent<Element, MouseEvent>, id: string) => void;
};

const main = {
  x: 0,
  y: 0,
  width: 560.86,
  height: 228.67,
};

const background = {
  x: -44,
  y: -125,
  width: 790,
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

svg.attributes.viewBox = `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`;

// const lotsOb = await getLots();

const AriaMasterPlan = forwardRef<SVGSVGElement, Props>((props, ref) => {
  return customCreateSvgElementFromObject(
    svg,
    {
      onClick: props.onClick,
      ref,
    },
    <image
      href="aria/blueprint/aria-masterplan-background.png"
      x={background.x}
      y={background.y}
      width={background.width}
    />
  );
});

AriaMasterPlan.displayName = "AriaMasterPlan";
export default AriaMasterPlan;
