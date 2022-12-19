import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';
import { contact } from '../../data';

export const Contact = () => {

  const [text] = useTranslation('global');

  return (
    <section className={`${styles.Contact} container`} id='contact'>
      <h4>{text('contact.subtitle')}</h4>
      <h2>{text('contact.title')}</h2>
      <div className={styles.ContactContainer}>
        <div className={styles.ContactOptions}>
          {
            contact.map(({ id, Icon, title, href }) => (
              <article key={id}>
                <Icon className={styles.icon} />
                <h4>{title}</h4>
                <a 
                  href={href} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  aria-label={`${text('contact.sendMessage')} ${title}`}
                >
                  {text('contact.sendMessage')}
                </a>
              </article>  
            ))
          }
        </div>
        <form className={styles.ContactForm}>
          <input
            type='text'
            name='name'
            placeholder={text('contact.name')}
            required
            autoComplete='off'
          />
          <input
            type='email'
            name='email'
            placeholder={text('contact.email')}
            required
            autoComplete='off'
          />
          <textarea
            name='message'
            rows='7'
            placeholder={text('contact.message')}
            required
          ></textarea>
          <button className='btn btn-primary'>
            {text('contact.messageBtn')}
          </button>
        </form>
      </div>
    </section>
  );
};