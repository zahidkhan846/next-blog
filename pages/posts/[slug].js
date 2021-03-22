import Post from "../../components/Posts/Post/Post";
import { findBySlug, posts } from "../../content/data";

function SinglePost(props) {
  const { singlePost } = props;

  return <Post post={singlePost} />;
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
