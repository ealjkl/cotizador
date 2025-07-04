import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image as PdfImage,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import moneyFormater from "../../../utils/moneyFormater";
import type { Lote } from "@/components/Main";
import { PlanKind } from "../../../hooks/usePlan";
import terminosYCondiciones from "@/data/terminosYCondiciones";
import { Plan } from "@/data/plans";

// // Register Dolce Vita fonts
Font.register({
  family: "'Dolce Vita'",
  fonts: [
    { src: "/fonts/DolceVita/DolceVita.ttf", fontWeight: 400 },
    { src: "/fonts/DolceVita/DolceVitaLight.ttf", fontWeight: 300 },
    { src: "/fonts/DolceVita/DolceVitaHeavyBold.ttf", fontWeight: 800 },
  ],
});

// Register DM Sans fonts
Font.register({
  family: "'DM Sans'",
  fonts: [
    { src: "/fonts/DMSans/DMSans-Regular.ttf", fontWeight: 400 },
    {
      src: "/fonts/DMSans/DMSans-Italic.ttf",
      fontWeight: 400,
      fontStyle: "italic",
    },
    { src: "/fonts/DMSans/DMSans-Medium.ttf", fontWeight: 500 },
    {
      src: "/fonts/DMSans/DMSans-MediumItalic.ttf",
      fontWeight: 500,
      fontStyle: "italic",
    },
    { src: "/fonts/DMSans/DMSans-Bold.ttf", fontWeight: 700 },
    {
      src: "/fonts/DMSans/DMSans-BoldItalic.ttf",
      fontWeight: 700,
      fontStyle: "italic",
    },
  ],
});

// const planMap = {
//   "24-meses": "24 Meses",
//   "12-meses": "12 Meses",
//   constructorPlan: "Constructor",
//   contado: "Contado",
// } as const;

