import { PrimaryButton, SecondaryButton } from '../../atoms/buttons';
import style from './Projects.module.css';

import { projects } from '../../data';

export const Projects = () => {
  return (
    <section className={style.Projects} id='projects'>
      <h4>My recent works</h4>
      <h2>Projects</h2>
      <div className={style.Cards}>
        {
          projects.map(({ id, title, img, gitUrl, demoUrl }) => (
            <article key={ id }>
              <img src={ img } alt={ title } />
              <div className={style.CardInfo}>
                <h3>{ title }</h3>
                <div className={style.buttons}>
                  <a 
                    href={ gitUrl } 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <SecondaryButton>
                      GitHub
                    </SecondaryButton>
                  </a>
                  <a 
                    href={ demoUrl } 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <PrimaryButton>
                      Demo
                    </PrimaryButton>
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
