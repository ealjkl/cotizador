"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3";

interface Props {
  width: number;
  height: number;
  svgRef: React.RefObject<SVGSVGElement>;
}

function handleZoom(e: any) {
  d3.select("g").attr("transform", e.transform);
}

export default function PannerAndZoomerWrapper({
  width,
  height,
  svgRef,
}: Props) {
  // const zoomRef = useRef<{ zoom: ZoomBehavior<Element, unknown> }>(null);
  const zoom = d3
    .zoom()
    .scaleExtent([1, 3])
    .translateExtent([
      [0, 0],
      [width, height],
    ]);

  useEffect(() => {
    zoom.on("zoom", handleZoom);
    d3.select(svgRef.current).call(zoom as any);
  }, [zoom, svgRef]);

  function handleZoomIn() {
    d3.select(svgRef.current).call(zoom.scaleBy as any, 1.5);
  }
  function handleZoomOut() {
    d3.select(svgRef.current).call(zoom.scaleBy as any, 1 / 1.5);
  }
  return (
    <div className="PannerAndZoomerWrapper" style={{ width, height }}>
      <div>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
}
