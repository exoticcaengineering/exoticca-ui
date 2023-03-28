import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { FC } from 'react';
import { Typography } from 'src/components/Typography';
import { HeroWrapper } from '../HeroWrapper';

export default {
  title: 'Components/HeroWrapper',
  component: HeroWrapper,
} as ComponentMeta<typeof HeroWrapper>;

const Template: ComponentStory<typeof HeroWrapper> = (args) => (
  <HeroWrapper {...args} />
);

const Content: FC = () => {
  return (
    <>
      <Typography
        color="white"
        fontSize="h1"
        textTransform="uppercase"
        fontWeight="bolder"
      >
        Hero wrapper content title
      </Typography>
      <Typography color="white" fontSize="h3">
        Hero wrapper content subtitle
      </Typography>
    </>
  );
};

export const Base = Template.bind({});

Base.args = {
  children: <Content />,
  backgroundImg:
    'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

Base.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const title = canvas.getByText('Hero wrapper content title');
  const subtitle = canvas.getByText('Hero wrapper content subtitle');
  await expect(title).toBeInTheDocument();
  await expect(subtitle).toBeInTheDocument();
};