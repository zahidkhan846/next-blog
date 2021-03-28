import Head from "next/head";
import { Fragment } from "react";
import Posts from "../../components/Posts/Posts";

function AllPosts() {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="a list of all pragramming reated content."
        />
      </Head>
      <Posts />
    </Fragment>
  );
}

export default AllPosts;
