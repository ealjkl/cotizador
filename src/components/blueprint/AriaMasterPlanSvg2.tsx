import React, {
  useState,
  useEffect,
  useRef,
  ElementRef,
  RefObject,
  useLayoutEffect,
} from "react";
import svgJson from "../../data/aria-masterplan.json";
import { parseSync } from "svgson";
import * as svgson from "svgson";
import getSvg from "@/utils/getSvg";
import { Lote } from "../Main";

// const svgJsonString = JSON.stringify(svgJson);

type Props = {
  onClick: (ev: Event | React.MouseEvent) => void;
  svgRef?: React.RefObject<ElementRef<"svg">>;
  lots: {
    [id: string]: Lote;
  };
};

export default function AriaMasterPlan({ svgRef, lots, onClick }: Props) {
  const svgJson = getSvg(lots);
  const divRef = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    const svgEl = divRef.current!.querySelector(
      ":scope > svg"
    ) as SVGSVGElement;

    if (svgEl && svgRef) {
      (svgRef.current as any) = svgEl;
    }
  }, [svgRef]);

  useEffect(() => {
    const svgEl = divRef.current!.querySelector(
      ":scope > svg"
    ) as SVGSVGElement;

    if (svgEl && svgRef) {
      (svgRef.current as any) = svgEl;
    }

    const handleSvgClick = (ev: Event) => {
      onClick(ev as any); // Typecast as necessary
    };

    svgEl?.addEventListener("click", handleSvgClick);

    return () => {
      removeEventListener("click", handleSvgClick);
    };
  }, [onClick, svgRef]);

  const svgString = svgson.stringify(svgJson as svgson.INode);
  return <div ref={divRef} dangerouslySetInnerHTML={{ __html: svgString }} />;
}
