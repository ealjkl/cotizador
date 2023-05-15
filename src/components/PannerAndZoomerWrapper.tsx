"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

interface Props {
  svgRef: React.RefObject<SVGSVGElement>;
}

//Maybe move this functionality into a hook
export default function PannerAndZoomerWrapper({ svgRef }: Props) {
  const zoomRef = useRef<{ zoom: ZoomBehavior<Element, unknown> | null }>({
    zoom: null,
  });
  const prevPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isBorderRef = useRef<{
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
  }>({
    top: false,
    bottom: false,
    left: false,
    right: false,
  });
  const touchmoveStarted = useRef<boolean>(false);
  const step = 1.8;

  useEffect(() => {
    // const { width, height } = svgRef.current!.getBoundingClientRect();
    const svgSel = d3.select(svgRef.current);
    const gSel = svgSel.select(":scope > g");
    const { x, y, width, height } = svgRef.current!.viewBox.baseVal;
    const threshold = 20;

    const zoom = d3
      .zoom()
      .scaleExtent([1, step * step])
      .translateExtent([
        [x, y],
        [width, height],
      ]);

    zoomRef.current!.zoom = zoom;

    function handleZoom(e: d3.D3ZoomEvent<SVGElement, any>) {
      gSel.attr("transform", e.transform.toString());
    }

    function onTouchEnd(_event: TouchEvent) {
      touchmoveStarted.current! = false;
      console.log("touchevent", _event.type);
    }

    function onTouchStart(event: TouchEvent) {
      console.log("hey bro");
      const { k, x: tX, y: tY } = d3.zoomTransform(svgSel.node() as any);
      prevPosRef.current!.x = event.touches[0].clientX;
      prevPosRef.current!.y = event.touches[0].clientY;
      isBorderRef.current!.top = -tY < threshold;
      isBorderRef.current!.bottom =
        Math.abs(height * k - height + tY) < threshold;
      isBorderRef.current!.left = -tX < threshold;
      isBorderRef.current!.right = width * k - width + tX < threshold;
    }

    zoom.on("zoom", handleZoom).filter((event, datum) => {
      if (event.type == "touchstart" || event.type == "touchmove") {
        const _event = event as TouchEvent;
        const [[x, y], [width, height]] = zoom.translateExtent();

        if (event.type == "touchmove") {
          const touches = _event.touches;
          if (touchmoveStarted.current) {
            return false;
          }
          if (touches.length > 1 || _event.shiftKey) {
            return true;
          }
          let currX = touches[0].clientX;
          let currY = touches[0].clientY;
          let prevX = prevPosRef.current!.x;
          let prevY = prevPosRef.current!.y;
          const deltaX = currX - prevX;
          const deltaY = currY - prevY;
          const isVertical = Math.abs(deltaY) >= Math.abs(deltaX);
          const isHorizontal = !isVertical;
          let shouldFilter = true;
          const { top, bottom, left, right } = isBorderRef.current!;

          if (left && isHorizontal && deltaX >= 0) {
            shouldFilter = false;
            touchmoveStarted.current! = true;
          } else if (right && isHorizontal && deltaX < 0) {
            shouldFilter = false;
            touchmoveStarted.current! = true;
          } else if (top && isVertical && deltaY >= 0) {
            shouldFilter = false;
            touchmoveStarted.current! = true;
          } else if (bottom && isVertical && deltaY < 0) {
            shouldFilter = false;
            touchmoveStarted.current! = true;
          }

          prevPosRef.current!.x = currX;
          prevPosRef.current!.y = currY;
          return shouldFilter;
        }
      }
      return true;
    });

    //I don't know why I had to do this instead of just doing svgSel.on("touchend") or "touchended"

    svgSel.node()!.addEventListener("touchstart", onTouchStart);
    svgSel.node()!.addEventListener("touchend", onTouchEnd);
    svgSel.node()!.addEventListener("touchcancel", onTouchEnd);

    svgSel.call(zoom as any);

    return () => {
      svgSel.on(".zoom", null);
      svgSel.node()!.removeEventListener("touchend", onTouchEnd, true);
      svgSel.node()!.removeEventListener("touchcancel", onTouchEnd, true);
      svgSel.node()!.removeEventListener("touchstart", onTouchStart, true);
    };
  }, [svgRef]);

  function handleZoomIn() {
    if (zoomRef.current?.zoom) {
      d3.select(svgRef.current)
        .transition()
        .duration(500)
        .call(zoomRef.current.zoom.scaleBy as any, step);
    }
  }

  function handleZoomOut() {
    if (zoomRef.current?.zoom) {
      d3.select(svgRef.current)
        .transition()
        .duration(500)
        .call(zoomRef.current.zoom.scaleBy as any, 1 / step);
    }
  }

  return (
    <ButtonGroup
      display="flex"
      justifyContent="center"
      margin="1em"
      flex="100%"
    >
      <Button onClick={handleZoomIn}>Zoom In</Button>
      <Button onClick={handleZoomOut}>Zoom Out</Button>
    </ButtonGroup>
  );
}
