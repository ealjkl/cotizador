import React, { ReactElement } from "react";
import svg from "../../compiled/aria-masterplan.json";

export function renderSvgFromObject(svgOb: any): ReactElement {
  return React.createElement(svg.name, {
    ...svg.attributes
  },
  ...svg.children.map(child => renderSvgFromObject(child))
  )
}






export const AriaMasterPlan: React.FC = () =>  {
  return renderSvgFromObject(svg);
}