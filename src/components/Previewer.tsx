import { PDFPreviewer } from "./chepinas/PDFPreviewer";
import { Template } from "./quoter/buttons/Template";
import {
  PDFViewer,
  Document,
  View,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default function Previewer() {
  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        bottom: "0",
        top: "0",
        right: "0",
        left: "0",
        zIndex: 99,
      }}
    >
      <PDFViewer
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* <MyDocument /> */}
        <Template
          {...{
            lote: {
              area: 1,
              available: 1,
              id: "1",
              number: "4",
            },
            pagoContraEntrega: 1,
            pagoInicial: 1,
            pagoMensualidad: 1,
            pagoTotal: 1,
            plazo: 1,
            plan: "Contado",
          }}
        />
      </PDFViewer>
    </div>
  );
}

PDFPreviewer;
