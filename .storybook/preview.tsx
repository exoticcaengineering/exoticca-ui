import React from 'react'
import { ThemeProvider } from 'styled-components';
import { GlobalStyleDefault, themeDefault } from '../src/themes/theme';
import { Preview } from '@storybook/react';
import { Title, Subtitle, Description, Stories,ArgTypes } from '@storybook/blocks';

 const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Stories />
        <h2>Props</h2> 
        <ArgTypes />
      </>
    ),
  },
};


const preview: Preview = {
  parameters,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={themeDefault}>
          <GlobalStyleDefault />
          <Story />
        </ThemeProvider>
      );
    }
  ],
  
};



export default preview;
