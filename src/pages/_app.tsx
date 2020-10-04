import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/toc.css";
import "../styles/yt-player.css";
import "../styles/main.css";
import "../styles/utilities.css";

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
