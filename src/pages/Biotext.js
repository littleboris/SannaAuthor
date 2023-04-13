import React from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import groq from "groq";
import client from "../../client";
import { css } from "@emotion/react";

function Biotext({ books, poems }) {
  return (
    <Layout books={books} poems={poems}>
      <div
        css={css`
          width: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <img
            src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg"
            alt="Photo of Sanna"
            css={css`
              border-radius: 50%;
              width: 360px;
              height: 360px;
            `}
          />
        </div>
        <h1
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          Biography
        </h1>
        <p
          css={css`
            padding-left: 100px;
            padding-right: 100px;
          `}
        >
          Sanna Nickius är född 1968 i Iran. Hon studerade bland annat persisk
          litteratur på högskolan i 5 år, innan hon kom till Sverige 1996. Idag
          arbetar hon som undersköterska samt jobbar på sin fritid som
          programledare på en persiskradio som heter radio Azadi i Göteborg.
          Sanna Nickius är medlem i Författarförbundet , Författarcentrum väst
          och författareförbunder i Iran, och hon är även medlen i svenska Pen.
          <br></br>
          Av Sanna Nickius har hittills publicerats: 1-Mashogheh (Älskarinna),
          novellsamling, sju noveller om sju kvinnors öden, persiska,
          Kitab-I-Arzan, Stockholm, 2003 2-Tvåbenta marsianer, en novell på
          svenska, ingår i antologin ”Kärleken är större”, nordienT förlag,
          Göteborg, 2010 3-Helena gozasht och raft (Helena lämnade allt och gav
          sig iväg), novellsamling, 33 berättelser på persiska, Mehri
          Publication, London, 2019 5-Panj sant fasele (fem centimeters
          avstånd), roman, persiska, 2019, Teheran, Sarat förlag 6-Matarsaki bar
          faraz ghalbam,
          <br></br>
          Fågelskrämman över mitt hjärta, diktsamling på persiska,
          Kitab-I-Arzan, Stockholm, 2020 7-Bajad asheghat beshavam har che
          saarietar, jag måste bli kär i dig så fort som möjligt, diktsamling på
          persiska, Kitab-I-Arzan, Stockholm 2022 8- Pazele zendegi, livets
          pusselbitar, roman på persiska, Sergispub, Iran 2022. Helena gozasht
          och raft (Helena lämnade allt och gav sig iväg), novellsamlingingen
          handlar till större delen om huvudkaraktärernas relation till andra
          människor och till omvärlden i vår samtid. Även om kvinnliga
          karaktärer är dominerande i novellerna, finns det också ett
          häpnadsväckande antal andra karaktärer vars kön, ålder, etnisk
          tillhörighet och livssituation spänner över ett brett spektrum. En
          författarstil där Sanna skriver utifrån flera olika perspektiv och
          roller. Berättelserna känns alltigenom vardagliga och trovärdiga.
          Sanna Nickius använder ett okonstlat språk, som går hand i hand med
          sin berättarteknik. Språkbruket är korrekt och anpassas vid behöv
          efter de karaktärer som berättelsen handlar om och som är inbegripna i
          dialoger. Berättarglädjen gör sig ofta påmind även genom språkdräkten.
        </p>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const poems = await client.fetch(groq`
  *[_type == "poems"]{title, _id, slug, nickname}
  `);

  const books = await client.fetch(groq`
  *[_type == "books"]{title, _id, slug, nickname}
  `);

  return {
    props: {
      poems,
      books,
    },
  };
}

export default Biotext;
