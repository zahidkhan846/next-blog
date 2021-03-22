import { Fragment } from "react";
import Contact from "../components/Contact/Contact";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Hero/Hero";
import { posts } from "../content/data";

function HomePage(props) {
  const { featuredPosts } = props;

  return (
    <Fragment>
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
