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
  CustomTrigger,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

  const hasCustomTrigger = !!CustomTrigger;

  useEffect(() => {
    setIsAccordionOpen(isOpen);
  }, [isOpen]);

  const toggleIsOpen = () => {
    if (isAccordionOpen) onClose?.();
    setIsAccordionOpen(!isAccordionOpen);
  };
  const isEnabledAndOpen = !isDisabled && isAccordionOpen;

  const handleOnClickWrapper = () => (hasCustomTrigger ? null : toggleIsOpen());

  return (
    <div data-testid={testId}>
      <StyledHeaderWrapper
        onClick={handleOnClickWrapper}
        isOpen={isAccordionOpen}
        isDisabled={isDisabled}
        className={className}
        data-testid={`${testId}-header-wrapper`}
        hasCustomTrigger={hasCustomTrigger}
      >
        {header && (
          <StyledHeader data-testid={`${testId}-header`}>
            {startIcon && (
              <Icon size="regular" stroke="primary" {...startIcon} />
            )}
            {header}
          </StyledHeader>
        )}

        {hasCustomTrigger ? (
          <CustomTrigger isOpen={isAccordionOpen} onClick={toggleIsOpen} />
        ) : (
          <Icon
            size="regular"
            stroke="primary"
            rotate={isEnabledAndOpen ? 180 : 0}
            {...endIcon}
          />
        )}
      </StyledHeaderWrapper>

      <StyledContent
        isOpen={isAccordionOpen}
        isEnabledAndOpen={isEnabledAndOpen}
        data-testid={`${testId}-content`}
      >
        <StyledContentInner isEnabledAndOpen={isEnabledAndOpen}>
          {content}
        </StyledContentInner>
      </StyledContent>
    </div>
  );
};
