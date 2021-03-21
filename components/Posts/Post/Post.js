import Image from "next/image";
import Link from "next/link";
import classes from "../Post/Post.module.css";

const slug = "getting-started-with-next-js";
const image = "hero.jpg";

const post = {
  title: "Nest Js the React Framework Slug",
  slug: "getting-started-with-next-js",
  createdAt: "January 20 2021",
  content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
  quidem. Unde officia ipsa nulla magnam voluptatem vel ut nemo,
  debitis aut laborum cumque eveniet quod alias obcaecati porro
  molestiae quibusdam minima veritatis et aliquam non in facere sed!
  Nemo ipsam deleniti reprehenderit, nesciunt veritatis ullam minus
  blanditiis consequatur placeat quisquam!`,
  author: "Zahid Khan",
  image: `/images/posts/${slug}/${image}`,
};

function Post() {
  return (
    <section>
      <div className="py-2">
        <h1 className="text-center py-min font-big featured">Single Page</h1>
        <div className="underline"></div>
      </div>
      <article className={classes.singlePageContainer}>
        <div className="my-min">
          <h2>{post.title}</h2>
        </div>
        <div>
          <Image src={post.image} alt="hero" height={300} width={500} />
        </div>
        <div className={classes.singlePostContent}>
          <p className={classes.time}>
            <span>Posted on</span> {post.createdAt}
          </p>
          <p className="py-1">{post.content}</p>
          <p className={classes.author}>
            <span>Written by</span> {post.author}
          </p>
        </div>
        <div className="my-2">
          <Link href="/">Go Back to Home</Link>
        </div>
      </article>
    </section>
  );
}

export default Post;
