import Card from "../UI/Card/Card";

function FeaturedPosts() {
  return (
    <section className="featured-container">
      <h1 className="py-1 text-center featured">Featured Posts</h1>
      <div className="underline"></div>
      <div className="card-list">
        <Card
          createdAt="May 25th 2021"
          excerpt="Card tricks are fun. Hello world!"
          author="Zahid Khan"
        />
        <Card
          createdAt="May 25th 2021"
          excerpt="Card tricks are fun. Hello world!"
          author="Zahid Khan"
        />
        <Card
          createdAt="May 25th 2021"
          excerpt="Card tricks are fun. Hello world!"
          author="Zahid Khan"
        />
        <Card
          createdAt="May 25th 2021"
          excerpt="Card tricks are fun. Hello world!"
          author="Zahid Khan"
        />
        <Card
          createdAt="May 25th 2021"
          excerpt="Card tricks are fun. Hello world!"
          author="Zahid Khan"
        />
        <Card
          createdAt="May 25th 2021"
          excerpt="Card tricks are fun. Hello world!"
          author="Zahid Khan"
        />
        <Card
          createdAt="May 25th 2021"
          excerpt="Card tricks are fun. Hello world!"
          author="Zahid Khan"
        />
        <Card
          createdAt="May 25th 2021"
          excerpt="Card tricks are fun. Hello world!"
          author="Zahid Khan"
        />
      </div>
    </section>
  );
}

export default FeaturedPosts;
