import { AppProps } from "next/app";
import { Fragment } from "react";
import Head from "next/head";

import "../styles/main.css";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider >
            <CSSReset />
            <Head key="app">
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
