import { useRef } from "react";
import useZoom from "../zoom/hooks/useElementZoom";

export default function ExampleBluePirntAndImage() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { zoomIn, zoomOut } = useZoom({ svgRef });

  return (
    <div
      ref={svgRef as any}
      style={{
        margin: "auto",
        width: 600,
        height: 500,
        border: "solid grey 2px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            // backgroundColor: "blue",
            position: "absolute",
          }}
        >
          hola
        </h1>
        <h2
          style={{
            fontSize: "30px",
            // backgroundColor: "green",
          }}
        >
          what
        </h2>
      </div>
    </div>
  );
}
