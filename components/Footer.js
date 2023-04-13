import React from "react";
import { css } from "@emotion/react";

function Footer() {
  const footer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 180px;
    width: 100%;
  `;

  const footerKontakt = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 200;
    text-decoration: none;
    color: #2f2f2fc7;
    cursor: pointer;
    margin: 14px;
  `;

  const footerField = css`
    display: column;
  `;
  return (
    <footer css={footer}>
      <div css={footerField}>
        <a
          href="mailto:sanna.nickius1968@gmail.com"
          target="_blank"
          css={footerKontakt}
        >
          Contact
        </a>
        <a href="/Biotext" css={footerKontakt}>
          About Sanna
        </a>
        <a
          css={footerKontakt}
          href="https://www.instagram.com/sannanickius/"
          target="_blank"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/sanna.nickius"
          target="_blank"
          css={footerKontakt}
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;
