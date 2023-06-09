import { useTranslation } from 'react-i18next'
import { SocialMedia } from '../../atoms/social'
import styles from './Footer.module.css'

export const Footer = () => {
  const [text] = useTranslation('global')

  return (
    <footer className={styles.Footer}>
      <h2>Fabrizio Nucci</h2>
      <ul className={styles.FooterNav}>
        <li>
          <a href='#home'>{text('nav.home')}</a>
        </li>
        <li>
          <a href='#skills'>{text('nav.skills')}</a>
        </li>
        <li>
          <a href='#projects'>{text('nav.projects')}</a>
        </li>
        <li>
          <a href='#contact'>{text('nav.contact')}</a>
        </li>
      </ul>
      <SocialMedia />
    </footer>
  )
}
