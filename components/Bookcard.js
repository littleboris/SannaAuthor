import React from "react";
import { PortableText } from "@portabletext/react";
import { css } from "@emotion/react";
import { urlFor } from "@/pages/books/[slug]";

const ptComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl">{children}</h1>,
    normal: ({ children }) => <p>{children}</p>,
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)
            .image(value)
            .width(320)
            .height(240)
            .fit("max")
            .auto("format")}
        />
      );
    },
  },
};

function Bookcard({ books, poems, book }) {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    mainImage,
    authorImage,
    body = [],
  } = book;

  // styling

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 460px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    margin: 10px;
    background-color: #fff;
  `;
  // background-color: #f7f8f9;
  const imageStyle = css`
    width: 100%;
    height: 70%;
  `;

  const infoContainerStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 30%;
    padding-top: 20px;
    // background-color: blue;
    width: 100%;
  `;
  // background-color: #f7f8f9;
  const titleStyle = css`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    // background-color: pink;
  `;
  // background-color: #e9ebee;
  const authorStyle = css`
    font-size: 16px;
    margin-right: 10px;
  `;

  const priceStyle = css`
    font-size: 16px;
    font-weight: bold;
  `;

  const grandContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    // background-color: yellow;
  `;

  console.log(book.ptComponents);
  return (
    <div css={grandContainer}>
      <div css={containerStyle}>
        <img
          alt={mainImage?.alt ?? " "}
          loading="lazy"
          src={urlFor(mainImage)
            .image(mainImage)
            // .width(320)
            // .height(240)
            .fit("max")
            .auto("format")}
        />
        {/* <img src={imageUrl} alt={title} css={imageStyle} /> */}
        <div css={infoContainerStyle}>
          <div>
            {/* <div css={titleStyle}>{title}</div> */}
            <div css={authorStyle}>by {name}</div>
          </div>
          <div css={priceStyle}></div>
        </div>
      </div>
      <div css={containerStyle}>
        {/* <img src={imageUrl} alt={title} css={imageStyle} /> */}

        <div css={infoContainerStyle}>
          <div>
            <div css={titleStyle}>{title}</div>

            <div css={authorStyle}></div>
          </div>
          <div css={priceStyle}></div>
        </div>
        <div
          css={css`
            padding-left: 20px;
            padding-right: 20px;
          `}
        >
          <PortableText value={book.body} components={ptComponents} />
        </div>
      </div>
    </div>
  );
}

export default Bookcard;
