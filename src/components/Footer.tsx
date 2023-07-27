import Image from "next/image";
import Logo from "./Logo";
import Isotipo from "./Isotipo";
import FacebookIcon from "../../public/icons8-facebook-50.png";
import InstagramIcon from "../../public/icons8-instagram-50.png";
import {
  faEnvelope,
  faMailBulk,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <Isotipo />
      <div className="phone-section">
        <FontAwesomeIcon icon={faPhone} className="phone-icon" />
        <p className="phone-number">9993 38 09 25</p>
      </div>
      <a
        href="https://www.facebook.com/"
        className="phone-section"
        style={{ display: "block" }}
      >
        <FontAwesomeIcon icon={faEnvelope} className="phone-icon" />
        <p className="phone-number">hola@ariaresidencial.com</p>
        {/* <FontAwesomeIcon icon={faFacebookSquare} className="facebook-icon" /> */}
      </a>
    </div>
  );
}
