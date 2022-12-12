import styles from './ThemeButton.module.css';

import { RiSunLine, RiMoonFill } from 'react-icons/ri';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export const ThemeButton = () => {

  const [{isDark}, toggleTheme] = useContext(ThemeContext);

  return (
    <div>
    <button 
      onClick={ toggleTheme }
      className={
        `${styles.switch} 
        ${isDark && styles.active}`
      }
    >
      <RiSunLine />
      <RiMoonFill />
    </button>

    </div>
  )
}