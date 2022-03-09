import { ThemeProvider } from 'styled-components';
import './App.css';

import TopNav  from './components/TopNav';

import useThemeMode from './hooks/useThemeMode';
import TogglerButton from './components/TogglerButton';
import GlobalStyles from './styles/global';
import { lightTheme, darkTheme } from './styles/themes';

import Header from './components/Header';
import Projects from './components/Projects';
import Blogs from './components/Blogs';

const App = () => {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <TopNav />
      <br />
      <TogglerButton themeToggler={themeToggler} />
      <Header />
      <Projects />
      <Blogs />
    </ThemeProvider>
  );
}

export default App;
