import { css } from "@emotion/react";
import groq from "groq";
import client from "../../client";
import Layout from "../../components/Layout";

const Index = ({ posts, projects, pets, books, poems }) => {
  console.log(books);

  return (
    <Layout books={books} poems={poems}>
      <img
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        `}
        src="https://hips.hearstapps.com/hmg-prod/images/hbz-iran-protest-22-index-1666731876.gif"
        alt="Women Life Freedom"
      />

      {/* <section
        css={css`
          display: flex;
          flex-direction: column;
          height: 70vh;
          width: 100%;
          background-color: white;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0px;
            background-color: white;
            height: 80px;
            width: 100%;
          `}
        >
          <img
            src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/48411563_10212445969415970_9150477340805955584_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=fNbPbp3UP_gAX9FzjCS&_nc_ht=scontent-arn2-1.xx&oh=00_AfDp6YmYywaz0-PZReeJPh7RG8dyFWGeJrPtoZu5NdQyxg&oe=64367A0B"
            alt="Photo of Sanna"
            css={css`
              border-radius: 100%;
              width: 100px;
              height: 100px;
              margin-left: 30px;
            `}
          />
          <h3
            css={css`
              padding-right: 360px;
              justify-content: center;
            `}
          >
            Hafez
          </h3>
        </div>
        <div
          css={css`
            margin-top: 60px;
            padding-left: 100px;
            padding-right: 100px;
          `}
        >
          بیا تا گل برافشانیم و می در ساغر اندازیم فلک را سقف بشکافیم و طرحی نو
          دراندازیم اگر غم لشکر انگیزد که خون عاشقان ریزد من و ساقی به هم تازیم
          و بنیادش براندازیم شراب ارغوانی را گلاب اندر قدح ریزیم نسیم عطرگردان
          را شِکَر در مجمر اندازیم چو در دست است رودی خوش بزن مطرب سرودی خوش که
          دست افشان غزل خوانیم و پاکوبان سر اندازیم صبا خاک وجود ما بدان عالی
          جناب انداز بود کان شاه خوبان را نظر بر منظر اندازیم یکی از عقل می‌لافد
          یکی طامات می‌بافد بیا کاین داوری‌ها را به پیش داور اندازیم بهشت عدن
          اگر خواهی بیا با ما به میخانه که از پای خمت روزی به حوض کوثر اندازیم
          سخندانیّ و خوشخوانی نمی‌ورزند در شیراز بیا حافظ که تا خود را به ملکی
          دیگر اندازیم
        </div>
      </section> */}
    </Layout>
  );
};

export async function getStaticProps() {
  // const posts = await client.fetch(groq`
  // *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  // `);

  // const projects = await client.fetch(groq`
  // *[_type == "projects"]{title, _id, slug}
  // `);

  // const pets = await client.fetch(groq`
  // *[_type == "pets"]{title, _id, slug, nickname}
  // `);

  const poems = await client.fetch(groq`
  *[_type == "poems" ]{title, _id, slug, nickname}
  `);

  const books = await client.fetch(groq`
  *[_type == "books" ]{_type, title, _id, slug, nickname}
  `);
  console.log(books);
  return {
    props: {
      // posts,
      // projects,
      // pets,
      poems,
      books,
    },
  };
}

export default Index;
