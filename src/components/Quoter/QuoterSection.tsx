"use client";
import { useContext } from "react";
import { Lote, LoteContext } from "../Main";
import EngancheSection from "./EngancheSection";
import PlazoSection from "./PlazoSection";
import CotizacionSection from "./CotizacionSection";
import moneyFormater from "@/utils/moneyFormater";
import TestForm from "./TestForm";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import Quoter from "./Quoter";

type Props = {
  lote?: Lote | null;
  isOpen: boolean;
  onClose: () => void;
};

export function QuoterSection({ isOpen, onClose }: Props) {
  const { lotes, current: currentLote, priceM2 } = useContext(LoteContext);

  let component = null;
  if (currentLote == null) {
    component = <NullLote />;
  } else {
    component = <NonNullLote lote={currentLote} priceM2={priceM2} />;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered={false}>
      <ModalOverlay />
      <ModalContent className="quoter-container">
        <ModalCloseButton size={"lg"} />
        <ModalBody className="quoter">
          {component}
          <TestForm />
        </ModalBody>
      </ModalContent>
    </Modal>
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

  return (
    <div className="quoter-main">
      <Quoter
        {...{
          precioBase: totalPrice,
          minEnganchePercentage: 10,
          maxEnganchePercentage: 100,
        }}
      >
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
          <EngancheSection />
          <hr />
          <PlazoSection />
        </section>
        <CotizacionSection />
      </Quoter>
    </div>
  );
}
