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

export default function getSvg(lots: { [lotId: string]: Lote }) {
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
      let lotKey = current.attributes.id;
      if (!current.attributes.id.startsWith("lot-")) {
        lotKey = (current.attributes.id as string).replace("lot", "lot-");
      }
      delete current.attributes.style;
      current.attributes.id = lotKey;
      current.attributes["data-number"] = lots[lotKey]["number"];
      current.attributes["data-available"] = lots[lotKey]["available"];
    }
    for (const child of current.children) {
      stack.push(child);
    }
  }

  return svg;
}
