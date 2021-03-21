import CardLight from "../../components/UI/Card-Light/CardLight";
import { posts } from "../../content/data";

function AllPosts() {
  return (
    <section className="all-posts-container">
      <h1 className="py-1 text-center featured">All Posts</h1>
      <div className="underline"></div>
      <div className="card-list-all-posts">
        <section className="light-card-container">
          {posts &&
            posts.map((post) => <CardLight key={post.id} post={post} />)}
        </section>
      </div>
    </section>
  );
}

export default AllPosts;
