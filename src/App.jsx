import { useContext } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

// import './App.css';

const App = () => {

  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
  console.log('theme', theme);

  return (
      <div className='App' style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }}>
        <Header />
        <Main />       

        <button onClick={toggleTheme}>{ isDark ? 'This is dark mode' : 'This is light mode' }</button> 
      </div>
  )
}

export default App;