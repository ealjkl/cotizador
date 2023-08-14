import React, { ElementRef, useEffect, useRef } from "react";
import { Lote } from "../Main";
import AriaMasterPlan from "./AriaMasterPlanSvg2";
import { SvgObject } from "../../utils/getSvg";

type Props = {
  onClick?: (ev: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
  svgRef?: React.RefObject<ElementRef<"svg">>;
  lots: {
    [id: string]: Lote;
  };
  // svgObject: SvgObject;
};

export function Blueprint({ onClick, svgRef, lots }: Props) {
  return (
    <AriaMasterPlan
      lots={lots}
      // ref={svgRef}
      // svgObject={svgObject}
      svgRef={svgRef}
      onClick={(ev: any) => {
        if (ev.target === ev.currentTarget) {
          return;
        }
        if (!(ev.target as any).dataset.number) {
          return;
        }
        const lotElement = ev.target as Element;
        const id = lotElement.id;

        if (onClick && id != undefined) {
          onClick(ev, id);
        }
      }}
    />
  );
}
