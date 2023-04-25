import { ComponentMeta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Accordion } from '../Accordion';
import { Typography } from 'src/components/Typography';
import { iconNames } from 'src/types/IconNames';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  args: {
    isDisabled: false,
    withHeaderTitle: true,
    headerText: 'I am a Header Text :)',
    isOpen: false,
    icon: 'arrow',
    contentText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat risus eu varius fringilla. Fusce luctus ipsum vitae nunc tincidunt, id tincidunt mauris accumsan.',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: [...iconNames, ''],
    },
  },
} as ComponentMeta<typeof Accordion>;

type CustomItemProps = ComponentProps<typeof Accordion> & {
  withHeaderTitle: boolean;
  headerText: string;
  contentText: string;
};

const Template: Story<CustomItemProps> = ({
  withHeaderTitle,
  headerText,
  contentText,
  ...props
}: CustomItemProps) => {
  return (
    <div style={{ height: '10rem', width: '15rem' }}>
      <Accordion
        {...props}
        header={
          withHeaderTitle ? (
            <Typography fontSize="body1">{headerText}</Typography>
          ) : undefined
        }
        content={<Typography>{contentText}</Typography>}
      />
    </div>
  );
};
export const Base = Template.bind({});

export const WithStartIcon = Template.bind({});

WithStartIcon.args = {
  startIcon: {
    icon: 'honeymoon',
  },
};
