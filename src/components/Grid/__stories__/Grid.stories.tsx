import { ComponentStory, Meta, StoryObj } from '@storybook/react';
import { Button } from 'src/components/Button';
import { Grid } from 'src/components/Grid';
import { Props } from 'src/components/Grid/Grid.types';

export default {
  title: 'Components/Grid',
  component: Grid,
  args: {
    testId: 'Grid-wrapper',
    height: 500,
    title: 'This is a Title',
    subtitle: ' This is an example of subtitle',
    verticalPosition: 'bottom',
    horizontalPosition: 'left',
    backgroundImg:
      'https://res.cloudinary.com/exoticca/image/upload/c_lfill,f_auto,g_auto,h_550,q_80/v1/Promotions/2023/2023_Travel%202%20for%201/sep_half-price-travel_V2_1920x860_m9acuq.jpg',
  },
} as Meta<Props>;

const ContentMock: React.FC = () => {
  return (
    <section style={{ gridRow: 1, gridColumn: 1 }} data-testid="contentWrapper">
      <h1>this is a h1</h1>
      <h4>THis is a h4 subtitle</h4>
      <Button text="this is a sample cta" size="small" />
    </section>
  );
};

const BannerMock: React.FC = () => {
  return (
    <>
      <section
        style={{
          gridRow: 1,
          gridColumn: 1,
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
        style={{ gridRow: 1, gridColumn: 2, width: '100%', margin: 'auto' }}
        data-testid="contentWrapper"
        src="https://res.cloudinary.com/exoticca/image/upload/c_lfill,f_auto,g_auto,h_550,q_80/v1/Promotions/2023/2023_Travel%202%20for%201/sep_half-price-travel_V2_1920x860_m9acuq.jpg"
      />
    </>
  );
};

type Story = StoryObj<Props>;

const Template: ComponentStory<typeof Grid> = ({ ...props }) => {
  return <Grid {...props} />;
};

export const Base: Story = {
  render: (args) => (
    <Template {...args}>
      <ContentMock />
    </Template>
  ),
};

export const Banner: Story = {
  render: (args) => (
    <Template {...args} columns={2} rows={1}>
      <BannerMock />
    </Template>
  ),
};
