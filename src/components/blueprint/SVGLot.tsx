import { Lote } from "./Main";

type Props = {
  pData: Lote;
  onClick?: (
    ev: React.MouseEvent<SVGPolygonElement, MouseEvent>,
    id: string
  ) => void;
};

export default function SVGLot({ pData, onClick }: Props) {
  return (
    <polygon
      onClick={(ev) => {
        if (onClick) {
          onClick(ev, pData.id);
        }
      }}
      key={pData.id}
      id={pData.id}
      data-available={pData.available}
      data-number={pData.number}
      data-area={pData.area}
      points={pData.points}
    />
  );
}
