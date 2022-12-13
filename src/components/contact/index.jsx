import styles from "./Contact.module.css";
import { contact } from '../../data';
import { PrimaryButton } from '../../atoms/buttons'

export const Contact = () => {
  return (
    <section className={`${styles.Contact} container`} id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact</h2>
      <div className={styles.ContactContainer}>
        <div className={styles.ContactOptions}>
          {
            contact.map(({ id, Icon, title, href }) => (
              <article key={id}>
                <Icon className={styles.icon} />
                <h4>{title}</h4>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  Send A Message
                </a>
              </article>  
            ))
          }
        </div>
        <form className={styles.ContactForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <PrimaryButton>
            Send Message
          </PrimaryButton>
        </form>
      </div>
    </section>
  );
};
