import { Meta, StoryObj } from '@storybook/react';
import { Button } from 'src/components/Button';
import { Banner } from 'src/components/Banner';
import { Props } from 'src/components/Banner/Banner.types';

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  args: {
    testId: 'Banner-wrapper',
    height: 500,
  },
};

export default meta;

type Story = StoryObj<typeof Banner>;

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

const BaseComponent = (props: Props) => {
  return (
    <Banner {...props}>
      <ContentMock />
    </Banner>
  );
};

const TwoColumnBannerComponent = (props: Props) => {
  return (
    <Banner {...props}>
      <BannerMock />
    </Banner>
  );
};

export const Base: Story = {
  render: (args) => <BaseComponent {...args} />,
};

export const TwoColumnBanner: Story = {
  render: (args) => <TwoColumnBannerComponent {...args} />,
};
