import { EngancheInicialVar } from "@/hooks/useEnganche";
import useQuoter from "@/hooks/useQuoter";
import React from "react";
import QuoterContext from "./QuoterContext";

type Props = {
  precioBase: number;
  plazoInicial?: number;
  minEnganchePercentage?: number;
  maxEnganchePercentage?: number;
  children: React.ReactNode;
} & EngancheInicialVar;

const Quoter: React.FC<Props> = (input) => {
  const all = useQuoter(input);

  return (
    <QuoterContext.Provider value={all}>
      {input.children}
    </QuoterContext.Provider>
  );
};

export default Quoter;
