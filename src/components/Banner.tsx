import Indicator from "./Indicator";
import { Heading, Highlight } from "@chakra-ui/react";

export default function Banner() {
  return (
    <section className="banner">
      <Heading>
        <Highlight
          query="Smart Home"
          styles={{
            px: "2",
            py: "1",
            rounded: "full",
            // bg: "var(--highlight-text)",
            fontWeight: "500",
            lineHeight: "tall",
            textDecoration: "underline",
          }}
        >
          Cotiza tu Terreno
        </Highlight>
      </Heading>
      <Indicator />
    </section>
  );
}
