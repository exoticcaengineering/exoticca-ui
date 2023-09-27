import { ComponentStory, Meta, StoryObj } from '@storybook/react';
import { Button } from 'src/components/Button';
import { Banner } from 'src/components/Banner';
import { Props } from 'src/components/Banner/Banner.types';

export default {
  title: 'Components/Banner',
  component: Banner,
  args: {
    testId: 'Banner-wrapper',
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

const Template: ComponentStory<typeof Banner> = ({ ...props }) => {
  return <Banner {...props} />;
};

export const WithoutContent: Story = {
  render: (args) => <Template {...args} />,
};

export const Base: Story = {
  render: (args) => <Template {...args} Content={contentMock} />,
};

export const TextAndImgBanner: Story = {
  render: (args) => (
    <Template
      {...args}
      Content={contentMock}
      rows={1}
      columns={2}
      verticalPosition="top"
      horizontalPosition="left"
    />
  ),
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
