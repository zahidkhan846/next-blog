import { useState } from "react";
import styles from "./Auth.module.css";
import classes from "../../styles/form.module.css";
import Link from "next/link";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = () => {};

  return (
    <section>
      <div className={classes.heading}>
        <h1 className="text-center featured font-big">Login</h1>
        <div className="underline"></div>
      </div>
      <article className={classes.form}>
        <form onSubmit={handleSubmit}>
          <h2 className={styles.loginHeading}>Credentials...</h2>
          <div className={classes.formControl}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="user@domain.com"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password..."
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
            />
          </div>
          <div className={classes.btn}>
            <button
              type="submit"
              className={`${classes.submitButton} ${styles.loginBtn}`}
            >
              Send Message
            </button>
          </div>
        </form>
      </article>
      <div className={styles.formFooter}>
        <p>
          Don't have account? <Link href="/auth/register">Register Here</Link>
        </p>
        <p>
          Forgot your password?{" "}
          <Link href="/auth/change-password">Change Password</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
