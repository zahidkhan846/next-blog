import { useSession } from "next-auth/client";
import CardLight from "../UI/Card-Light/CardLight";
import AddPost from "../UI/Buttons/AddPost";

function Posts({ allPosts }) {
  const [session, loading] = useSession();

  return (
    <section className="all-posts-container">
      <h1 className="py-1 text-center featured">All Posts</h1>
      <div className="underline"></div>
      {session && <AddPost />}
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

export default Posts;
