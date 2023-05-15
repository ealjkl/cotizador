import React, { useRef } from "react";
import useZoom from "../zoom/useZoom";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({ onZoomIn, onZoomOut }) => {
  return (
    <ButtonGroup
      display="flex"
      justifyContent="center"
      margin="1em"
      flex="100%"
    >
      <Button onClick={onZoomIn}>Zoom In</Button>
      <Button onClick={onZoomOut}>Zoom Out</Button>
    </ButtonGroup>
  );
};

function ExampleUseZoom() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { zoomIn, zoomOut } = useZoom({ svgRef });

  return (
    <div>
      <svg ref={svgRef} viewBox="0 0 800 600" style={{ border: "1px solid" }}>
        <g>
          <circle cx={400} cy={300} r={200} fill="lightblue" />
        </g>
      </svg>
      <ZoomControls onZoomIn={zoomIn} onZoomOut={zoomOut} />
    </div>
  );
}

export default ExampleUseZoom;
