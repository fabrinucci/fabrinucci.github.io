import { useState, type MouseEvent } from 'react'
import { navigation } from '../data'
import styles from './NavMenu.module.css'

export const Navbar = () => {
  const [isActive, setIsActive] = useState('')

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionName: string
  ) => {
    event.preventDefault()
    setIsActive(sectionName)
    const targetElement = document.querySelector(sectionName)
    targetElement!.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <nav className={styles.NavMenu}>
      <ul>
        {navigation.map(({ name, Icon }) => (
          <li key={name}>
            <a
              onClick={(event) => handleNavigation(event, `#${name}`)}
              className={isActive === `#${name}` ? styles.active : ''}
              href={`#${name}`}
              rel='noopener noreferrer'
            >
              <Icon className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
