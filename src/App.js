import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Component from "./Component";
export default function App() {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
}
