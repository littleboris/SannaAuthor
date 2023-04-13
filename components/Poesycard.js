import React from "react";
import { PortableText } from "@portabletext/react";
import { css } from "@emotion/react";

function Poesycard() {
  return (
    <section
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 40px;
        border-bottom: 0.5px solid black;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        `}
      >
        <span
          css={css`
            color: #f33c3c;
            border-bottom: 0.5px solid black;
          `}
        >
          Recent Posts
        </span>
        <h3
          css={css`
            font-size: 2.4rem;
            color: #2b2b2b;
            font-weight: 200;
          `}
        >
          Sanna Nickius
        </h3>
      </div>

      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px 0px;
          flex-wrap: wrap;
        `}
      >
        <div
          css={css`
            width: 350px;
            background-color: white;

            margin: 20px;
            box-shadow: rgba(50, 50, 93, 0.25) -0px 1px 6px 0px,
              grey 0px 0px 2px -1px; ;
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 360px;
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
              `}
              src="https://www.womanlifefreedom.today/download/artwork/Mahsa-Amini-Version-2.jpg"
              alt="Photo of something"
            />
          </div>
          <div
            css={css`
              padding: 30px;
              display: flex;
              flex-direction: column;
            `}
          >
            <span
              css={css`
                color: #f33c3c;
                font-size: 0.9rem;
              `}
            >
              18 July 2021 / Poetry
            </span>
            <a
              href="#"
              css={css`
                font-size: 1.3rem;
                font-weight: 500;
                color: black;
                &:hover {
                  color: #f33c3c;
                  transition: all ease 0.3s;
                }
              `}
            >
              The Shroud Of Fear
            </a>
            <p
              css={css`
                color: #9b9b9b;
                font-size: 0.9rem;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 20px;
              `}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusamus laborum, ab nobis distinctio repudiandae asperiores sed
              ullam optio id numquam obcaecati. Beatae ullam vel nulla eligendi
              dicta nam soluta?
            </p>
            <a
              href="#"
              css={css`
                color: #0f0f0f;
                &:hover {
                  color: #f33c3c;
                  transition: all ease 0.3s;
                }
              `}
            >
              Read More
            </a>
          </div>
        </div>
        <div
          css={css`
            width: 350px;
            background-color: white;

            margin: 20px;
            box-shadow: rgba(50, 50, 93, 0.25) -0px 1px 6px 0px,
              grey 0px 0px 2px -1px; ;
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 360px;
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
              `}
              src="https://www.womanlifefreedom.today/download/artwork/WLF_Mahdis-Nikou.jpg"
              alt="Photo of something"
            />
          </div>
          <div
            css={css`
              padding: 30px;
              display: flex;
              flex-direction: column;
            `}
          >
            <span
              css={css`
                color: #f33c3c;
                font-size: 0.9rem;
              `}
            >
              18 July 2021 / Poetry
            </span>
            <a
              href="#"
              css={css`
                font-size: 1.3rem;
                font-weight: 500;
                color: black;
                &:hover {
                  color: #f33c3c;
                  transition: all ease 0.3s;
                }
              `}
            >
              The Shroud Of Fear
            </a>
            <p
              css={css`
                color: #9b9b9b;
                font-size: 0.9rem;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 20px;
              `}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusamus laborum, ab nobis distinctio repudiandae asperiores sed
              ullam optio id numquam obcaecati. Beatae ullam vel nulla eligendi
              dicta nam soluta?
            </p>
            <a
              href="#"
              css={css`
                color: #0f0f0f;
                &:hover {
                  color: #f33c3c;
                  transition: all ease 0.3s;
                }
              `}
            >
              Read More
            </a>
          </div>
        </div>
        <div
          css={css`
            width: 350px;
            background-color: white;

            margin: 20px;
            box-shadow: rgba(50, 50, 93, 0.25) -0px 1px 6px 0px,
              grey 0px 0px 2px -1px; ;
          `}
        >
          <div
            css={css`
              width: 100%;
              height: 360px;
            `}
          >
            <img
              css={css`
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
              `}
              src="https://english.umd.edu/sites/default/files/styles/medium_640px_w/public/2022-11/Iran%20Protests%201.jpg?itok=dTQUfHTA"
              alt="Photo of something"
            />
          </div>
          <div
            css={css`
              padding: 30px;
              display: flex;
              flex-direction: column;
            `}
          >
            <span
              css={css`
                color: #f33c3c;
                font-size: 0.9rem;
              `}
            >
              18 July 2021 / Poetry
            </span>
            <a
              href="#"
              css={css`
                font-size: 1.3rem;
                font-weight: 500;
                color: black;
                &:hover {
                  color: #f33c3c;
                  transition: all ease 0.3s;
                }
              `}
            >
              The Shroud Of Fear
            </a>
            <p
              css={css`
                color: #9b9b9b;
                font-size: 0.9rem;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 20px;
              `}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusamus laborum, ab nobis distinctio repudiandae asperiores sed
              ullam optio id numquam obcaecati. Beatae ullam vel nulla eligendi
              dicta nam soluta?
            </p>
            <a
              href="#"
              css={css`
                color: #0f0f0f;
                &:hover {
                  color: #f33c3c;
                  transition: all ease 0.3s;
                }
              `}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Poesycard;
