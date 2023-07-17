import { useContext } from "react";
import { Lote, LoteContext } from "../Main";
import EngancheSection from "./EngancheSection";
import PlazoSection from "./PlazoSection";
import CotizacionSection from "./CotizacionSection";
import moneyFormater from "@/utils/moneyFormater";
import { QuoterComplement } from "./QuoterComplement";
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

const Previewer = dynamic(() => import("../Previewer"), {
  loading: () => <h1>hola</h1>,
  ssr: false,
});

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
      <Previewer />
      <div className="quoter-main">
        <section className="quoter__input">
          <PlazoSection />
          <hr />
          <EngancheSection />
        </section>
        <CotizacionSection />
      </div>
    </Quoter>
  );
}
