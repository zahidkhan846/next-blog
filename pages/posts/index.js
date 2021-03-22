import CardLight from "../../components/UI/Card-Light/CardLight";
import { posts } from "../../content/data";

function AllPosts(props) {
  const { allPosts } = props;

  return (
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
