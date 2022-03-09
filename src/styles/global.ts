import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;

    //light-mode
    --light-background: #f2f2f2;
    --light-text: #2E0509;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  h2 {
    font-size: 2.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

`;

export default withTheme(globalStyle);