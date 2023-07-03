import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { navigation } from '../../data'

import styles from './NavMenu.module.css'

export const Nav = () => {
  const [isActive, setIsActive] = useState('')
  const [text] = useTranslation('global')

  const handleNavigation = (event, sectionName) => {
    event.preventDefault()
    setIsActive(sectionName)
    const targetElement = document.querySelector(sectionName)
    targetElement.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <nav className={styles.NavMenu}>
      <ul>
        {navigation.map(({ id, name, Icon, translate }) => (
          <li key={id}>
            <a
              onClick={(event) => handleNavigation(event, `#${name}`)}
              className={isActive === `#${name}` ? styles.active : ''}
              href={`#${name}`}
              rel='noopener noreferrer'
              aria-label={`${text(translate)} section`}
            >
              <Icon className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
