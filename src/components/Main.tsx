"use client";
import { Blueprint } from "./Blueprint";
import PannerAndZoomerWrapper from "./PannerAndZoomerWrapper";
import { Quoter } from "./Quoter";
// import styles from "./Main.module.css";
import { createContext, useRef, useState } from "react";
import { useContext } from "react";
import { lotes } from "../utils/lotes";

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
  const [quoterVisible, setQuoterVisible] = useState<boolean>(false);
  const blueprintRef = useRef<SVGSVGElement>(null);

  return (
    <LoteContext.Provider value={{ current: lote, lotes, priceM2: 19_000 }}>
      <div className="layout-container">
        <div className="blueprint-container">
          <Blueprint
            svgRef={blueprintRef}
            data={lotes}
            onClick={(_, id) => {
              setLote(lotes[id]);
              setQuoterVisible(true);
            }}
          />
          <PannerAndZoomerWrapper svgRef={blueprintRef} />
        </div>
        {quoterVisible ? (
          <div
            className="quoter-container"
            onClick={(ev) => {
              if (ev.target == ev.currentTarget) {
                setQuoterVisible(false);
              }
            }}
          >
            <Quoter
              onQuoterClose={() => {
                setQuoterVisible(false);
              }}
            />
          </div>
        ) : null}
      </div>
    </LoteContext.Provider>
  );
}
