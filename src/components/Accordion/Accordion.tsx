import { FC, useEffect, useState } from 'react';
import { Icon } from '../Icon';
import {
  StyledContent,
  StyledContentInner,
  StyledHeader,
  StyledHeaderWrapper,
} from './Accordion.styles';
import { Props } from './Accordion.types';

export const Accordion: FC<Props> = ({
  header,
  onClose,
  content,
  isOpen = false,
  isDisabled,
  startIcon,
  endIcon = { icon: 'arrow' },
  className,
  testId = 'accordion',
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

  useEffect(() => {
    setIsAccordionOpen(isOpen);
  }, [isOpen]);

  const toggleIsOpen = () => {
    if (isAccordionOpen) onClose?.();
    setIsAccordionOpen(!isAccordionOpen);
  };
  const isEnabledAndOpen = !isDisabled && isAccordionOpen;

  return (
    <div data-testid={testId}>
      <StyledHeaderWrapper
        onClick={toggleIsOpen}
        isOpen={isAccordionOpen}
        isDisabled={isDisabled}
        className={className}
        data-testid={`${testId}-header-wrapper`}
      >
        {header && (
          <StyledHeader data-testid={`${testId}-header`}>
            {startIcon && (
              <Icon size="regular" stroke="primary" {...startIcon} />
            )}
            {header}
          </StyledHeader>
        )}

        <Icon
          size="regular"
          stroke="primary"
          rotate={isEnabledAndOpen ? 180 : 0}
          {...endIcon}
        />
      </StyledHeaderWrapper>

      <StyledContent
        isOpen={isAccordionOpen}
        data-testid={`${testId}-content`}
        isEnabledAndOpen={isEnabledAndOpen}
      >
        <StyledContentInner isEnabledAndOpen={isEnabledAndOpen}>
          {content}
        </StyledContentInner>
      </StyledContent>
    </div>
  );
};
