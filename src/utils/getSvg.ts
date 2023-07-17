import { Lote } from "@/components/Main";
import ariaSvg from "../data/aria-masterplan.json";
import getLots from "./getLot";

export type SvgObject = {
  name: string;
  type: string;
  value: string;
  attributes: {
    [attrName: string]: any;
  };
  children: SvgObject[];
};

export default async function getSvg(lots: { [lotId: string]: Lote }) {
  // const lots = await getLots();
  const svg = ariaSvg;

  let root: SvgObject = svg;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop()!;
    if (
      "id" in current.attributes &&
      (current.attributes.id as string).startsWith("lot")
    ) {
      current.attributes["data-available"] =
        lots[current.attributes.id]["available"];
    }
    for (const child of current.children) {
      stack.push(child);
    }
  }

  return svg;
}
