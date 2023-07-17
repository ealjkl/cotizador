import Image from "next/image";
import logo from "../../public/aria/brand/logotipo.png";

export default function Logo() {
  return (
    <a href="#" className="logo-anchor">
      <Image
        // src="/aria/brand/logotipo.png"
        src={logo}
        alt="Logo aria"
        width={500}
        height={500}
      />
    </a>
  );
}
