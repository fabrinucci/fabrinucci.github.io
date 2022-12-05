import { useTranslation } from 'react-i18next';

export const Header = () => {

  const [text, i18n] = useTranslation('global');

  return (
    <header>
      <h1>{text('header.hello-world')}</h1>
      <button onClick={() => i18n.changeLanguage('es')}>es</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </header>
  )
}
