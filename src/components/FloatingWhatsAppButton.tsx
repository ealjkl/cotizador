"use client"
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
type Props = {
  phoneNumber: string;
};

function FloatingWhatsAppButton(props: Props) {
  const textRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);

  function handleHover() {
    setHovered(true);
  }

  function handleLeave() {
    setHovered(false);
  }

  return (
    <a
      href={`https://wa.me/${props.phoneNumber}`}
      className={`floating-whatsapp-button${hovered ? " hovered" : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" className="whatsapp-icon" />
      <div className="button-text-container">
        <div className={`button-text${hovered ? " visible" : ""}`}>
          Send a message
        </div>
      </div>
    </a>
  );
}

export default FloatingWhatsAppButton;
