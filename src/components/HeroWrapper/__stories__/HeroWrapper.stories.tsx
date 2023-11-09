import { type Meta, StoryObj } from '@storybook/react';
import { FC } from 'react';
import { Typography } from 'src/components/Typography';
import { HeroWrapper } from '../HeroWrapper';

const meta: Meta<typeof HeroWrapper> = {
  title: 'Components/HeroWrapper',
  component: HeroWrapper,
};

export default meta;

type Story = StoryObj<typeof HeroWrapper>;

const Content: FC = () => {
  return (
    <>
      <Typography
        color="primary"
        colorShade="contrast"
        fontSize="h1"
        textTransform="uppercase"
        fontWeight="bolder"
      >
        Hero wrapper content title
      </Typography>
      <Typography color="primary" colorShade="contrast" fontSize="h3">
        Hero wrapper content subtitle
      </Typography>
    </>
  );
};

export const Base: Story = {
  args: {
    children: <Content />,
    backgroundImg:
      'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
};
