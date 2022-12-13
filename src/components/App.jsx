import { Header } from './header';
import { Main } from './main';

import styles from './App.module.css';
import { Nav } from './nav/Nav';
import { Footer } from './footer';

const App = () => {

  return (
    <div className={styles.App}>
      <Header />
      <Nav />
      <Main />    
      <Footer />   
    </div>
  )
}

export default App;