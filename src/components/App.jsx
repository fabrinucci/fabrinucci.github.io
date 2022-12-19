import useLocalStorage from 'use-local-storage';
import { Header } from './header';
import { Main } from './main';
import { Nav } from './nav';
import { Footer } from './footer';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  return (
    <div className="app" data-theme={ theme }>
      <Header theme={ theme } setTheme={ setTheme }/>
      <Nav />
      <Main />    
      <Footer />   
    </div>
  )
}

export default App;