import { FC } from 'react';
import {
  StyledAlertWrapper,
  StyledText,
  StyledTextWrapper,
} from 'src/components/Alert/Alert.styles';
import { Props } from 'src/components/Alert/Alert.types';
import { BoxProps } from 'src/components/Box';
import { Icon } from 'src/components/Icon';

export const Alert: FC<Props> = ({
  testId,
  className,
  status,
  title,
  text,
  rounded = false,
}) => {
  let statusStyle: Pick<
    BoxProps,
    'borderColor' | 'borderWidth' | 'borderRadius' | 'padding'
  > = {
    borderRadius: rounded ? 'semiRounded' : 'm',
    padding: rounded ? [1, 2] : [1.5, 1],
    borderWidth: 1,
  };

  switch (status) {
    case 'success':
      statusStyle = {
        ...statusStyle,
        borderColor: 'success',
      };
      break;
    case 'warning':
      statusStyle = {
        ...statusStyle,
        borderColor: 'warning',
      };
      break;
    case 'info':
      statusStyle = {
        ...statusStyle,
        borderColor: 'primary',
      };
      break;
  }

  return (
    <StyledAlertWrapper
      className={className}
      data-testid={testId}
      {...statusStyle}
    >
      <Icon
        icon="info"
        stroke={status === 'warning' ? 'warning' : 'primary'}
        size="medium"
      />
      <StyledTextWrapper>
        <StyledText rounded={rounded}>{title}</StyledText>
        <StyledText rounded={rounded}>{text}</StyledText>
      </StyledTextWrapper>
    </StyledAlertWrapper>
  );
};
