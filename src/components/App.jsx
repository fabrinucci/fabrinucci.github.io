import { Header } from './header';
import { Main } from './main';

import styles from './App.module.css';
import { Nav } from './nav/Nav';

const App = () => {

  return (
    <div className={styles.App}>
      <Header />
      <Nav />
      <Main />       
    </div>
  )
}

export default App;