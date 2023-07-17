import useQuoterContext from "@/hooks/useQuoterContext";
import moneyFormater from "@/utils/moneyFormater";
import { Button } from "@chakra-ui/react";

type Props = {};

export default function CotizacionSection({}: Props) {
  const { enganche, pagoMensualidad, plazo, pagoContraEntrega } =
    useQuoterContext();

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

        {/* {pagoMensualidad > 1 ? ( */}

        <section
          className="cotizador-section__mensualidad-sub"
          style={{
            visibility: pagoMensualidad > 1 ? "visible" : "hidden",
          }}
        >
          <h4 className="cotizador-section__subtitle">Mensualidades</h4>
          <p className="cotizador-section__text-body">
            {plazo} mensualidades de {moneyFormater.format(pagoMensualidad)}
          </p>
        </section>

        {/* ) : null} */}
        {pagoContraEntrega > 1 ? (
          <section className="cotizador-section__contra-entrega-sub">
            <h4 className="cotizador-section__subtitle">Contra entrega</h4>
            <p className="cotizador-section__text-body">
              1 pago contra entrega de {moneyFormater.format(pagoContraEntrega)}
            </p>
          </section>
        ) : null}

        <Button
          onClick={() => {}}
          style={{ width: "100%", marginBottom: "1em", marginTop: "1em" }}
        >
          {" "}
          Descarga tu cotización{" "}
        </Button>
        <Button onClick={() => {}} style={{ width: "100%" }}>
          {" "}
          ¡Contáctanos!{" "}
        </Button>
      </div>
    </section>
  );
}
