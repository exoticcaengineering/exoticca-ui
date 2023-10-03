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
  },
} as Meta<Props>;

const ContentMock: React.FC = () => {
  return (
    <section style={{ gridRow: 4, gridColumn: 2 }} data-testid="contentWrapper">
      <h1>This is a h1</h1>
      <h4>This is a h4 subtitle</h4>
      <Button text="this is a sample cta" size="small" />
    </section>
  );
};

const BannerMock: React.FC = () => {
  return (
    <>
      <section
        style={{
          gridRow: 2,
          gridColumn: 2,
          alignContent: 'center',
          width: '100%',
          margin: 'auto',
        }}
        data-testid="contentWrapper"
      >
        <h1>this is a h1</h1>
        <h4>THis is a h4 subtitle</h4>
        <Button text="this is a sample cta" size="small" />
      </section>
      <img
        style={{ gridRow: 2, gridColumn: 3, width: '100%', margin: 'auto' }}
        data-testid="contentWrapper"
        src="https://res.cloudinary.com/exoticca/image/upload/c_lfill,f_auto,g_auto,h_550,q_80/v1/Promotions/2023/2023_Travel%202%20for%201/sep_half-price-travel_V2_1920x860_m9acuq.jpg"
      />
    </>
  );
};

type Story = StoryObj<Props>;

const Template: ComponentStory<typeof Banner> = ({ ...props }) => {
  return <Banner {...props} />;
};

export const Base: Story = {
  render: (args) => (
    <Template {...args}>
      <ContentMock />
    </Template>
  ),
};

export const TwoColumnBanner: Story = {
  render: (args) => (
    <Template {...args} columns={2} rows={1}>
      <BannerMock />
    </Template>
  ),
};
