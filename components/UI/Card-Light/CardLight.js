import Image from "next/image";
import classes from "./CardLight.module.css";

function CardLight() {
  return (
    <article className={classes.cardLight}>
      <header className={classes.cardLightHeader}>
        <p className={classes.time}>January 20 2021</p>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          est.
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
          Zahid Khan
        </div>
      </div>
      <div class={classes.tagsLight}>
        <a href="#">html</a>
        <a href="#">css</a>
      </div>
    </article>
  );
}

export default CardLight;
