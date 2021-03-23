import Head from "next/head";
import { Fragment } from "react";
import CardLight from "../../components/UI/Card-Light/CardLight";
import { posts } from "../../content/data";

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
      <section className="all-posts-container">
        <h1 className="py-1 text-center featured">All Posts</h1>
        <div className="underline"></div>
        <div className="card-list-all-posts">
          <section className="light-card-container">
            {allPosts.map((post) => (
              <CardLight key={post.id} post={post} />
            ))}
          </section>
        </div>
      </section>
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
