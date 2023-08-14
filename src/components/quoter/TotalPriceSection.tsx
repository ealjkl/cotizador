import plans from "@/data/plans";
import { PlanKind } from "@/hooks/usePlan";
import useQuoterContext from "@/hooks/useQuoterContext";
import moneyFormater from "@/utils/moneyFormater";
import { useContext } from "react";
import { LoteContext } from "../Main";

export default function TotalPriceSection() {
  const { pagoTotal, planKind } = useQuoterContext();
  const { lotes, current: lote } = useContext(LoteContext);
  if (!lote) {
    return null;
  }
  const basePlan: PlanKind = "36-meses";
  const precioBase = plans[basePlan].precioM2 * lote.area;
  return (
    <section className="quoter__price-section">
      <h2 className="quoter__total-price__label">Precio total</h2>
      <p className="quoter__total-price__value-container">
        <span className="quoter__total-price__value">
          {moneyFormater.format(pagoTotal)}
        </span>
        <span
          className="quoter__base-price__value"
          style={{
            visibility: planKind == "36-meses" ? "hidden" : "visible",
          }}
        >
          {moneyFormater.format(precioBase)}
        </span>
      </p>
    </section>
  );
}
