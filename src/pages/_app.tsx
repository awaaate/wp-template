import {
    Box,
    Button,
    CSSReset,
    IconButton,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    PseudoBox,
    Text,
    theme as chakraTheme,
    ThemeProvider,
} from "@chakra-ui/core";
import { AppProps } from "next/app";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
import React, { useState } from "react";
import "../styles/main.css";
//styles
import "../styles/toc.css";
import "../styles/utilities.css";
import "../styles/yt-player.css";

const breakpoints = ["40em", "52em", "64em"];

const theme = {
    ...chakraTheme,
    colors: {
        ...chakraTheme.colors,
        black: "#3C3C3C",
    },
    fonts: {
        body: `'Space Mono', monospace`,
        heading: `'Space Mono', monospace`,
        mono: `'Space Mono', monospace`,
    },
    breakpoints,
};

function App({ Component, pageProps }: AppProps) {
    const [cookiesAccepted, setCookiesAccepted] = useState(() => {
        if (
            typeof window !== "undefined" &&
            window.localStorage.getItem("k.a.e.b.s.t")
        ) {
            return true;
        }
        return false;
    });
    const cookieBarClick = () => {
        setCookiesAccepted(true);
    };
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <NextNprogress
                color="#3C3C3C"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Head key="app">
                <script
                    data-ad-client="ca-pub-7041296685943097"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                ></script>
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                    rel="stylesheet"
                />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
            {cookiesAccepted || <CookiesBanner click={cookieBarClick} />}
        </ThemeProvider>
    );
}
const CookiesBanner: React.FC<{ click: () => void }> = ({ click }) => (
    <Box
        bg="white"
        position="fixed"
        border="2px solid"
        w="full"
        display="flex"
        p={2}
        right="0"
        bottom="0"
    >
        <Popover>
            <PopoverTrigger>
                <PseudoBox
                    as="button"
                    w="full"
                    _hover={{
                        textDecor: "underline",
                    }}
                >
                    Política de cookies
                </PseudoBox>
            </PopoverTrigger>
            <PopoverContent zIndex={4}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    Este sitio web usa cookies de terceros para personalizar el
                    contenido y los anuncios y con motivos de análisis del
                    tráfico. La navegación por la web implica la aceptación de
                    las mismas, tal y como establece nuestra Política de Cookies
                </PopoverBody>
            </PopoverContent>
        </Popover>
        <Button
            variantColor="black"
            variant="outline"
            borderWidth="2px"
            m="2"
            rounded="0"
            w="full"
            onClick={() => {
                click();
                window.localStorage.setItem("k.a.e.b.s.t", "true");
            }}
        >
            Aceptar
        </Button>
    </Box>
);
export default App;
