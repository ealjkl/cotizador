import useQuoterContext from "@/hooks/useQuoterContext";
import moneyFormater from "@/utils/moneyFormater";

export default function TotalPriceSection() {
  const { pagoTotal } = useQuoterContext();
  return (
    <section className="quoter__price-section">
      <h2 className="quoter__total-price__label">Precio total</h2>
      <p className="quoter__total-price__value-container">
        <span className="quoter__total-price__value">
          {moneyFormater.format(pagoTotal)}
        </span>
      </p>
    </section>
  );
}
