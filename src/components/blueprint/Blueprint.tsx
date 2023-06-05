"use client";
import Image from "next/image";
import { Lote } from "../Main";
import SVGLot from "./SVGLot";
import AriaMasterPlan from "./AriaMasterPlanSvg";
import { forwardRef, useEffect } from "react";

type Props = {
  data: { [id: string]: Lote };
  onClick?: (ev: React.MouseEvent<Element, MouseEvent>, id: string) => void;
  svgRef?: React.RefObject<SVGSVGElement>;
};

export function Blueprint({ data, onClick, svgRef }: Props) {
  const main = {
    x: 0,
    y: 0,
    width: 594.94,
    height: 381.43,
  };

  const background = {
    x: -81,
    y: -87,
    width: 717,
    // height: 900,
  };

  const margin = {
    top: 30,
    right: 30,
    left: 30,
    bottom: 30,
  };

  const viewBox = {
    x: main.x - margin.left,
    y: main.y - margin.top,
    width: main.width + margin.left + margin.right,
    height: main.height + margin.top + margin.bottom,
  };
  useEffect(() => {
    console.log("svgRef", svgRef);
  }, [svgRef]);

  return (
    <AriaMasterPlan
      ref={svgRef}
      onClick={(ev) => {
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
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   // viewBox="0 0 594.94 381.43"
  //   viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
  //   className="blueprint"
  //   ref={svgRef}
  //   style={{
  //     border: "solid 1px black",
  //   }}
  // >
  //   <g className="blueprint__main-group">
  //     <image
  //       href="blueprint-background.jpg"
  //       x={background.x}
  //       y={background.y}
  //       width={background.width}
  //       // height={background.height}
  //     />
  //     {/* {Object.entries(data).map(([_, pData]) => {
  //       return <SVGLot key={pData.id} pData={pData} onClick={onClick} />;
  //     })} */}
  //   </g>
  // </svg>
}
