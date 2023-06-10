import getLots from "@/utils/getLot";
import { Lote } from "../Main";
import AriaMasterPlan from "./AriaMasterPlanSvg2";

type Props = {
  data: { [id: string]: Lote };
  onClick?: (ev: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
  svgRef?: React.RefObject<SVGSVGElement>;
};

export async function Blueprint({ data, onClick, svgRef }: Props) {
  const lotsOb = await getLots();
  console.log(lotsOb);
  return (
    <AriaMasterPlan
      ref={svgRef}
      onClick={(ev: any) => {
        if (ev.target === ev.currentTarget) {
          return;
        }
        if (!(ev.target as any).dataset.number) {
          return;
        }
        const lotElement = ev.target as Element;
        const id = lotElement.id;

        if (onClick && id != undefined) {
          onClick(ev, id);
        }
      }}
    />
  );
}
