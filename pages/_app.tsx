import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Header from "../components/Header";

// export const theme = extendTheme({
//     fonts: {
//         fonts: {
//             heading: `'Open Sans', sans-serif`,
//             body: `'Raleway', sans-serif`,
//         },
//     },
// });

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Header />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
