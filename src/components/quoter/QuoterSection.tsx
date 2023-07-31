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
import Chepina from "./chepinas/Chepina";
import TotalPriceSection from "./TotalPriceSection";
// import { Template } from "./buttons/Template";
import dynamic from "next/dynamic";

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
        <ModalBody className="quoter">{component}</ModalBody>
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
    <Quoter
      {...{
        precioBase: totalPrice,
        minEnganchePercentageInicial: 10,
        maxEnganchePercentageInicial: 100,
        m2: lote["area"],
      }}
    >
      <header className="quoter__header">
        <div className="quoter__title-wrapper">
          <h3 className="quoter__title">Lote {lote.number}</h3>
        </div>
      </header>

      <div className="quoter__details">
        <div className="quoter__area-section">
          <h2 className="quoter__area-label">Área</h2>
          <p className="quoter__area">
            {lote.area}m<sup>2</sup>
          </p>
        </div>
        <TotalPriceSection />
      </div>

      <section className="quoter__input">
        <div className="quoter-main">
          <PlazoSection />
          <hr />
          <EngancheSection />
        </div>
      </section>
      <CotizacionSection />

      {/* <div className="quoter-form">
        <section className="quoter__chepina-section">
          <Chepina lote={lote} />
        </section>
      </div> */}
    </Quoter>
  );
}
