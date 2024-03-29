import { Meta, StoryObj } from '@storybook/react';
import { CardCampaign } from '../CardCampaign';
import { CardCampaignProps } from '../CardCampaign.types';

const defaultArgs = {
  id: '123',
  title: 'Parques, lagos y gorilas de montaña',
  destination: 'Uganda',
  tagHeadLine: [
    {
      alias: 'PROMOTED',
      name: 'PROMOTED',
      category: '',
      uri: '/es/landing/adelantate-y-ahorra',
      uuid: '53fba6e6-fed1-4755-a0e2-0847a5723eba',
    },
    {
      alias: 'Flash Sale',
      name: 'OFERTA FLASH',
      category: '',
      uri: '/es/landing/ofertas-flash',
      isWinner: false,
      uuid: '8d0270ba-77f3-4255-8cd6-e5680ca50994',
    },
  ],
  isNew: false,
  isPromoted: true,
  isFlashSales: true,
  image: [
    {
      url: 'http://d3u4a4x0o6wh6h.cloudfront.net/img/p/6945/c155310.jpg',
      text: '',
    },
  ],
  fromPriceBeautify: '2.999€',
  oldPrice: '5.999€',
  pricingPercentage: '50%',
  daysText: '5 days',
  fromText: 'from',
  newText: 'New',
  wishListBtn: <></>,
};
const meta: Meta<CardCampaignProps> = {
  title: 'Components/cardCampaign',
  component: CardCampaign,
  args: defaultArgs,
};

export default meta;

type Story = StoryObj<CardCampaignProps>;
const Default = ({ ...args }: CardCampaignProps) => {
  return (
    <div style={{ height: '450px', width: '350px' }}>
      <CardCampaign {...args} />
    </div>
  );
};

export const Base: Story = {
  render: (args) => <Default {...args} />,
};
