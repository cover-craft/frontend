import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";

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
            <Global
                styles={` 
            body {
                font-family: "nexon-regular";
            }
            button {
                font-family: "nexon-light";
            }
            `}
            />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
