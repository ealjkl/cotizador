"use client";
import { useContext, useRef, useState } from "react";
import { Lote, LoteContext } from "./Main";
import QuoterForm from "./QuoterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
    <div className="quoter">
      <h3 className="quoter__title"> Lote {lote.number}</h3>
      <h2 className="quoter__total-price__label">Precio total:</h2>
      <p>
        <span className="quoter__total-price__value">
          {moneyFormater.format(totalPrice)}
        </span>
      </p>
      <p>Seleccione su enganche:</p>
      <div className="enganche-input-container">
        <label htmlFor="enganche">Enganche</label>
        <select
          name="enganche"
          id="enganche"
          onChange={(ev) => {
            if (ev.currentTarget.value === "other") {
              setOtherEnganche(true);
            } else {
              setOtherEnganche(false);
              setEnganche(parseInt(ev.currentTarget.value));
            }
          }}
        >
          <option value="10">10%</option>
          <option value="20">20%</option>
          <option value="30">30%</option>
          <option value="100">100%</option>
          <option value="other">Otro</option>
        </select>
        {otherEnganche ? (
          <div>
            <label htmlFor=""></label>
            <input type="number" />
          </div>
        ) : null}
      </div>
      {enganche !== 100 ? (
        <div className="no-mensualidades-input-container">
          <label htmlFor="no-mensualidades">Número de mensualidades</label>
          <select
            name="no-mensualidades"
            id="no-mensualidades"
            onChange={(ev) => {
              if (ev.currentTarget.value == "other") {
                setOtherNoMensualidades(true);
              } else {
                setOtherNoMensualidades(false);
                setNoMensualidades(parseInt(ev.currentTarget.value));
              }
            }}
          >
            <option value="36">36 meses</option>
            <option value="48">48 meses</option>
            <option value="72">72 meses</option>
            <option value="other">Otro</option>
          </select>
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
      <p>
        <span>Área:</span> {lote.area}
      </p>
      {enganche !== 100 ? (
        <p>
          {noMensualidades} Mensualidades de:{" "}
          {moneyFormater.format(remaining / noMensualidades)}
        </p>
      ) : null}
    </div>
  );
}
