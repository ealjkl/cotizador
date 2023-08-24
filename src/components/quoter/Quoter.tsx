import { EngancheInicialVar } from "@/hooks/useEnganche";
import useQuoter from "@/hooks/useQuoter";
import React, { useContext, useEffect } from "react";
import { LoteContext } from "../Main";
import QuoterContext from "./QuoterContext";

type Props = {
  m2: number;
  plazoInicial?: number;
  minEnganchePercentageInicial?: number;
  maxEnganchePercentageInicial?: number;
  children: React.ReactNode;
} & EngancheInicialVar;

const Quoter: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const { current: lote } = useContext(LoteContext);
  const all = useQuoter(rest);

  useEffect(() => {
    // if (lote == null) {
    all.setPlanKind("36-meses");
    // }
  }, [lote]);

  return (
    <QuoterContext.Provider value={all}>{children}</QuoterContext.Provider>
  );
};

export default Quoter;
