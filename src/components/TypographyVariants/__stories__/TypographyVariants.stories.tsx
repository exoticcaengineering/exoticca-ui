import { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'src/components/Typography/Typography';
import {
  TextDisplay1,
  TextDisplay2,
  TextHeading1,
  TextHeading2,
  TextHeading3,
  TextBody1,
  TextBody2,
  TextBody3,
  TextBody4,
  TextBody5,
  TextButton1,
  TextButton2,
  TextButton3,
  TextCaption,
  TextOverline,
} from '../TypographyVariants';
import { Box } from 'src/components/Box';

const meta: Meta<typeof Typography> = {
  title: 'Components/TypographyVariants',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

const Display1Variant = () => (
  <Box>
    <TextDisplay1>Display1</TextDisplay1>
    <TextDisplay1>Below tablet: 44px / LH 1.25</TextDisplay1>
    <TextDisplay1>Above tablet: 44px / LH 1.25</TextDisplay1>
  </Box>
);

export const Display1: Story = {
  render: () => <Display1Variant />,
};

const Display2Variant = () => (
  <Box>
    <TextDisplay2>Display2 </TextDisplay2>
    <TextDisplay2>Below tablet: 32px / LH 1.25 </TextDisplay2>
    <TextDisplay2>Above tablet:44px / LH 1.25 </TextDisplay2>
  </Box>
);

export const Display2 = {
  render: () => <Display2Variant />,
};

const Heading1Variant = () => (
  <Box>
    <TextHeading1>Heading1</TextHeading1>
    <TextHeading1>Below tablet: 24px / LH 1.25</TextHeading1>
    <TextHeading1>Above tablet: 32px / LH 1.25</TextHeading1>
  </Box>
);

export const Heading1 = {
  render: () => <Heading1Variant />,
};

const Heading2Variant = () => (
  <Box>
    <TextHeading2>Heading2</TextHeading2>
    <TextHeading2>Below tablet: 20px / LH 1.25</TextHeading2>
    <TextHeading2>Above tablet: 24px / LH 1.25</TextHeading2>
  </Box>
);

export const Heading2 = {
  render: () => <Heading2Variant />,
};

const Heading3Variant = () => (
  <Box>
    <TextHeading3>Heading3</TextHeading3>
    <TextHeading3>Below tablet: 16px / LH 1.25</TextHeading3>
    <TextHeading3>Above tablet: 20px / LH 1.25</TextHeading3>
  </Box>
);

export const Heading3 = {
  render: () => <Heading3Variant />,
};

const Body1Variant = () => (
  <Box>
    <TextBody1>Body1</TextBody1>
    <TextBody1>All screens: 16px / LH 1.5</TextBody1>
    <TextBody1>For print: 16px / LH 1.5</TextBody1>
  </Box>
);

export const Body1 = {
  render: () => <Body1Variant />,
};

const Body2Variant = () => (
  <Box>
    <TextBody2>Body2</TextBody2>
    <TextBody2>All screens: 14px / LH 1.5</TextBody2>
    <TextBody2>For print: 14px / LH 1.5</TextBody2>
  </Box>
);

export const Body2 = {
  render: () => <Body2Variant />,
};

const Body3Variant = () => (
  <Box>
    <TextBody3>Body3</TextBody3>
    <TextBody3>For all screens: 12px / LH 1.25</TextBody3>
    <TextBody3>For print: 12px / LH 1.25</TextBody3>
  </Box>
);

export const Body3 = {
  render: () => <Body3Variant />,
};

const Body4Variant = () => (
  <Box>
    <TextBody4>Body4</TextBody4>
    <TextBody4>Only for print: 10px / LH 1.25</TextBody4>
  </Box>
);

export const Body4 = {
  render: () => <Body4Variant />,
};

const Body5Variant = () => (
  <Box>
    <TextBody5>Body5</TextBody5>
    <TextBody5>Only for print: 8px / LH 1.25</TextBody5>
  </Box>
);

export const Body5 = {
  render: () => <Body5Variant />,
};

const Button1Variant = () => (
  <Box>
    <TextButton1>Button1</TextButton1>
    <TextButton1>Below tablet: 16px / LH 1.25</TextButton1>
    <TextButton1>Above tablet: 20px / LH 1.25</TextButton1>
  </Box>
);

export const Button1 = {
  render: () => <Button1Variant />,
};

const Button2Variant = () => (
  <Box>
    <TextButton2>Button2</TextButton2>
    <TextButton2>Below tablet: 14px / LH 1.25</TextButton2>
    <TextButton2>Above tablet: 16px / LH 1.25</TextButton2>
  </Box>
);

export const Button2 = {
  render: () => <Button2Variant />,
};

const Button3Variant = () => (
  <Box>
    <TextButton3>Button3</TextButton3>
    <TextButton3>For all screens: 14px / LH 1.25</TextButton3>
  </Box>
);

export const Button3 = {
  render: () => <Button3Variant />,
};

const CaptionVariant = () => (
  <Box>
    <TextCaption>Caption</TextCaption>
    <TextCaption>For all screens: 12px / LH 1.25</TextCaption>
  </Box>
);

export const Caption = {
  render: () => <CaptionVariant />,
};

const OverlineVariant = () => (
  <Box>
    <TextOverline>Overline</TextOverline>
    <TextOverline>For all screens: 12px / LH 1.25</TextOverline>
  </Box>
);

export const Overline = {
  render: () => <OverlineVariant />,
};
