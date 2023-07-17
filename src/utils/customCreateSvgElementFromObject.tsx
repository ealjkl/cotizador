import React, { ReactElement } from "react";
import { createSvgElementFromObject } from "./createSvgElementFromObject";

export function customCreateSvgElementFromObject(
  svgOb: any,
  extraProps: any = {},
  before: React.ReactNode = null,
  after: React.ReactNode = null
): ReactElement {
  return React.createElement(
    svgOb.name,
    {
      ...svgOb.attributes,
      ...extraProps,
    },
    <g className="blueprint__main-group">
      {before}
      {...svgOb.children.map((child: any) => createSvgElementFromObject(child))}
      {after}
    </g>
  );
}
