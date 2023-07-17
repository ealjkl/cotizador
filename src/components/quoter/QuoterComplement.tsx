import { useContext } from "react";
import { LoteContext } from "../Main";
import EngancheSection from "./EngancheSection";
import PlazoSection from "./PlazoSection";
import CotizacionSection from "./CotizacionSection";
import Quoter from "./Quoter";
import Chepina from "./chepinas/Chepina";
import TotalPriceSection from "./TotalPriceSection";

export function QuoterComplement() {
  const { lotes, current: lote, priceM2 } = useContext(LoteContext);

  if (lote === null) {
    return <div>Seleccione Lote</div>;
  }

  const totalPrice = priceM2 * lote.area;

  return (
    <div className="quoter-main">
      <Quoter
        {...{
          precioBase: totalPrice,
          minEnganchePercentageInicial: 10,
          maxEnganchePercentageInicial: 100,
          m2: lote["area"],
        }}
      >
        <header className="quoter__header">
          <h3 className="quoter__title">Lote {lote.number}</h3>
          <p className="quoter__area">
            {lote.area}m<sup>2</sup>
          </p>
        </header>
        <section className="quoter__chepina-section">
          <Chepina lote={lote} />
        </section>
        <TotalPriceSection />
      </Quoter>
    </div>
  );
}
