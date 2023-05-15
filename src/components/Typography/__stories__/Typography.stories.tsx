import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from '../Typography';
import { themeDefault } from 'src/themes/theme';

const {
  typography: { fontSize, fontFamily, fontWeight },
  colors,
} = themeDefault;

const cursors = [
  'alias',
  'll-scroll',
  'auto',
  'cell',
  'col-resize',
  'context-menu',
  'copy',
  'crosshair',
  'default',
  'e-resize',
  'ew-resize',
  'grab',
  'grabbing',
  'help',
  'move',
  'n-resize',
  'ne-resize',
  'nesw-resize',
  'ns-resize',
  'nw-resize',
  'nwse-resize',
  'no-drop',
  'none',
  'not-allowed',
  'pointer',
  'progress',
  'row-resize',
  's-resize',
  'se-resize',
  'sw-resize',
  'text',
  'url(myBall.cur),auto',
  'w-resize',
  'wait',
  'zoom-in',
  'zoom-out',
];

const textDecorations = [
  'underline',
  'none',
  'overline',
  'line-through',
  'underline overline',
];

const fontStyles = ['normal', 'italic', 'oblique'];

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    fontFamily: {
      options: Object.keys(fontFamily),
      control: { type: 'select' },
    },
    fontSize: {
      options: Object.keys(fontSize),
      control: { type: 'select' },
    },
    fontStyle: {
      options: fontStyles,
      control: { type: 'radio' },
    },
    fontWeight: {
      options: Object.keys(fontWeight),
      control: { type: 'select' },
    },
    color: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
    textDecoration: {
      options: textDecorations,
      control: { type: 'select' },
    },
    cursor: {
      options: cursors,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>some text</Typography>
);

export const Base = Template.bind({});

export const BoldText = Template.bind({});

BoldText.args = {
  fontWeight: 'bolder',
};

export const ItalicText = Template.bind({});

ItalicText.args = {
  fontStyle: 'italic',
};

export const UnderlinedText = Template.bind({});

UnderlinedText.args = {
  textDecoration: 'underline',
};

export const CenteredText = Template.bind({});

CenteredText.args = {
  align: 'center',
};

export const ColoredText = Template.bind({});

ColoredText.args = {
  color: 'exoticcaLogo',
};

export const HeaderText = Template.bind({});

HeaderText.args = {
  fontSize: 'h1',
};
