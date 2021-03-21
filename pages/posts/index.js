import CardLight from "../../components/UI/Card-Light/CardLight";

function AllPosts() {
  return (
    <section className="all-posts-container">
      <h1 className="py-1 text-center featured">All Posts</h1>
      <div className="underline"></div>
      <div className="card-list-all-posts">
        <section className="light-card-container">
          <CardLight />
          <CardLight />
          <CardLight />
          <CardLight />
          <CardLight />
          <CardLight />
          <CardLight />
          <CardLight />
          <CardLight />
        </section>
      </div>
    </section>
  );
}

export default AllPosts;
