"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3";

interface Props {
  svgRef: React.RefObject<SVGSVGElement>;
}

export default function PannerAndZoomerWrapper({ svgRef }: Props) {
  const zoomRef = useRef<{ zoom: ZoomBehavior<Element, unknown> | null }>({
    zoom: null,
  });
  const step = 1.8;

  useEffect(() => {
    // const { width, height } = svgRef.current!.getBoundingClientRect();
    const { x, y, width, height } = svgRef.current!.viewBox.baseVal;
    console.log("width", "height", height, height);

    const zoom = d3
      .zoom()
      .scaleExtent([1, step * step])
      .translateExtent([
        [x, y],
        [width, height],
      ]);

    zoomRef.current!.zoom = zoom;

    function handleZoom(e: any) {
      const g = svgRef.current?.querySelector(":scope > g");
      if (g) {
        d3.select(g).attr("transform", e.transform);
      }
    }
    zoom.on("zoom", handleZoom);
    d3.select(svgRef.current).call(zoom as any);
  }, [svgRef]);

  function handleZoomIn() {
    if (zoomRef.current?.zoom) {
      d3.select(svgRef.current).call(zoomRef.current.zoom.scaleBy as any, step);
    }
  }
  function handleZoomOut() {
    if (zoomRef.current?.zoom) {
      d3.select(svgRef.current).call(
        zoomRef.current.zoom.scaleBy as any,
        1 / step
      );
    }
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
