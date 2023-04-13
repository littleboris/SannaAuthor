import React from "react";
import { css } from "@emotion/react";
import Menudrop from "../components/Menudrop";

const Navbar = ({ books, poems }) => {
  const color = "#2f2f2fc7";
  const navLinkStyle = css`
    display: flex;
    align-items: center;
    margin: 0 1rem;
    color: #2f2f2fc7;
    text-decoration: none;
    text-shadow: -0.25px -0.25px 0 transparent, 0.25px 0.25px transparent;
    transition: all 0.2s ease-in-out;
    height: 60px;
    &:hover {
      color: ${color};
    }
  `;

  return (
    <>
      <header
        css={css`
          margin-bottom: 0
          background-color: #e9ebee;
          box-shadow: black 0px 1px 10px 0px, white 0px 1px 3px 0px;
        `}
      >
        <nav
          css={css`
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            background-color: #fff;
          `}
        >
          <Menudrop poems={poems} books={books} />
          <div
            css={css`
              display: flex;
            `}
          >
            <a css={navLinkStyle} href="/#">
              Home
            </a>
            <a css={navLinkStyle} href="/Biotext">
              About Sanna
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
