"use client";
import { SvgObject } from "@/utils/getSvg";
import { lotes } from "@/utils/lotes";
import { Button } from "@chakra-ui/react";
import { useRef } from "react";
// import useZoom from "../zoom/hooks/useZoomWithDefaultOnZoomedOutMax";
import useZoom from "../zoom/hooks/useZoom";
import { Blueprint } from "./Blueprint";

type Props = {
  onClick?: (ev: React.MouseEvent<Element, MouseEvent>, id: string) => void;
  temp: any;
  svgObject: SvgObject;
};

export default function ZoomableBlueprint(props: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { zoomIn, zoomOut } = useZoom({ svgRef });

  return (
    <>
      <div className="blueprint-container">
        <Blueprint
          svgObject={props.svgObject}
          svgRef={svgRef}
          onClick={props.onClick}
          data={lotes}
        />
      </div>
      <Button onClick={zoomIn}>Zoom In</Button>
      <Button onClick={zoomOut}>Zoom Out</Button>
    </>
  );
}
