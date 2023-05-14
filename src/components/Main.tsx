"use client";
import { Blueprint } from "./Blueprint";
import PannerAndZoomerWrapper from "./PannerAndZoomerWrapper";
import { QuoterSection } from "./Quoter/QuoterSection";
// import styles from "./Main.module.css";
import { createContext, useRef, useState } from "react";
import { useContext } from "react";
import { lotes } from "../utils/lotes";
import Banner from "./Banner";
import Header from "./Header";
import Footer from "./Footer";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import useEnganche from "@/hooks/useEnganche";

export type Lote = {
  available: number;
  area: number;
  number: string;
  id: string;
  points: string;
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
          <div className="blueprint-container">
            <Blueprint
              svgRef={blueprintRef}
              data={lotes}
              onClick={(_, id) => {
                setLote(lotes[id]);
                onOpen();
              }}
            />
            <PannerAndZoomerWrapper svgRef={blueprintRef} />
          </div>

          <QuoterSection onClose={onClose} isOpen={isOpen} />
        </div>
        <Footer />
      </div>
    </LoteContext.Provider>
  );
}
