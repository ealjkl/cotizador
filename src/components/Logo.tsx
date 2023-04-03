import Image from "next/image";

export default function Logo() {
  return (
    <a href="http://boreanaresidencial.com" className="logo-anchor">
      <Image src="/logo.svg" alt="Logo boreana" width={100} height={100} />
    </a>
  );
}
