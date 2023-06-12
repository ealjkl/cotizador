import { Lote } from "@/utils/lotes";
import { Button, Skeleton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./Chepina.scss";

type Props = {
  lote: Lote;
};

export default function Chepina(props: Props) {
  let numberString: string = props.lote.number;

  if (props.lote.number.length < 2) {
    numberString = "0" + numberString;
  }
  const imageUri = `/aria/chepinas/images/lote${numberString}.png`;
  const pdfUri = `/aria/chepinas/pdfs/lote${numberString}.pdf`;

  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="chepina-container">
      <div className="chepina">
        <Skeleton isLoaded={imageLoaded}>
          <Image
            src={imageUri}
            width={"300"}
            style={{
              height: "auto",
            }}
            height={"450"}
            alt={`Chepina del lote ${props.lote.number}`}
            onLoad={() => {
              setImageLoaded(true);
            }}
          />
        </Skeleton>
        <Link href={pdfUri} target="_blank" className="chepina__open-button">
          Abrir
        </Link>
      </div>
    </div>
  );
}
