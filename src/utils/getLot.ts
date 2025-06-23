import csv from "csv-parser";
import { pipeline } from "node:stream/promises";
import { Readable, Writable } from "node:stream";

const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdxZXZy3fjInHr0qzFV59hn-Da7B0FENdU9BOeV9xI2COx8Ug62_fFi_oWWH1tm-DPiH-lOZb7eC0g/pub?gid=0&single=true&output=csv";

export default async function getLots() {
  const lotsRes = await fetch(URL, { next: { revalidate: 5 } });
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
        jsonData[data.id] = data;
        callback();
      },
    })
  );
  return jsonData;
}
