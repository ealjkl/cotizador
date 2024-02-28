import { Plan } from "@/data/plans";
import { createContext, useContext } from "react";

const PlansContext = createContext<{ [id: string]: Plan } | null>(null);

export function usePlans() {
  const plans = useContext(PlansContext)
  if (!plans) {
    throw new Error("Prices is null in this context");
  }
  return plans;
}

export default PlansContext;
