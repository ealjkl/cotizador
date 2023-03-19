import { Lote } from "./Main";
import SVGLot from "./SVGLot";

type Props = {
  data: { [id: string]: Lote };
  onClick?: (
    ev: React.MouseEvent<SVGPolygonElement, MouseEvent>,
    id: string
  ) => void;
};

export function Blueprint({ data, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 594.94 381.43"
      className="blueprint"
    >
      {Object.entries(data).map(([_, pData]) => {
        return <SVGLot key={pData.id} pData={pData} onClick={onClick} />;
      })}
    </svg>
  );
}
