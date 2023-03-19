import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
type Props = {
  phoneNumber: string;
};

function FloatingWhatsAppButton(props: Props) {
  const textRef = useRef<HTMLDivElement>(null);

  function handleHover() {
    textRef.current?.classList.remove("not-displayed");
  }

  function handleLeave() {
    textRef.current?.classList.add("not-displayed");
  }

  return (
    <a
      href={`https://wa.me/${props.phoneNumber}`}
      className="floating-whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" className="whatsapp-icon" />
      <div className="button-text not-displayed" ref={textRef}>
        Send a message
      </div>
    </a>
  );
}

export default FloatingWhatsAppButton;
