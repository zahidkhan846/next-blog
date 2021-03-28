import Head from "next/head";
import { Fragment } from "react";
import Posts from "../../components/Posts/Posts";

function AllPosts(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="a list of all pragramming reated content."
        />
      </Head>
      <Posts posts={props.data.posts} />
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

export default AllPosts;
