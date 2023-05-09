import { FC, useState } from 'react';
import { Props } from './Tabs.types';
import { StyledContentWrapper, StyledTabs } from './Tabs.styles';
import { Tab } from './Tab';

export const Tabs: FC<Props> = ({ tabs, className, testId, titleFontSize }) => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const handleOnClick = (id: string) => setSelectedTabId(id);
  const selectedTab = tabs.find(({ id }) => id === selectedTabId);
  return (
    <div className={className} data-testid={testId}>
      <StyledTabs>
        {tabs.map(({ title, id }) => (
          <Tab
            key={title}
            title={title}
            onClick={() => handleOnClick(id)}
            isSelected={selectedTabId === id}
            titleFontSize={titleFontSize}
          />
        ))}
      </StyledTabs>
      <StyledContentWrapper>{selectedTab?.content}</StyledContentWrapper>
    </div>
  );
};
