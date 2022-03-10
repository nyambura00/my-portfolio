import { ThemeProvider } from 'styled-components';
import TopNav  from './TopNav';

import useThemeMode from '../hooks/useThemeMode';
import TogglerButton from './TogglerButton';
import GlobalStyles from '../styles/global';
import { lightTheme, darkTheme } from '../styles/themes';

import Header from './Header';
import Projects from './Projects';
import Blogs from './Blogs';
import FooterBanner from './FooterBanner';

const Layout = () => {
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
            <FooterBanner />
        </ThemeProvider>
    )
}

export default Layout