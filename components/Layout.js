import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { css } from "@emotion/react";
import Poesycard from "./Poesycard";

function Layout({ children, poems, books }) {
  return (
    <>
      <Navbar books={books} poems={poems} />

      <main
        css={css`
          min-height: 40vh;
          background-color: #e9ebee;
          padding-top: 0px;
          padding-bottom: 110px;
          width: 100%;

          box-shadow: rgba(50, 50, 93, 0.25) -0px 1px 6px 0px,
            grey 0px 0px 2px -1px; ;
        `}
      >
        {children}
        <Poesycard />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
