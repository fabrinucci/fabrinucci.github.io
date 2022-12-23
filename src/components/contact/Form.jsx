import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export const Form = ({ styles }) => {
  const [text] = useTranslation('global');

  const form = useRef();

  const SERVICE_ID = 'service_b319ey6';
  const TEMPLATE_ID = 'template_t7i4jge';
  const PUBLIC_KEY = 'L7_RbvROE317Ad4DD';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          console.log('Mensaje enviado');
        },
        (error) => {
          console.log(error.text);
        }
      );
    
      e.target.reset();
  };

  return (
    <form 
      ref={form} 
      onSubmit={sendEmail} 
      className={styles.ContactForm}
    >
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
      
      <button 
        type='submit'
        className='btn btn-primary'
      >
        {text('contact.messageBtn')}
      </button>
    </form>
  );
};
