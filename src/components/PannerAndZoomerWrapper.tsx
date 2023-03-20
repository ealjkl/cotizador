"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3";

interface Props {
  svgRef: React.RefObject<SVGSVGElement>;
}

export default function PannerAndZoomerWrapper({ svgRef }: Props) {
  let zoom: ZoomBehavior<Element, unknown>;

  const width = svgRef.current?.clientWidth ?? 1000;
  const height = svgRef.current?.clientHeight ?? 1000;

  zoom = d3
    .zoom()
    .scaleExtent([1, 3])
    .translateExtent([
      [0, 0],
      [width, height],
    ]);

  useEffect(() => {}, []);

  useEffect(() => {
    console.log("ref", svgRef);

    function handleZoom(e: any) {
      const g = svgRef.current?.querySelector(":scope > g");
      if (g) {
        d3.select(g).attr("transform", e.transform);
      }
    }
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
    <div className="PannerAndZoomerWrapper">
      <div>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
}
