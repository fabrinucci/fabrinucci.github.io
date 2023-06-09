import { useTranslation } from 'react-i18next'
import styles from './TranslationButton.module.css'

import en from '../../assets/gb.svg'
import es from '../../assets/ar.svg'

export const TranslationButton = () => {
  const [text, i18n] = useTranslation('global')

  const handleTranslation = (language) => {
    i18n.changeLanguage(language)
    window.localStorage.setItem('language', language)
  }

  return (
    <>
      <button
        className={styles.TranslationButton}
        onClick={() => handleTranslation('en')}
      >
        <img src={en} alt={text('buttons.translateEn')} />
      </button>
      <button
        className={styles.TranslationButton}
        onClick={() => handleTranslation('es')}
      >
        <img src={es} alt={text('buttons.translateEs')} />
      </button>
    </>
  )
}
