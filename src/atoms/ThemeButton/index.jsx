import { RiMoonFill, RiSunLine } from 'react-icons/ri'

import styles from './ThemeButton.module.css'
import { useTranslation } from 'react-i18next'

export const ThemeButton = ({ theme, setTheme }) => {
  const [text] = useTranslation('global')

  const switchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div>
      <button
        onClick={switchTheme}
        className={`${styles.switch} ${theme === 'dark' && styles.active}`}
        aria-label={
          theme === 'dark'
            ? text('buttons.themeLight')
            : text('buttons.themeDark')
        }
      >
        <RiSunLine />
        <RiMoonFill />
      </button>
    </div>
  )
}
