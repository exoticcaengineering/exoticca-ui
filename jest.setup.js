// jest.setup.ts
import '@testing-library/jest-dom';
import 'jest-styled-components';

import { setProjectAnnotations } from '@storybook/react';
import * as globalStorybookConfig from './.storybook/preview'; // path of your preview.js file

setProjectAnnotations(globalStorybookConfig);
