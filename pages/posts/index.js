import Head from "next/head";
import { Fragment } from "react";
import Posts from "../../components/Posts/Posts";
import { posts } from "../../utils/data";

function AllPosts(props) {
  const { allPosts } = props;

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="a list of all pragramming reated content."
        />
      </Head>
      <Posts allPosts={allPosts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = posts;

  return {
    props: {
      allPosts,
    },
  };
}

export default AllPosts;
