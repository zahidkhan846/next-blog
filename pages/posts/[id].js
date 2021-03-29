import Head from "next/head";
import { Fragment } from "react";
import Post from "../../components/Posts/Post/Post";

function SinglePost(props) {
  const { post } = props.data;

  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
      </Head>
      <Post post={post} />;
    </Fragment>
  );
}

export const getServerSideProps = async (context) => {
  const { params } = context;

  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default SinglePost;
