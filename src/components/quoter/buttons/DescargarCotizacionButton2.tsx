// PdfDocument.js
import React, { useContext } from "react";
import ReactPDF, {
  PDFDownloadLink,
  StyleSheet,
  PDFViewer,
  View,
  Text,
} from "@react-pdf/renderer";
import useQuoterContext from "@/hooks/useQuoterContext";
import { Template } from "./Template";
import { LoteContext } from "../../Main";

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

  return (
    <>
      {/* <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <PDFViewer
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <Template
            {...{
              pagoTotal,
              pagoInicial,
              pagoContraEntrega,
              pagoMensualidad,
              plazo,
              lote: currentLote!,
            }}
          />
        </PDFViewer>
      </div> */}

      <PDFDownloadLink
        style={{ width: "100%", marginBottom: "1em", marginTop: "1em" }}
        document={
          currentLote != null ? (
            <Template
              {...{
                pagoTotal,
                pagoInicial,
                pagoContraEntrega,
                pagoMensualidad,
                plazo,
                lote: currentLote,
                plan: planKind,
              }}
            />
          ) : (
            <Text>Por favor selecciona un lote</Text>
          )
        }
        fileName="document.pdf"
        className="cotizador-section__button-descargar"
      >
        {({ blob, url, loading, error }) => "Descargar"}
      </PDFDownloadLink>
    </>
  );
}

export default DescargarCotizacionButton;
