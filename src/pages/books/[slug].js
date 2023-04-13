import client from "../../../client";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Bookcard from "../../../components/Bookcard";
export function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
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

const Books = ({ books, poems, book }) => {
  const router = useRouter();

  if (!router.isFallback && !books) {
    return <div />;
  }

  if (router.isFallback) {
    return <div />;
  }
  console.log(books);
  console.log(poems);

  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    mainImage,
    body = [],
  } = book;
  return (
    <Layout books={books} poems={poems}>
      <Bookcard books={books} poems={poems} book={book} />
      {/* <PortableText value={body} components={ptComponents} /> */}
    </Layout>
  );
};
//what i want returned from the API call

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "books" && defined(slug.current)][].slug.current
  `
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
//what i want returned from the API call
export async function getStaticProps(context) {
  const { slug } = context.params;
  const getDataFromApi = groq`*[_type in ["books"] && slug.current == "${slug}"][0]{
   _type == "books" => {
    title, _id, slug, mainImage,
    "name": author->name,
    "authorImage": author->image,
  body,
  "categories": categories[]->title,
  }
  
}`;

  const poems = await client.fetch(groq`
  *[_type == "poems"]{title, authorImage, publishedAt, categories, _id, slug, nickname}
  `);

  const books = await client.fetch(groq`
  *[_type == "books"]{title, authorImage, publishedAt, categories, _id, slug, nickname, mainImage}
  `);

  console.log(getDataFromApi);
  const book = await client.fetch(getDataFromApi);
  console.log(books);
  return {
    props: {
      book,
      books,
      poems,
    },
    notFound: books && poems && book ? false : true,
  };
}

export default Books;
