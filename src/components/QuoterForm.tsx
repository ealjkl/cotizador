"use client"
import { useRef } from "react";
import submitHubspotForm from "../utils/submitHubspotForm";

export default function QuoterForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  return (
    <form
      action=""
      onSubmit={(ev) => {
        ev.preventDefault();
        const name = nameRef.current?.value ?? "";
        const phone = phoneRef.current?.value ?? "";
        const email = emailRef.current?.value ?? "";
        submitHubspotForm(
          name,
          phone,
          email,
          "24240113",
          "3836fc42-4397-4abc-9730-919960d2a1d1"
        );
      }}
    >
      <div className="input-container">
        <label htmlFor="">Nombre</label>
        <input type="text" ref={nameRef} />
      </div>

      <div className="input-container">
        <label htmlFor="">Correo</label>
        <input type="text" placeholder="tucorreo@ejemplo.com" ref={emailRef} />
      </div>

      <div className="input-container">
        <label htmlFor="">Teléfono</label>
        <input type="text" ref={phoneRef} />
      </div>
      <button type="submit">Cotizar!</button>
    </form>
  );
}
