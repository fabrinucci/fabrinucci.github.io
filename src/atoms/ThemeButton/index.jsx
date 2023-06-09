import { RiMoonFill, RiSunLine } from 'react-icons/ri'

import styles from './ThemeButton.module.css'

export const ThemeButton = ({ theme, setTheme }) => {
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div>
      <button
        onClick={switchTheme}
        className={`${styles.switch} ${theme === 'dark' && styles.active}`}
      >
        <RiSunLine />
        <RiMoonFill />
      </button>
    </div>
  )
}
