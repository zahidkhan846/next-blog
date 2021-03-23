import Head from "next/head";
import { Fragment } from "react";
import Post from "../../components/Posts/Post/Post";
import { findBySlug, posts } from "../../content/data";

function SinglePost(props) {
  const { singlePost } = props;

  return (
    <Fragment>
      <Head>
        <title>{singlePost.title}</title>
        <meta name="description" content={singlePost.title} />
      </Head>
      <Post post={singlePost} />;
    </Fragment>
  );
}

export const getStaticProps = (context) => {
  const { params } = context;

  const { slug } = params;

  const singlePost = findBySlug(slug);

  return {
    props: {
      singlePost,
    },
  };
};

export const getStaticPaths = () => {
  const slugs = posts.map((post) => post.slug);

  const paths = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default SinglePost;
