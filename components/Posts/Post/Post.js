import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import classes from "../Post/Post.module.css";

function Post({ post }) {
  const newDate = new Date(post.createdAt).toISOString();

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
          <Image
            src="/images/posts/hero.jpg"
            alt="hero"
            height={300}
            width={500}
          />
        </div>
        <div className={classes.singlePostContent}>
          <p className={classes.time}>
            <span>Posted on</span> {moment(newDate).format("MMMM Do YYYY")}
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
