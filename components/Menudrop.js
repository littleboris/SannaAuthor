import * as React from "react";
import { css } from "@emotion/react";
import { useClickOutside } from "@mantine/hooks";

import Link from "next/link";

const Menudrop = ({ books, poems }) => {
  const [open, setOpen] = React.useState(false);
  const [openBooks, setOpenBooks] = React.useState(false);
  const [openPoems, setOpenPoems] = React.useState(false);
  const ref = useClickOutside(() => setOpen(false));

  //styling
  const menuStyleTwo = css`
    align-items: center;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);

    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    color: #2f2f2fc7;
    cursor: pointer;
    display: inline-flex;
    font-weight: 200;
    font: inherit;
    justify-content: center;
    line-height: 1.25;
    margin-left: 30px;
    min-height: 3rem;
    padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: 181px;

    &:hover,
    &:focus {
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
      color: rgba(0, 0, 0, 0.65);
    }

    &:hover {
      transform: translateY(-1px);
    }

    &:active {
      background-color: #f0f0f1;
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
      color: rgba(0, 0, 0, 0.65);
      transform: translateY(0);
    }
  `;

  const menuItemsButton = css`
    height: 100%;
    text-align: center;
    text-decoration: none;
    background: white;
    border: solid 0px #2f2f2fc7;
    color: #2f2f2fc7;
    padding: 10px 10px;
    font: inherit;
    cursor: pointer;
    font-weight: 200;
  `;
  const poemOrBookOptionOne = css`
    margin-left: 30px;
    background-color: #fff;

    width: 180px;
    text-align: center;
  `;
  const poemOrBookOptionTwo = css`
    margin-left: 30px;
    background-color: #fff;
    border: solid 0.1px #2f2f2fc7;
    width: 180px;
    text-align: center;
    margin-top: 1px;
    display: flex;
  `;
  const ul = css`
    position: absolute;
    list-style-type: none;
    margin: 5px 0;
    padding: 0;

    width: 200px;
  `;

  const booksNovelsBtn = css`
    width: 100%;
    height: 100%;
    text-align: left;
    justify-content: center;
    align-items: center;
    background: none;
    color: #2f2f2fc7;
    border: solid 0px #2f2f2fc7;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
    margin-left: 42px;
  `;

  const menuOptions = css`
    width: 100%;
    text-decoration: none;
    padding-top: 5px;
    padding-bottom: 5px;
    align-items: center;
    justify-content: center;
    display: flex;
    &:hover {
      background-color: #e2e4f6e8;
    }
  `;

  const menuItemLinkBook = css`
    margin-top: 10px;
    margin-bottom; 10px;
    text-decoration: none;
    color: #2f2f2fc7;
    line-height: 39px;
  
  `;

  const menuItemLinkBookSpan = css`
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-size: 12px;
    line-height: 1;
    transition-property: background-color, color, box-shadow, filter;
    transition-duration: 0.3s;
    letter-spacing: 2px;
    min-width: 140px;
    text-transform: uppercase;
    white-space: normal;
    font-weight: 700;
    text-align: center;
    padding: 16px 10px 0px;
    color: #616467;
    justify-content: center;
    background-color: transparent;
    height: 48px;
    &:hover {
      color: #fff;
      background-color: #616467;
    }
  `;

  const titleText = css`
    color: red;
  `;
  //
  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

  return (
    <div>
      <button css={menuStyleTwo} onClick={() => setOpen(true)}>
        Books & Novels
      </button>
      {open && (
        <ul ref={ref} css={ul}>
          <li css={poemOrBookOptionOne}> </li>
          <li css={poemOrBookOptionTwo}>
            {" "}
            <p
              css={css`
                margin: 0;
                font-weight: 400;
                margin-top: 10px;
              `}
            ></p>
            <div css={menuItemsButton} onClick={handleMenuTwo}>
              {books.length > 0 &&
                books.map(
                  ({ _id, title = "", slug = "", publishedAt = "" }) =>
                    slug && (
                      <li key={_id} css={menuItemLinkBook}>
                        <Link
                          css={menuItemLinkBookSpan}
                          href="/books/[slug]"
                          as={`/books/${slug.current}`}
                        >
                          {title}
                        </Link>{" "}
                        {/* ({new Date(publishedAt).toDateString()}) */}
                      </li>
                    )
                )}
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Menudrop;
