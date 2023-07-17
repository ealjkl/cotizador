import React, { useEffect } from "react";
import { Lote } from "../Main";
import AriaMasterPlan from "./AriaMasterPlanSvg2";
import { SvgObject } from "../../utils/getSvg";

type Props = {
  data: { [id: string]: Lote };
  onClick?: (ev: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
  svgRef?: React.RefObject<SVGSVGElement>;
  svgObject: SvgObject;
};

export function Blueprint({ data, onClick, svgRef, svgObject }: Props) {
  return (
    <AriaMasterPlan
      ref={svgRef}
      svgObject={svgObject}
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
