import { Global, css } from "@emotion/react";
import Layout from "../../components/Layout";
import { Titillium_Web } from "next/font/google";
const inter = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "200"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: ${inter.style.fontFamily};
            min-height: 100vh;
            width; 100%;
            color: #2f2f2fc7;
          }
        `}
      />

      <Component {...pageProps} />
    </>
  );
}
