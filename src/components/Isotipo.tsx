import Image from "next/image";
import logo from "../../public/aria/brand/isotipo.png";

export default function Isotipo() {
  return (
    <a
      href="https://ariaresidencial.com"
      target="_blank"
      className="logo-anchor isotipo"
    >
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