export const styles = StyleSheet.create({
  page: {
    fontFamily: "'DM Sans'",
    backgroundColor: "#E2E0E4",
    color: "#574646",
    padding: 20,
  },
  logo: {
    // height: 80,
    width: "66%",
    marginHorizontal: "auto",
    marginVertical: "-35px",
  },
  informacionSection: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    // alignItems: "center",
    gap: 50,
  },
  cotizacionSection: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    // alignItems: "center",
    marginBottom: "30px",
    gap: 50,
  },
  cotizacionTableContainer: {
    flex: "1",
  },
  cotizacionTitle: {
    fontSize: 20,
    fontWeight: "800" as any,
    fontFamily: "'Dolce Vita'",
  },
  cotizacionTable: {
    display: "flex",
    margin: "5px 0",
    // padding: 5,
    fontSize: 14,
    // border: "2px solid #999",
    // borderRadius: "10px",
  },
  oddRow: {
    backgroundColor: "#bbb",
  },
  cotizacionRow: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    // borderBottom: "1px dashed #574646",
  },
  cotizacionCell: {
    width: 300,
  },
  numberCell: {
    textAlign: "right",
  },
  headerSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modelText: {
    fontSize: 32,
    textAlign: "right",
    fontWeight: "bold",
  },
  loteText: {
    fontSize: 16,
    textAlign: "right",
    alignSelf: "flex-end",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },

  plantaAltaSection: {
    flex: ".85",
    // borderRadius: "1px",
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    fontSize: 14,
    justifyContent: "space-between",
    marginTop: "auto",
  },
  super: {
    fontSize: 12,
    verticalAlign: "super",
  },
  roundBorders: {
    borderRadius: "5px",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export type MyDocumentProps = {
  plazo: number;
  pagoTotal: number;
  pagoInicial: number;
  pagoContraEntrega: number;
  pagoMensualidad: number;
  lote: Lote;
  planKind: string;
  plan: Plan;
};

// Create Document Component
export function Template({
  pagoInicial,
  pagoMensualidad,
  pagoContraEntrega,
  pagoTotal,
  plazo,
  lote,
  planKind,
  plan,
}: // lote,
MyDocumentProps) {
  let numberString: string = lote.number;

  if (lote.number.length < 2) {
    numberString = "0" + numberString;
  }
  const chepinaUri = `/aria/chepinas/images/lote${numberString}.png`;

  const logoUri = "./aria/brand/logotipo.png";
  const ariaPerspectivaUri = `./aria/images/aria-perspectiva-resized.jpg`;
  const currentDate = new Date().toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerSection}>
          <PdfImage src={logoUri} style={styles.logo} />
          <View>
            <Text
              style={{
                ...styles.loteText,
                fontFamily: "'Dolce Vita'",
                fontWeight: "800" as any,
              }}
            >
              Lote {lote.number}
            </Text>
            <Text style={{ ...styles.loteText, fontWeight: "light" }}>
              {lote.area} m<Text style={styles.super}>2</Text>
            </Text>
            <Text style={{ ...styles.loteText }}>{currentDate}</Text>
          </View>
        </View>
        <View
          style={{
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            <Text
              style={{
                fontWeight: "600" as any,
              }}
            >
              Plan:
            </Text>
            <Text>{plan.plan}</Text>
          </View>
          {plazo > 0 ? (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
              }}
            >
              <Text
                style={{
                  fontWeight: "600" as any,
                }}
              >
                Mensualidades:
              </Text>
              <Text>{plazo}</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.cotizacionSection}>
          <View style={styles.cotizacionTableContainer}>
            <Text style={styles.cotizacionTitle}>Cotización</Text>
            <View style={styles.cotizacionTable}>
              <View style={styles.cotizacionRow}>
                <View style={styles.cotizacionCell}>
                  <Text>Pago inicial</Text>
                </View>
                <View
                  style={{ ...styles.cotizacionCell, ...styles.numberCell }}
                >
                  <Text>{moneyFormater.format(pagoInicial)}</Text>
                </View>
              </View>
              <View style={{ ...styles.cotizacionRow, ...styles.oddRow }}>
                <View style={styles.cotizacionCell}>
                  <Text>Pago mensualidades ({plazo} pagos)</Text>
                </View>
                <View
                  style={{ ...styles.cotizacionCell, ...styles.numberCell }}
                >
                  <Text>
                    {!Number.isNaN(pagoMensualidad)
                      ? moneyFormater.format(pagoMensualidad)
                      : moneyFormater.format(0)}
                  </Text>
                </View>
              </View>
              <View style={{ ...styles.cotizacionRow }}>
                <View style={styles.cotizacionCell}>
                  <Text>Pago contra entrega</Text>
                </View>
                <View
                  style={{ ...styles.cotizacionCell, ...styles.numberCell }}
                >
                  <Text>{moneyFormater.format(pagoContraEntrega)}</Text>
                </View>
              </View>
              <View
                style={{
                  ...styles.cotizacionRow,
                  ...styles.oddRow,
                  borderTop: "2px solid #574646",
                }}
              >
                <View style={styles.cotizacionCell}>
                  <Text>Pago total</Text>
                </View>
                <View
                  style={{ ...styles.cotizacionCell, ...styles.numberCell }}
                >
                  <Text>{moneyFormater.format(pagoTotal)}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.informacionSection}>
          <View style={styles.plantaAltaSection}>
            <PdfImage
              style={{
                ...styles.roundBorders,
                width: 350,
              }}
              src={ariaPerspectivaUri}
            />
          </View>
          <View
            style={{
              flex: ".02",
              border: "1px solid #574646",
              // marginVertical: "5px",
              backgroundColor: "#574646",
              borderRadius: "4px",
            }}
          ></View>
        </View>
        <View style={styles.footer}>
          <View>
            <View
              style={{
                fontSize: 8,
                color: "black",
                marginVertical: 4,
              }}
            >
              <Text>{terminosYCondiciones}</Text>
            </View>
            <View>
              <Text style={styles.boldText}>Web</Text>
              <Text>www.airacholul.com</Text>
            </View>
          </View>
        </View>
      </Page>
      <Page style={styles.page}>
        <View
          style={{
            ...styles.headerSection,
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", gap: "20" }}>
            <Text
              style={{
                ...styles.loteText,
                fontFamily: "'Dolce Vita'",
                fontWeight: "800" as any,
              }}
            >
              Lote {lote.number}
            </Text>
            <Text style={{ ...styles.loteText }}>{currentDate}</Text>
          </View>
        </View>
        <PdfImage
          src="./aria/brand/logotipo.png"
          style={{
            ...styles.logo,
            marginHorizontal: "auto",
            marginVertical: "-80px",
          }}
        />
        <PdfImage
          style={{
            ...styles.roundBorders,
            width: "380px",
            marginHorizontal: "auto",
          }}
          src={chepinaUri}
        />
        <View style={styles.footer}>
          <View>
            <Text style={styles.boldText}>Web</Text>
            <Text>www.airacholul.com</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
