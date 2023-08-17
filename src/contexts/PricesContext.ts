import plans, { Plan } from "@/data/plans";
import { createContext } from "react";

const PricesContext = createContext<{ [id: string]: Plan }>(plans);
export default PricesContext;
