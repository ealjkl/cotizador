"use client";
import Main from "../components/Main";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import Map from "../components/Example";
import PannerAndZoomerWrapper from "@/components/PannerAndZoomerWrapper";
import ExampleZoomerPanner from "@/components/ExampleZoomerPanner";

import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";
import { CacheProvider } from "@chakra-ui/next-js";

const { Spinner, Button, Modal, CloseButton, Slider } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Spinner,
    Button,
    Modal,
    CloseButton,
    Slider,
  },
});

export default function App() {
  return (
    <div className="App">
      <CacheProvider>
        <ChakraBaseProvider theme={theme}>
          <FloatingWhatsAppButton phoneNumber="9996586910" />
          <Main />
        </ChakraBaseProvider>
      </CacheProvider>
    </div>
  );
}
