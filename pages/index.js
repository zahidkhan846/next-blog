import Head from "next/head";
import { Fragment } from "react";
import Contact from "../components/Contact/Contact";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Hero/Hero";

function HomePage(props) {
  const { data } = props;

  const featuredPosts = data.posts.filter((post) => post.isFeatured);

  return (
    <Fragment>
      <Head>
        <title>Home | Next Blog</title>
        <meta
          name="description"
          content="blog about programming and development."
        />
      </Head>
      <Hero />
      <FeaturedPosts featuredPosts={featuredPosts} />
      <Contact />
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/posts/get-posts`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
export default HomePage;
