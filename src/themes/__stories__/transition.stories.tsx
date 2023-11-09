import { StoryObj, Meta } from '@storybook/react';
import { Box } from 'src/components/Box';
import { Typography } from 'src/components/Typography';
import { Duration as DurationType } from 'src/types/theme';

import { themeDefault } from '../theme';
import { StyledAnimationDot, StyledDurationWrapper } from './themeStory.styles';

const Meta: Meta<typeof Box> = {
  title: 'Theme/Transition/Duration',
  component: Box,
};

export default Meta;
type Story = StoryObj<typeof Box>;

const durationValueArray = Object.keys(
  themeDefault.transition.duration,
) as Array<keyof DurationType>;

export const DurationComponent = () => (
  <Box>
    <Typography gutterBottom={1} fontSize="h3">
      Hover to sse the animation:
    </Typography>
    {durationValueArray.map((durationKey) => {
      const durationValue = themeDefault.transition.duration[durationKey];

      return (
        <StyledDurationWrapper
          gutterBottom={2}
          boxShadow="s"
          padding={[2]}
          key={durationKey}
        >
          <Typography
            gutterBottom={1}
          >{`${durationKey}: ${durationValue}`}</Typography>
          <StyledAnimationDot durationKey={durationKey} />
        </StyledDurationWrapper>
      );
    })}
  </Box>
);

export const Duration: Story = {
  render: () => <DurationComponent />,
};
