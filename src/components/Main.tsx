"use client";
import { QuoterSection } from "./quoter/QuoterSection";
import React, { createContext, useCallback, useRef, useState } from "react";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import { useDisclosure } from "@chakra-ui/react";
import useEnganche from "@/hooks/useEnganche";
import ZoomableBlueprint from "./blueprint/ZoomableBlueprint";
import { SvgObject } from "@/utils/getSvg";
import PlansContext from "../contexts/PricesContext";
import { Plan } from "@/data/plans";

export type Lote = {
  available: number;
  area: number;
  number: string;
  id: string;
};

export const LoteContext = createContext<{
  current: Lote | null;
  lotes: { [lotId: string]: Lote } | null;
  priceM2: number;
}>({ current: null, lotes: null, priceM2: 19_000 });

type Props = {
  // svgObject: SvgObject;
  lotes: { [lotId: string]: Lote };
  prices: { [id: string]: Plan };
};
export default function Main(props: Props) {
  const [lote, setLote] = useState<Lote | null>(null);
  // const blueprintRef = useRef<SVGSVGElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const precioBase = 399100000705020;
  // const { enganche, enganchePercentage, setEnganche, setEnganchePercentage } =
  //   useEnganche({
  //     engancheInicialPercentage: 20,
  //     precioBase,
  //   });

  const lotes = props.lotes;
  const handleClickLote = useCallback(
    (ev: React.MouseEvent<Element, MouseEvent>, id: string) => {
      ev.stopPropagation();
      if (lotes[id].available == 1) {
        setLote(lotes[id]);
        onOpen();
      }
    },
    [lotes]
  );

  return (
    <LoteContext.Provider
      value={{ current: lote, lotes: props.lotes, priceM2: 19_000 }}
    >
      <PlansContext.Provider value={props.prices}>
        <div className="footer-layout-container">
          <div className="layout-container">
            <Header />
            <Banner />
            <ZoomableBlueprint
              lots={props.lotes}
              // svgObject={props.svgObject}
              onClick={handleClickLote}
            />

            {/* <ExampleUseZoom /> */}
            {/* <ExampleBluePirntAndImage /> */}
            <QuoterSection onClose={onClose} isOpen={isOpen} />
            {/* <PDFPreviewer url="sample.pdf" /> */}
          </div>
          <Footer />
        </div>
      </PlansContext.Provider>
    </LoteContext.Provider>
  );
}
