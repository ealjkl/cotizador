"use client";
import { SvgObject } from "@/utils/getSvg";
import { Button } from "@chakra-ui/react";
import React, { RefObject, useRef, useState } from "react";
// import useZoom from "../zoom/hooks/useZoomWithDefaultOnZoomedOutMax";
import useZoom from "../zoom/hooks/useZoom";
import { Blueprint } from "./Blueprint";
import "./ZoomableBlueprint.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fonta"
import {
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { Lote } from "../Main";
import { addTextsFn, removeTextsFn } from "./utils";

type Props = {
  onClick?: (ev: React.MouseEvent<Element, MouseEvent>, id: string) => void;
  lots: {
    [id: string]: Lote;
  };
  // svgObject: SvgObject;
};

function ZoomableBlueprintComponent(props: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { zoomIn, zoomOut } = useZoom({ svgRef });

  return (
    <div className="blueprint-container">
      <div className="blueprint-group">
        <Blueprint lots={props.lots} svgRef={svgRef} onClick={props.onClick} />
        <div className="blueprint__zoom-button-group">
          <NumbersButton svgRef={svgRef} />
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

const ZoomableBlueprint = React.memo(ZoomableBlueprintComponent);

export default ZoomableBlueprint;

type NumbersButtonProps = {
  svgRef: RefObject<SVGSVGElement>;
};

function NumbersButton(props: NumbersButtonProps) {
  const [active, setActive] = useState(false);
  return (
    <button
      className="blueprint__zoom-button"
      onClick={() => {
        if (!active) {
          addTextsFn(props.svgRef!);
        } else {
          removeTextsFn();
        }
        setActive(!active);
      }}
    >
      <FontAwesomeIcon
        icon={faHashtag}
        size="2x"
        className="zoom-in-icon fa-regular"
      />
    </button>
  );
}
