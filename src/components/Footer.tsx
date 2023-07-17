import Image from "next/image";
import Logo from "./Logo";
import Isotipo from "./Isotipo";
import FacebookIcon from "../../public/icons8-facebook-50.png";
import InstagramIcon from "../../public/icons8-instagram-50.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <Isotipo />
      <div className="phone-section">
        <FontAwesomeIcon icon={faPhone} className="phone-icon" />
        <p className="phone-number">000-34234-43</p>
      </div>
      <a href="https://www.facebook.com">
        <FontAwesomeIcon icon={faFacebookSquare} className="facebook-icon" />
      </a>
    </div>
  );
}
