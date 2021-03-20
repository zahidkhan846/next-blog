import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import Image from "next/image";
import Link from "next/link";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <section className={classes.sectionFooter}>
      <div className="container">
        <footer className={classes.footerContainer}>
          <div className={classes.footerLogo}>
            <Link href="/">
              <Image src="/images/logo.png" alt="logo" height={60} width={60} />
            </Link>
            <p>
              &copy; {new Date().getFullYear().toString()}{" "}
              <Link passHref={true} href="https://www.codewithzahid.com">
                Code with Zahid
              </Link>
            </p>
          </div>
          <div className={classes.subscription}>
            <form>
              <label htmlFor="email">Type Your Email</label>
              <input type="email" id="email" placeholder="user@domain.com" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className={classes.socialLinks}>
            <ul>
              <li>
                <Link passHref={true} href="https://www.facebook.com">
                  <Facebook className={classes.icon} />
                </Link>
              </li>
              <li>
                <Link passHref={true} href="https://www.twitter.com">
                  <Twitter className={classes.icon} />
                </Link>
              </li>
              <li>
                <Link passHref={true} href="https://www.linkedin.com">
                  <LinkedIn className={classes.icon} />
                </Link>
              </li>
              <li>
                <Link passHref={true} href="https://www.github.com">
                  <GitHub className={classes.icon} />
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
