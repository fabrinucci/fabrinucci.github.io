import { useTranslation } from 'react-i18next'
import { SocialMedia } from '../../atoms/social'
import { navigation } from '../../data'

import styles from './Footer.module.css'

export const Footer = () => {
  const [text] = useTranslation('global')

  const handleNavigation = (event, sectionName) => {
    event.preventDefault()
    const targetElement = document.querySelector(`#${sectionName}`)
    targetElement.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <footer className={styles.Footer}>
      <h2>Fabrizio Nucci</h2>
      <ul className={styles.FooterNav}>
        {navigation.map(({ id, name, translate }) => (
          <li key={id}>
            <a
              onClick={(event) => handleNavigation(event, name)}
              href={`#${name}`}
            >
              {text(translate)}
            </a>
          </li>
        ))}
      </ul>
      <SocialMedia />
    </footer>
  )
}
