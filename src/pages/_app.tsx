import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import NextNprogress from "nextjs-progressbar";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/toc.css";
import "../styles/yt-player.css";
import "../styles/main.css";
import "../styles/utilities.css";

function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <CSSReset />
            <NextNprogress
                color="#363441"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Head key="app">
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;
