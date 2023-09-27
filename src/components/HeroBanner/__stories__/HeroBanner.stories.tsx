import { ComponentStory, Meta, StoryObj } from '@storybook/react';
import { Button } from 'src/components/Button';
import { HeroBanner } from 'src/components/HeroBanner';
import { Props } from 'src/components/HeroBanner/HeroBanner.types';

export default {
  title: 'Components/HeroBanner',
  component: HeroBanner,
  args: {
    testId: 'heroBanner-wrapper',
    height: 500,
    title: 'This is a Title',
    subtitle: ' This is an example of subtitle',
    verticalPosition: 'bottom',
    horizontalPosition: 'left',
    backgroundImg:
      'https://res.cloudinary.com/exoticca/image/upload/c_lfill,f_auto,g_auto,h_550,q_80/v1/Promotions/2023/2023_Travel%202%20for%201/sep_half-price-travel_V2_1920x860_m9acuq.jpg',
  },
} as Meta<Props>;

const contentMock: React.FC = () => {
  return (
    <section data-testid="contentWrapper">
      <h1>this is a h1</h1>
      <h4>THis is a h4 subtitle</h4>
      <Button text="this is a sample cta" size="small" />
    </section>
  );
};

type Story = StoryObj<Props>;

const Template: ComponentStory<typeof HeroBanner> = ({ ...props }) => {
  return <HeroBanner {...props} />;
};

export const WithoutContent: Story = {
  render: (args) => <Template {...args} />,
};

export const Base: Story = {
  render: (args) => <Template {...args} Content={contentMock} />,
};
export const CenteredBase: Story = {
  render: (args) => (
    <Template
      {...args}
      Content={contentMock}
      verticalPosition="center"
      horizontalPosition="center"
    />
  ),
};
export const WithVideo: Story = {
  render: (args) => <Template {...args} Content={contentMock} />,
};
