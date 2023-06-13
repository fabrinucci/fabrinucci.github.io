import { useTranslation } from 'react-i18next'
import { SocialMedia } from '../../atoms/social'
import { TranslationButtons } from '../../atoms/TranslationButtons'
import { ThemeButton } from '../../atoms/ThemeButton'

import styles from './Header.module.css'
import me from '../../assets/me.jpg'

export const Header = ({ theme, setTheme }) => {
  const [text] = useTranslation('global')

  return (
    <header id='home' className={styles.Header}>
      <div className={styles.buttonsContainer}>
        <TranslationButtons />

        <ThemeButton theme={theme} setTheme={setTheme} />
      </div>
      <section className={styles.head}>
        <div className={styles.info}>
          <h4>{text('header.greeting')}</h4>
          <h1>{text('header.name')}</h1>
          <h3>{text('header.work')}</h3>
        </div>
        <div className={styles.buttons}>
          <a className='btn btn-secondary' href='#'>
            {text('buttons.cv')}
          </a>
          <a className='btn btn-primary' href='#contact'>
            {text('buttons.contact')}
          </a>
        </div>
      </section>
      <section className={styles.body}>
        <div className={styles.figureContainer}>
          <figure>
            <img src={me} alt='My profile photo' />
          </figure>
        </div>
        <div className={styles.about}>
          <h3>{text('header.about')}</h3>
          <p>{text('header.description')}</p>
        </div>
      </section>
      <SocialMedia />
    </header>
  )
}
