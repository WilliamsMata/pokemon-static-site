import type { AppProps } from "next/app";
import { NextUIProvider, useSSR } from "@nextui-org/react";

import { darkTheme } from "@/themes";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR();

  return (
    isBrowser && (
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    )
  );
}
