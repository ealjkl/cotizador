"use client";
import { SvgObject } from "@/utils/getSvg";
import { lotes } from "@/utils/lotes";
import { Button } from "@chakra-ui/react";
import { useRef } from "react";
// import useZoom from "../zoom/hooks/useZoomWithDefaultOnZoomedOutMax";
import useZoom from "../zoom/hooks/useZoom";
import { Blueprint } from "./Blueprint";
import "./ZoomableBlueprint.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fonta"
import {
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  onClick?: (ev: React.MouseEvent<Element, MouseEvent>, id: string) => void;
  temp: any;
  svgObject: SvgObject;
};

export default function ZoomableBlueprint(props: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { zoomIn, zoomOut } = useZoom({ svgRef });

  return (
    <div className="blueprint-container">
      <div className="blueprint-group">
        <Blueprint
          svgObject={props.svgObject}
          svgRef={svgRef}
          onClick={props.onClick}
          data={lotes}
        />
        <div className="blueprint__zoom-button-group">
          <button
            onClick={zoomIn}
            className="blueprint__zoom-in-button blueprint__zoom-button"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlassPlus}
              size="2x"
              className="zoom-in-icon fa-regular"
            />
          </button>
          <button
            onClick={zoomOut}
            className="blueprint__zoom-out-button blueprint__zoom-button"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlassMinus}
              className="fa-regular"
              size="2x"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
