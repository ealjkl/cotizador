const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTdxZXZy3fjInHr0qzFV59hn-Da7B0FENdU9BOeV9xI2COx8Ug62_fFi_oWWH1tm-DPiH-lOZb7eC0g/pub?gid=0&single=true&output=csv";

export default async function getLots() {
  const lotsRes = await fetch(URL);
  if (!lotsRes.ok) {
    return undefined;
  }
  return lotsRes.text();
}
