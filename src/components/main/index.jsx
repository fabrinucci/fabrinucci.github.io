import { useTranslation } from 'react-i18next';

export const Main = () => {

  const [text] = useTranslation('global');

  return (
    <main>
      <h2>{text('main.description')}</h2>
    </main>
  )
}