import Head from "next/head";
import { Fragment } from "react";
import Contact from "../components/Contact/Contact";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Hero/Hero";
import { posts } from "../utils/data";

function HomePage(props) {
  const { featuredPosts } = props;

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

export function getStaticProps() {
  const featuredPosts = posts.filter((post) => post.isFeatured);

  return {
    props: {
      featuredPosts,
    },
  };
}
export default HomePage;
