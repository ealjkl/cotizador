"use client";
import { useRef } from "react";
import PannerAndZoomerWrapper from "./PannerAndZoomerWrapper";

export default function ExampleZoomerPanner() {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div style={{ width: 400, height: 400 }}>
      <svg className="map" viewBox="0 0 400 400" ref={svgRef}>
        <g className="map-group">
          <rect x="0" y="0" width="400" height="400" fill="#f2f2f2" />
          <rect x="100" y="100" width="200" height="200" fill="#ccc" />
          <rect x="150" y="150" width="100" height="100" fill="#aaa" />
        </g>
      </svg>

      <PannerAndZoomerWrapper height={400} width={400} svgRef={svgRef} />
    </div>
  );
}
