"use client";
import { useContext, useEffect, useRef, useState } from "react";
import { Lote, LoteContext } from "../Main";
import QuoterForm from "./QuoterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PlazoSelect from "./PlazoSelect";
import EngancheSelect from "./EngancheSelect";
import EngancheSection from "./EngancheSection";
import PlazoSection from "./PlazoSection";
import CotizacionSection from "./CotizacionSection";
import moneyFormater from "@/utils/moneyFormater";
import TestForm from "./TestForm";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

type Props = {
  lote?: Lote | null;
  onQuoterClose?: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
  onClose: () => void;
};

export function Quoter({ onQuoterClose, isOpen, onClose }: Props) {
  const { lotes, current: currentLote, priceM2 } = useContext(LoteContext);

  let component = null;
  if (currentLote == null) {
    component = <NullLote />;
  } else {
    component = <NonNullLote lote={currentLote} priceM2={priceM2} />;
  }

  return (
    // <div className="quoter">
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered={false}>
      <ModalOverlay />
      <ModalContent className="quoter-container">
        <ModalCloseButton size={"lg"} />
        <ModalBody className="quoter">
          {/* <div className="quoter-button-container">
            <button onClick={onQuoterClose} className="quoter-close-button">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div> */}
          {component}
          <TestForm />
        </ModalBody>
        {/* <QuoterForm /> */}
      </ModalContent>
    </Modal>
    // </div>
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
  const totalPrice = priceM2 * lote.area;
  const minEnganchePercentage = 10;
  const maxEnganchePercentage = 100;
  const minEngancheValue = Math.floor(
    (totalPrice * minEnganchePercentage) / 100
  );
  const [engancheString, setEngancheString] = useState<string>(
    String(minEngancheValue)
  );
  const [enganche, setEnganche] = useState<number>(parseInt(engancheString));
  const [plazo, setPlazo] = useState<number>(36);

  const remaining = totalPrice - enganche;

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
          engancheString={engancheString}
          setEnganche={setEnganche}
          setEngancheString={setEngancheString}
          total={totalPrice}
          minEnganchePercentage={minEnganchePercentage}
          maxEnganchePercentage={maxEnganchePercentage}
        />
        <hr />
        <PlazoSection plazo={plazo} setPlazo={setPlazo} />
        {/* <hr /> */}
      </section>
      <CotizacionSection
        plazo={plazo}
        mensualidadPrice={remaining / plazo}
        enganche={enganche}
      />
    </div>
  );
}
