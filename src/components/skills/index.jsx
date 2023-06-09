import { HiCheckBadge } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'
import styles from './Skills.module.css'
import { experience } from '../../data'

export const Skills = () => {
  const [text] = useTranslation('global')

  return (
    <section className={`${styles.Skills} container`} id='skills'>
      <h4>{text('skills.subtitle')}</h4>
      <h2>{text('skills.title')}</h2>
      <div className={styles.Card}>
        <div className={styles.Content}>
          {experience.map(({ id, name, level }) => (
            <article key={id} className={styles.Details}>
              <HiCheckBadge />
              <div>
                <h4>{name}</h4>
                <small>{text(level)}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
