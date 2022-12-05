import { useContext } from 'react';
import { Header } from './header';
import { Main } from './main';
import { ThemeButton } from './ThemeButton';
import { ThemeContext } from '../context/ThemeContext';

import styles from './App.module.css';

const App = () => {

  const [{theme}] = useContext(ThemeContext);
  const color = theme.color;
  const backgroundColor = theme.backgroundColor;

  return (
    <div className={styles.App} style={{
      backgroundColor,
      color
    }}>
      <Header />
      <Main />       
      <ThemeButton />

    </div>
  )
}

export default App;