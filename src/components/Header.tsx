import { background } from "@chakra-ui/react";
import Logo from "./Logo";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="header">
      <nav className="main-nav">
        <Logo />
        <Link to="banner" smooth={true} duration={500}>
          <div className="link-to-banner">
            <p>Cotiza tu terreno</p>
            <p>
              <i className="arrow down"></i>
            </p>
          </div>
        </Link>
      </nav>
    </header>
  );
}
