import { FC, useEffect, useState } from 'react';
import {
  StyledContent,
  StyledContentInner,
  StyledHeader,
  StyledHeaderWrapper,
  Wrapper,
} from './Accordion.styles';
import { Props } from './Accordion.types';
import { ArrowIcon } from 'src/components/SvgIcons/Arrow';

export const Accordion: FC<Props> = ({
  header,
  onOpen,
  onClose,
  content,
  isOpen = false,
  isDisabled,
  startIcon,
  endIcon,
  className,
  testId = 'accordion',
  CustomTrigger,
  CustomTriggerEnd,
  underline,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

  const hasCustomTrigger = !!CustomTrigger;
  const hasCustomTriggerEnd = !!CustomTriggerEnd;

  useEffect(() => {
    setIsAccordionOpen(isOpen);
  }, [isOpen]);

  const toggleIsOpen = () => {
    isAccordionOpen ? onClose?.() : onOpen?.();
    setIsAccordionOpen(!isAccordionOpen);
  };
  const isEnabledAndOpen = !isDisabled && isAccordionOpen;

  const handleOnClickWrapper = () => (hasCustomTrigger ? null : toggleIsOpen());

  const renderContent = () => {
    if (typeof content === 'function') {
      return content({ isOpen: isAccordionOpen });
    }
    return content;
  };

  return (
    <Wrapper data-testid={testId} className={className} underline={underline}>
      <StyledHeaderWrapper
        onClick={handleOnClickWrapper}
        isOpen={isAccordionOpen}
        isDisabled={isDisabled}
        data-testid={`${testId}-header-wrapper`}
        hasCustomTrigger={hasCustomTrigger}
      >
        {header && (
          <StyledHeader data-testid={`${testId}-header`}>
            {startIcon}
            {header}
          </StyledHeader>
        )}

        {hasCustomTrigger ? (
          <CustomTrigger isOpen={isAccordionOpen} onClick={toggleIsOpen} />
        ) : (
          endIcon || <ArrowIcon rotate={isEnabledAndOpen ? 0 : 180} />
        )}
      </StyledHeaderWrapper>

      <StyledContent
        isOpen={isAccordionOpen}
        isEnabledAndOpen={isEnabledAndOpen}
        data-testid={`${testId}-content`}
      >
        <StyledContentInner isEnabledAndOpen={isEnabledAndOpen}>
          {renderContent()}
        </StyledContentInner>
      </StyledContent>

      {hasCustomTriggerEnd && (
        <CustomTriggerEnd isOpen={isAccordionOpen} onClick={toggleIsOpen} />
      )}
    </Wrapper>
  );
};
