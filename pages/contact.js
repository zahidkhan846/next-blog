import classes from "../styles/contact.module.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section>
      <div className={classes.heading}>
        <h1 className="text-center featured font-big">Contact Me</h1>
        <div className="underline"></div>
      </div>
      <article className={classes.contactForm}>
        <form onSubmit={handleSubmit}>
          <h2>Say Hello...</h2>
          <div className={classes.formControl}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name..."
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email..." />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <div className={classes.btn}>
            <button type="submit" className={classes.submitButton}>
              Send Message
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}

export default Contact;
