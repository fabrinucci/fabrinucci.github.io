import { useTranslation } from 'react-i18next'
import { skills } from '../../data'

import styles from './Skills.module.css'

export const Skills = () => {
  const [text] = useTranslation('global')

  return (
    <section className={`${styles.Skills} container`} id='skills'>
      <h4>{text('skills.subtitle')}</h4>
      <h2>{text('skills.title')}</h2>
      <div className={styles.Card}>
        <div className={styles.Content}>
          {skills.map(({ id, name, Icon }) => (
            <article key={id} className={styles.Details}>
              <Icon />
              <h4>{name}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
