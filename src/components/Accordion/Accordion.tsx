import { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { AccordionButton, AccordionContent, Header } from './Accordion.styles';
import { AccordionProps } from './Accordion.types';

export const Accordion = ({
  header,
  content,
  isOpen,
  isDisabled,
  icon = 'arrow',
}: AccordionProps) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(isOpen);

  useEffect(() => {
    setIsAccordionOpen(isOpen);
  }, [isOpen]);

  const toggleIsOpen = () => setIsAccordionOpen(!isAccordionOpen);

  return (
    <>
      {header && (
        <Header
          onClick={toggleIsOpen}
          isOpen={isAccordionOpen}
          isDisabled={isDisabled}
        >
          {header}
          <AccordionButton isOpen={isAccordionOpen} isDisabled={isDisabled}>
            <Icon icon={icon} size={'regular'} stroke={'polarNight'} />
          </AccordionButton>
        </Header>
      )}
      {!isDisabled && (
        <AccordionContent isOpen={isAccordionOpen}>{content}</AccordionContent>
      )}
    </>
  );
};
