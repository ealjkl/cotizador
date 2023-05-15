"use client";
import React, { useRef, useState } from "react";

interface MapProps {
  width: number;
  height: number;
}

const Map: React.FC<MapProps> = ({ width, height }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [scale, setScale] = useState<number>(1);
  const [translateX, setTranslateX] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);

  const handleZoomIn = () => {
    setScale(scale * 1.2);
  };

  const handleZoomOut = () => {
    setScale(scale / 1.2);
  };

  const handleMouseDown = (event: React.MouseEvent<SVGSVGElement>) => {
    const start = { x: event.clientX, y: event.clientY };
    const startTranslateX = translateX;
    const startTranslateY = translateY;

    const handleMouseMove = (event: MouseEvent) => {
      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      setTranslateX(startTranslateX + dx / scale);
      setTranslateY(startTranslateY + dy / scale);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="map-container" style={{ width, height }}>
      <svg
        ref={svgRef}
        className="map"
        viewBox="0 0 800 800"
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        }}
      >
        <rect x="0" y="0" width="800" height="800" fill="#f2f2f2" />
        <rect x="200" y="200" width="400" height="400" fill="#ccc" />
        <rect x="300" y="300" width="200" height="200" fill="#aaa" />
      </svg>

      <div>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default Map;
