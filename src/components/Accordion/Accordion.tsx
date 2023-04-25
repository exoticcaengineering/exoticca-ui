import { FC, useEffect, useState } from 'react';
import { Icon } from '../Icon';
import {
  StyledContent,
  StyledHeader,
  StyledHeaderWrapper,
} from './Accordion.styles';
import { Props } from './Accordion.types';

export const Accordion: FC<Props> = ({
  header,
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

  const toggleIsOpen = () => setIsAccordionOpen(!isAccordionOpen);
  const isEnabledAndOpen = !isDisabled && isAccordionOpen;
  console.log('startIcon', startIcon);

  return (
    <>
      {header && (
        <StyledHeaderWrapper
          onClick={toggleIsOpen}
          isOpen={isAccordionOpen}
          isDisabled={isDisabled}
          className={className}
          data-testid={testId}
        >
          <StyledHeader>
            {startIcon && (
              <Icon size="regular" stroke="polarNight" {...startIcon} />
            )}
            {header}
          </StyledHeader>

          <Icon
            size="regular"
            stroke="polarNight"
            rotate={isEnabledAndOpen ? 180 : 0}
            {...endIcon}
          />
        </StyledHeaderWrapper>
      )}
      {isEnabledAndOpen && (
        <StyledContent isOpen={isAccordionOpen}>{content}</StyledContent>
      )}
    </>
  );
};
