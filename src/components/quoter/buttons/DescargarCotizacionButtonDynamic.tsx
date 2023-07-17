import { Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const DescargarCotizacionButton = dynamic(
  () => import("./DescargarCotizacionButton"),
  {
    ssr: false,
    loading: () => {
      return (
        <Button disabled className="cotizador-section__button-descargar">
          Descargar
        </Button>
      );
    },
  }
);

export default DescargarCotizacionButton;
