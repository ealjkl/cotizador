"use client";
import { useContext, useRef, useState } from "react";
import { Lote, LoteContext } from "../Main";
import QuoterForm from "./QuoterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PlazoSelect from "./PlazoSelect";
import EngancheSelect from "./EngancheSelect";
import EngancheSection from "./EngancheSection";

type Props = {
  lote?: Lote | null;
  onQuoterClose?: React.MouseEventHandler<HTMLButtonElement>;
};
const moneyFormater = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

export function Quoter({ onQuoterClose }: Props) {
  const { lotes, current: currentLote, priceM2 } = useContext(LoteContext);
  let component = null;
  if (currentLote == null) {
    component = <NullLote />;
  } else {
    component = <NonNullLote lote={currentLote} priceM2={priceM2} />;
  }

  return (
    <div className="quoter">
      <div className="quoter-button-container">
        <button onClick={onQuoterClose} className="quoter-close-button">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      {component}
      <QuoterForm />
    </div>
  );
}

function NullLote() {
  return <h3 style={{ color: "black" }}>Escoge un lote!</h3>;
}

type NonNullLoteProps = {
  lote: Lote;
  priceM2: number;
};

function NonNullLote({ lote, priceM2 }: NonNullLoteProps) {
  const [enganche, setEnganche] = useState<number>(10);
  const [noMensualidades, setNoMensualidades] = useState<number>(36);
  const [otherEnganche, setOtherEnganche] = useState<boolean>(false);
  const [otherNoMensualidades, setOtherNoMensualidades] =
    useState<boolean>(false);
  const totalPrice = priceM2 * lote.area;
  const remaining = totalPrice - (enganche / 100) * totalPrice;

  return (
    <div className="quoter-main">
      <header className="quoter__header">
        <h3 className="quoter__title">Lote {lote.number}</h3>
        <p className="quoter__area">
          {lote.area}m<sup>2</sup>
        </p>
      </header>
      <section className="quoter__price-section">
        <h2 className="quoter__total-price__label">Precio total:</h2>
        <p className="quoter__total-price__value-container">
          <span className="quoter__total-price__value">
            {moneyFormater.format(totalPrice)}
          </span>
        </p>
      </section>
      <section className="quoter__input">
        <EngancheSection
          enganche={enganche}
          total={totalPrice}
          setEnganche={setEnganche}
        />
        {enganche !== 100 ? (
          <div className="no-mensualidades-input-container">
            <label htmlFor="no-mensualidades" className="quoter__plazo-label">
              Plazo{" "}
            </label>
            <PlazoSelect
              onChange={(ev) => {
                if (ev.currentTarget.value == "other") {
                  setOtherNoMensualidades(true);
                } else {
                  setOtherNoMensualidades(false);
                  setNoMensualidades(parseInt(ev.currentTarget.value));
                }
              }}
            />
            {otherNoMensualidades ? (
              <div>
                <label htmlFor="no-mensualidades-input"></label>
                <input
                  type="number"
                  id="no-mensualidades-input"
                  name="no-mensualidades"
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </section>
      {enganche !== 100 ? (
        <p>
          {noMensualidades} Mensualidades de:{" "}
          {moneyFormater.format(remaining / noMensualidades)}
        </p>
      ) : null}
    </div>
  );
}
