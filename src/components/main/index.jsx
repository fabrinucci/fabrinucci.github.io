import { useTranslation } from 'react-i18next';
import { Contact } from '../contact';
import { Projects } from '../projects';
import { Skills } from '../skills';

export const Main = () => {

  const [text] = useTranslation('global');

  return (
    <main>
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
    </main>
  )
}