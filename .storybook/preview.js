import { ThemeProvider } from 'styled-components';
import { GlobalStyleDefault, themeDefault } from 'src/themes/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withTheme = (Story) => {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyleDefault />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withTheme];
