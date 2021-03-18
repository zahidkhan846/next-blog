import { Fragment } from "react";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Hero/Hero";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}
export default HomePage;
