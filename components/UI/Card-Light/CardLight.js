import { Delete } from "@material-ui/icons";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import classes from "./CardLight.module.css";

function CardLight({ post }) {
  const handleDelete = async () => {
    const res = await fetch(`/api/posts/${post._id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <article className={classes.cardLight}>
      <header className={classes.cardLightHeader}>
        <p className={classes.time}>
          {moment(post.createdAt).format("MMMM Do YYYY")}
        </p>
        <h2 className="text-dark">
          <Link href={`/posts/${post._id}`}>{post.title}</Link>
        </h2>
      </header>
      <div className={classes.cardLightAuthor}>
        <a href="#!" className={classes.authorAvatarLight}>
          <Image src="/images/me.jpg" alt="me" width={40} height={40} />
        </a>
        <svg className={classes.halfCircleLight} viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>
        <div className={classes.authorNameLight}>
          <div className={classes.authorNamePrefixLight}>Auhor</div>
          {post.author}
        </div>
      </div>
      <div className={classes.tagsLight}>
        {post.tags.map((tag, index) => (
          <Link key={index} href="/">
            {tag}
          </Link>
        ))}
      </div>
      <div className={classes.deleteSection}>
        <button onClick={handleDelete}>
          <Delete color="inherit" />
        </button>
      </div>
    </article>
  );
}

export default CardLight;
