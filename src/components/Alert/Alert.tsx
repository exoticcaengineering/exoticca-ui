import { FC } from 'react';
import { StyledAlertWrapper } from 'src/components/Alert/Alert.styles';
import { Props } from 'src/components/Alert/Alert.types';
import { Icon } from 'src/components/Icon';
import { Typography } from 'src/components/Typography';

export const Alert: FC<Props> = ({
  testId,
  className,
  text,
  padding,
  fontSize,
  startIcon,
  borderColor,
  borderWidth,
  borderRadius,
}) => {
  const renderStartIcon = () => {
    if (!startIcon) return;

    return <Icon {...startIcon} />;
  };

  return (
    <StyledAlertWrapper
      className={className}
      data-testid={testId}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      padding={padding}
    >
      {renderStartIcon()}
      <Typography fontSize={fontSize}>{text}</Typography>
    </StyledAlertWrapper>
  );
};
