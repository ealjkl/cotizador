//TODO: THIS DOESN'T WORK YET
"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { ZoomBehavior } from "d3";

interface Args {
  svgRef: React.RefObject<SVGSVGElement>;
  step?: number;
}

//Maybe move this functionality into a hook
export default function useZoom({ svgRef, step = 1.8 }: Args) {
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
  const defaultTouchmoveStartedRef = useRef(false);
  const zoomTouchmoveStartedRef = useRef(false);

  // const step = 1.8;

  useEffect(() => {
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
      // console.log(_event.type);
      defaultTouchmoveStartedRef.current! = false;
      zoomTouchmoveStartedRef.current! = false;
    }

    function onTouchStart(event: TouchEvent) {
      console.log(event.type);
      const { k, x: tX, y: tY } = d3.zoomTransform(svgSel.node() as any);
      prevPosRef.current!.x = event.touches[0].clientX;
      prevPosRef.current!.y = event.touches[0].clientY;
      isBorderRef.current!.top = -tY < threshold;
      isBorderRef.current!.bottom =
        Math.abs(height * k - height + tY) < threshold;
      isBorderRef.current!.left = -tX < threshold;
      isBorderRef.current!.right = width * k - width + tX < threshold;
    }

    zoom.on("zoom", handleZoom).filter((event: Event) => {
      //returning true means that it will preventDefault
      const _event = event as TouchEvent;
      if (event.type == "touchmove") {
        // console.log(event.type);
        const touches = _event.touches;
        if (defaultTouchmoveStartedRef.current) {
          //if thee touch already started (meaning default wasn't prevented) it cannot be cancelled
          return false;
        }
        if (zoomTouchmoveStartedRef.current) {
          return true;
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

        console.log(isHorizontal ? "Horizontal" : "Veretical");
        if (left && isHorizontal && deltaX >= 0) {
          shouldFilter = false;
          defaultTouchmoveStartedRef.current = true;
        } else if (right && isHorizontal && deltaX < 0) {
          shouldFilter = false;
          defaultTouchmoveStartedRef.current = true;
        } else if (top && isVertical && deltaY >= 0) {
          shouldFilter = false;
          defaultTouchmoveStartedRef.current = true;
        } else if (bottom && isVertical && deltaY < 0) {
          shouldFilter = false;
          defaultTouchmoveStartedRef.current = true;
        } else {
          zoomTouchmoveStartedRef.current = true;
        }

        return shouldFilter;
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
      svgSel.node()!.removeEventListener("touchend", onTouchEnd);
      svgSel.node()!.removeEventListener("touchcancel", onTouchEnd);
      svgSel.node()!.removeEventListener("touchstart", onTouchStart);
    };
  }, [svgRef, step]);

  return {
    zoomRef,
    prevPosRef,
    touchmoveState: {
      defaultTouchmoveStartedRef,
      zoomTouchmoveStartedRef,
    },
    isBorderRef,
  };
}