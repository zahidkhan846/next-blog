import Image from "next/image";
import classes from "./Card.module.css";

function Card({ createdAt, excerpt, author, image, slug, tags }) {
  return (
    <article className={classes.card}>
      <header className={classes.cardHeader}>
        <p className={classes.time}>{createdAt}</p>
        <h2>{excerpt}</h2>
      </header>
      <div className={classes.cardAuthor}>
        <a href="#!" className={classes.authorAvatar}>
          <Image src="/images/me.jpg" alt="me" width={40} height={40} />
        </a>
        <svg className={classes.halfCircle} viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>
        <div className={classes.authorName}>
          <div className={classes.authorNamePrefix}>Auhor</div>
          {author}
        </div>
      </div>
      <div class={classes.tags}>
        <a href="#">html</a>
        <a href="#">css</a>
      </div>
    </article>
  );
}

export default Card;
