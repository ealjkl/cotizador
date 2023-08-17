import terminosYCondiciones from "@/data/terminosYCondiciones";
import useQuoterContext from "@/hooks/useQuoterContext";
import moneyFormater from "@/utils/moneyFormater";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";
import { LoteContext } from "../Main";
import DescargarCotizacionButton from "./buttons/DescargarCotizacionButtonDynamic";
import Chepina from "./chepinas/Chepina";

type Props = {};

export default function CotizacionSection({}: Props) {
  const { enganche, pagoMensualidad, plazo, pagoContraEntrega, planKind } =
    useQuoterContext();
  const { current: lote } = useContext(LoteContext);

  return (
    <section className="cotizador-section">
      {planKind != "constructorPlan" ? (
        <h3 className="cotizador-section__title">Cotización</h3>
      ) : null}

      <div className="cotizador-section__sub-container">
        <div className="cotizador-section__sub-sub-container">
          <div className="cotizador-section__details">
            {planKind != "constructorPlan" ? (
              <>
                <section className="cotizador-section__pago-inicial-sub">
                  <h4 className="cotizador-section__subtitle">Pago inicial</h4>
                  <p className="cotizador-section__text-body">
                    1 pago de {moneyFormater.format(enganche)}
                  </p>
                </section>

                <section
                  className="cotizador-section__mensualidad-sub"
                  style={{
                    visibility:
                      pagoMensualidad > 1 && pagoMensualidad < Infinity
                        ? "visible"
                        : "hidden",
                  }}
                >
                  <h4 className="cotizador-section__subtitle">Mensualidades</h4>
                  <p className="cotizador-section__text-body">
                    {plazo} mensualidades de{" "}
                    {moneyFormater.format(pagoMensualidad)}
                  </p>
                </section>

                <section
                  className="cotizador-section__contra-entrega-sub"
                  style={{
                    visibility: pagoContraEntrega > 1 ? "visible" : "hidden",
                  }}
                >
                  <h4 className="cotizador-section__subtitle">
                    Contra entrega
                  </h4>
                  <p className="cotizador-section__text-body">
                    1 pago de {moneyFormater.format(pagoContraEntrega)}
                  </p>
                </section>
              </>
            ) : (
              <h2 className="cotizador-section__constructor-text">
                Si eres constructor, contáctanos para más información.
              </h2>
            )}
            <p className="cotizador-section__disclaimer">
              {terminosYCondiciones}
            </p>
          </div>
          <section className="quoter__chepina-section">
            <Chepina lote={lote!} />
          </section>
        </div>

        <div className="cotizacion-section__buttonGroup">
          <DescargarCotizacionButton />
          <Link
            //TODO: put the correct link for the whatsappp
            href={
              "https://api.whatsapp.com/send?phone=5219993380925&text=Hola%2C%20quisiera%20informes%20de%20Aira%20Residencial."
            }
            onClick={() => {}}
            className="cotizador-section__button-contacto"
          >
            ¡Contáctanos!
          </Link>
        </div>
      </div>
    </section>
  );
}
