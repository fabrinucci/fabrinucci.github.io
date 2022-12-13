import { SocialMedia } from '../../atoms/social';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h2>Fabrizio Nucci</h2>
      <ul className={styles.FooterNav}>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <SocialMedia />
    </footer>
  )
}
