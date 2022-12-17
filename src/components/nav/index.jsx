import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { navigation } from '../../data';

import styles from './NavMenu.module.css';

export const Nav = () => {
  const [text] = useTranslation('global');

  const [isActive, setIsActive] = useState('');

  return (
    <nav className={styles.NavMenu}>
      <ul>
        {navigation.map(({ id, name, Icon, translate }) => (
          <li key={id}>
            <a 
              onClick={ () => setIsActive(`#${name}`) } 
              className={ isActive === `#${name}` ? styles.active : ''} 
              href={`#${name}`}
              rel="noopener noreferrer"
              aria-label={text(translate)}
            >
              <Icon className={styles.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
