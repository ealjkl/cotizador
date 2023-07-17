// PdfDocument.js
import React, { useContext, useState } from "react";
import ReactPDF, {
  PDFDownloadLink,
  StyleSheet,
  PDFViewer,
  View,
  Text,
  pdf,
} from "@react-pdf/renderer";
import useQuoterContext from "@/hooks/useQuoterContext";
import { Template } from "./Template";
import { LoteContext } from "../../Main";
import { Button } from "@chakra-ui/react";

function DescargarCotizacionButton() {
  const {
    pagoTotal,
    pagoInicial,
    pagoContraEntrega,
    pagoMensualidad,
    plazo,
    planKind,
  } = useQuoterContext();

  const { lotes, current: currentLote, priceM2 } = useContext(LoteContext);

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const blob = await pdf(
        <Template
          {...{
            pagoTotal,
            pagoInicial,
            pagoContraEntrega,
            pagoMensualidad,
            plazo,
            lote: currentLote!,
            plan: planKind,
          }}
        />
      ).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "document.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      // Handle error here
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        className="cotizador-section__button-descargar"
        onClick={handleClick}
        disabled={currentLote == null || loading}
        isLoading={loading}
      >
        Descargar
      </Button>
    </>
  );
}

export default DescargarCotizacionButton;
