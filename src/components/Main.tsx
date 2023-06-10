"use client";
import { QuoterSection } from "./quoter/QuoterSection";
import { createContext, useRef, useState } from "react";
import { lotes } from "../utils/lotes";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import { useDisclosure } from "@chakra-ui/react";
import useEnganche from "@/hooks/useEnganche";
import ZoomableBlueprint from "./blueprint/ZoomableBlueprint";

export type Lote = {
  available: number;
  area: number;
  number: string;
  id: string;
};

export const LoteContext = createContext<{
  current: Lote | null;
  lotes: typeof lotes;
  priceM2: number;
}>({ current: null, lotes, priceM2: 19_000 });
export default function Main() {
  const [lote, setLote] = useState<Lote | null>(null);
  const blueprintRef = useRef<SVGSVGElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const precioBase = 399100000705020;
  const { enganche, enganchePercentage, setEnganche, setEnganchePercentage } =
    useEnganche({
      engancheInicialPercentage: 20,
      precioBase,
    });

  return (
    <LoteContext.Provider value={{ current: lote, lotes, priceM2: 19_000 }}>
      <div className="footer-layout-container">
        <div className="layout-container">
          <Header />
          <Banner />
          <ZoomableBlueprint
            onClick={(ev, id) => {
              ev.stopPropagation();
              if (lotes[id].available == 1) {
                setLote(lotes[id]);
                onOpen();
              }
            }}
          />

          {/* <ExampleUseZoom /> */}
          {/* <ExampleBluePirntAndImage /> */}
          <QuoterSection onClose={onClose} isOpen={isOpen} />
          {/* <PDFPreviewer url="sample.pdf" /> */}
        </div>
        <Footer />
      </div>
    </LoteContext.Provider>
  );
}
