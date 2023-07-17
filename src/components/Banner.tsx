import Indicator from "./Indicator";
import { Heading, Highlight } from "@chakra-ui/react";
import { Element } from "react-scroll";

export default function Banner() {
  return (
    <section className="banner">
      <Element name="banner">
        <Indicator />
      </Element>
    </section>
  );
}
