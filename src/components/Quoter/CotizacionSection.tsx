import useQuoterContext from "@/hooks/useQuoterContext";
import moneyFormater from "@/utils/moneyFormater";

type Props = {};

export default function CotizacionSection({}: Props) {
  const { enganche, pagoMensualidad, plazo } = useQuoterContext();

  return (
    <section className="cotizador-section">
      <h3 className="cotizador-section__title">Cotización</h3>
      <div className="cotizador-section__sub-container">
        <section className="cotizador-section__pago-inicial-sub">
          <h4 className="cotizador-section__subtitle">Pago inicial</h4>
          <p className="cotizador-section__text-body">
            1 pago de {moneyFormater.format(enganche)}
          </p>
        </section>
        <section className="cotizador-section__mensualidad-sub">
          <h4 className="cotizador-section__subtitle">Mensualidades</h4>
          <p className="cotizador-section__text-body">
            {plazo} mensualidades de {moneyFormater.format(pagoMensualidad)}
          </p>
        </section>
      </div>
    </section>
  );
}
