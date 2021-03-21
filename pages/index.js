import { Fragment } from "react";
import Contact from "../components/Contact/Contact";
import FeaturedPosts from "../components/FeaturedPosts/FeaturedPosts";
import Hero from "../components/Hero/Hero";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
      <Contact />
    </Fragment>
  );
}
export default HomePage;
