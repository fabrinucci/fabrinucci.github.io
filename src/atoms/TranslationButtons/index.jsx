import { useTranslation } from 'react-i18next'
import styles from './TranslationButtons.module.css'

import en from '../../assets/gb.svg'
import es from '../../assets/ar.svg'

export const TranslationButtons = () => {
  const [text, i18n] = useTranslation('global')

  const handleTranslation = (language) => {
    i18n.changeLanguage(language)
    window.localStorage.setItem('language', language)
  }

  return (
    <>
      <div className={styles.TranslationButtonContainer}>
        <button
          className={styles.TranslationButton}
          onClick={() => handleTranslation('en')}
        >
          <img src={en} alt={text('buttons.translateEn')} />
        </button>
      </div>
      <div className={styles.TranslationButtonContainer}>
        <button
          className={styles.TranslationButton}
          onClick={() => handleTranslation('es')}
        >
          <img src={es} alt={text('buttons.translateEs')} />
        </button>
      </div>
    </>
  )
}
