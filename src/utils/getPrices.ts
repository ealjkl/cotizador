import csv from "csv-parser";
import { pipeline } from "node:stream/promises";
import { Readable, Writable } from "node:stream";
import { Plan } from "@/data/plans";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdxZXZy3fjInHr0qzFV59hn-Da7B0FENdU9BOeV9xI2COx8Ug62_fFi_oWWH1tm-DPiH-lOZb7eC0g/pub?gid=330937936&single=true&output=csv";

type DataType = "int" | "float" | "string";

const pricesMap: {
  [columnName: string]: {
    identifier: string;
    dataType: DataType;
  };
} = {
  id: {
    dataType: "string",
    identifier: "id",
  },
  plan: {
    dataType: "string",
    identifier: "plan",
  },
  precioM2: {
    dataType: "float",
    identifier: "precioM2",
  },
  engancheInicialPercentage: {
    dataType: "int",
    identifier: "engancheInicialPercentage",
  },
  minEnganchePercentageInicial: {
    dataType: "int",
    identifier: "minEnganchePercentageInicial",
  },
  maxEnganchePercentageInicial: {
    dataType: "int",
    identifier: "maxEnganchePercentageInicial",
  },
  pagoContraEntregaPercentage: {
    dataType: "int",
    identifier: "pagoContraEntregaPercentage",
  },
  plazoInicial: {
    dataType: "int",
    identifier: "plazoInicial",
  },
};

function transformType(
  dataKey: string,
  dataValue: string,
  mapping: typeof pricesMap
) {
  const dataType = mapping[dataKey].dataType;
  if (dataType == "int") {
    return parseInt(dataValue);
  }
  if (dataType == "float") {
    return parseFloat(dataValue);
  }
  return dataValue;
}

export default async function getPrices(): Promise<
  | {
      [id: string]: Plan;
    }
  | undefined
> {
  const lotsRes = await fetch(URL, { next: { revalidate: 10 } });
  const textCsv = await lotsRes.text();
  const streamCsv = Readable.from(textCsv);
  const jsonData: any = {};

  if (!lotsRes.ok) {
    return undefined;
  }

  await pipeline(
    streamCsv,
    csv(),
    new Writable({
      objectMode: true,
      write(data, _, callback) {
        const dataMod: any = {};
        for (const key in data) {
          const val = data[key];
          dataMod[pricesMap[key].identifier] = transformType(
            key,
            val,
            pricesMap
          );
        }

        jsonData[data.id] = dataMod;
        callback();
      },
    })
  );
  return jsonData;
}
