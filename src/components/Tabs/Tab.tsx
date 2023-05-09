import { FC } from 'react';
import { TabProps } from './Tabs.types';
import { StyledTitleWrapper } from './Tabs.styles';
import { Typography } from 'src/components/Typography';

export const Tab: FC<TabProps> = ({ isSelected, onClick, title, fontSize }) => {
  return (
    <StyledTitleWrapper onClick={onClick} isSelected={isSelected}>
      <Typography fontSize={fontSize}>{title}</Typography>
    </StyledTitleWrapper>
  );
};
