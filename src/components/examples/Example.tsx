"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3";

interface MapProps {
  width: number;
  height: number;
}

function handleZoom(e: any) {
  d3.select(".map-group").attr("transform", e.transform);
}

const Map: React.FC<MapProps> = ({ width, height }) => {
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
    d3.select("svg").call(zoom as any);
  });

  function handleZoomIn() {
    d3.select("svg").call(zoom.scaleBy as any, 1.5);
  }
  function handleZoomOut() {
    d3.select("svg").call(zoom.scaleBy as any, 1 / 1.5);
  }
  return (
    <div style={{ width, height }}>
      <svg viewBox="0 0 400 400">
        <g>
          <rect x="0" y="0" width="400" height="400" fill="#f2f2f2" />
          <rect x="100" y="100" width="200" height="200" fill="#ccc" />
          {/* <rect x="150" y="150" width="100" height="100" fill="#aaa" /> */}
        </g>
      </svg>

      <div>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default Map;
