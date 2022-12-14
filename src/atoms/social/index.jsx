import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import styles from './SocialMedia.module.css';

export const SocialMedia = () => {
  return (
    <ul className={styles.SocialList}>
      <li>
        <a
          href='https://github.com/fabrinucci'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a 
          href='https://www.linkedin.com/in/fabrinucci/' 
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li>
        <a
          href='https://twitter.com/FabrizioDev'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Twitter'
        >
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
};