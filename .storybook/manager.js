import logo from './logo-rebrand.svg';

import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandImage: logo,
  brandTitle: 'Custom - Storybook',
});

addons.setConfig({
  panelPosition: 'bottom',
  theme,
});
