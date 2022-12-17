import { useTranslation } from 'react-i18next';
import { projects } from '../../data';

import styles from './Projects.module.css';

export const Projects = () => {
  const [text] = useTranslation('global');
  
  return (
    <section className={`${styles.Projects} container`} id='projects'>
      <h4>{text('projects.subtitle')}</h4>
      <h2>{text('projects.title')}</h2>
      <div className={styles.Cards}>
        {
          projects.map(({ id, title, img, gitUrl, demoUrl }) => (
            <article key={ id }>
              <img src={ img } alt={ text(title) } />
              <div className={styles.CardInfo}>
                <h3>{ text(title) }</h3>
                <div className={styles.buttons}>
                  <a 
                    className='btn btn-secondary'
                    href={ gitUrl } 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={text('projects.source')}
                  >
                    GitHub
                  </a>
                  <a 
                    className='btn btn-primary'
                    href={ demoUrl } 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={text('projects.demo')}
                  >
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}
