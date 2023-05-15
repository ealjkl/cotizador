import { createContext } from "react";

export type QuoterContextType = {
  precioBase: number;
  enganche: number;
  enganchePercentage: number;
  // engancheString: string;
  minEnganche: number;
  maxEnganche: number;
  minEnganchePercentage: number;
  maxEnganchePercentage: number;
  plazo: number;
  pagoInicial: number;
  pagoMensualidad: number;
  pagoTotal: number;

  setEnganche: React.Dispatch<React.SetStateAction<number>>;
  setEnganchePercentage: (newEnganchePercentage: number) => void;
  // setEngancheString: React.Dispatch<React.SetStateAction<number>>;
  setPlazo: React.Dispatch<React.SetStateAction<number>>;
};

const QuoterContext = createContext<QuoterContextType | null>(null);
export default QuoterContext;
