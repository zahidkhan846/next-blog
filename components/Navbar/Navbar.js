import classes from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <section className={classes.navbar}>
      <div className="container">
        <header className={classes.header}>
          <Link href="/">
            <a className={classes.logo}>
              <Image
                src="/images/logo.png"
                width={50}
                height={50}
                alt="brand-logo"
              />
              <h1 className={classes.brandTitle}>WebDev</h1>
            </a>
          </Link>
          <nav>
            <ul className={classes.navLinks}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/posts">All Posts</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about-me">About Me</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </section>
  );
}

export default Navbar;
