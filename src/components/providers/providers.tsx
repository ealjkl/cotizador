// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

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

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
