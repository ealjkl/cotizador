import QuoterContext from "@/components/Quoter/QuoterContext";
import NoQuoterContextError from "@/errors/NoQuoterContextError";
import { useContext } from "react";

export default function useQuoterContext() {
  const quoter = useContext(QuoterContext);
  if (!quoter) {
    throw new NoQuoterContextError();
  }
  return quoter;
}
