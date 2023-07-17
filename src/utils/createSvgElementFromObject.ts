import React, { ReactElement } from "react";

export function createSvgElementFromObject(
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
    before,
    ...svgOb.children.map((child: any) => createSvgElementFromObject(child)),
    after
  );
}
