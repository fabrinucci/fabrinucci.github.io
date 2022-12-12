import { useTranslation } from 'react-i18next';
import { PrimaryButton, SecondaryButton } from '../../atoms/buttons';
import { SocialMedia } from '../../atoms/social';
import styles from './Header.module.css';
import me from '../../assets/me.jpg';

const avatar = 'https://xsgames.co/randomusers/assets/avatars/male/9.jpg';

export const Header = () => {

  const [text] = useTranslation('global');

  return (
    <header id='home' className={styles.Header}>
      <section className={styles.head}>
        <div className={styles.info}>
          <h4>{text('header.greeting')}</h4>
          <h1>{text('header.name')}</h1>
          <h3>{text('header.work')}</h3>
        </div>
        <div className={styles.buttons}>
          <SecondaryButton>{text('buttons.cv')}</SecondaryButton>
          <PrimaryButton>{text('buttons.contact')}</PrimaryButton>
        </div>
      </section>
      <section className={styles.body}>
        <figure>
          <img src={me} alt="" />
        </figure>
        <div className={styles.about}>
          <h3>{text('header.about')}</h3>
          <p>{text('header.description')}</p>
        </div>
      </section>
        <SocialMedia />
    </header>
  )
}
