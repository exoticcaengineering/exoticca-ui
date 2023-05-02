import { FC, useEffect, useRef, useState } from 'react';
import {
  StyledDropdownButton,
  CloseIcon,
  CloseWrapper,
  StyledDropdownWrapper,
  StyledDropdownList,
  StyledFirstPart,
  StyledButtonTextWrapper,
} from './Dropdown.styles';
import { DropDownPosition, Props } from './Dropdown.types';
import { BorderRadius } from 'src/types/theme';
import { useOnClickOutside } from 'src/hooks';
import { Icon } from '../Icon';
import { TextBody1, TextBody2 } from '../TypographyVariants';

export const Dropdown: FC<Props> = ({
  dropdownList,
  position = 'right',
  withCloseButton,
  text,
  size = 'medium',
  startIcon,
  endIcon,
  className,
  testId,
  onClick,
  onClose,
  inverseStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = () => {
    onClose?.();
    setIsOpen(false);
  };

  useOnClickOutside(dropdownRef, closeDropdown);

  const toggleDropdown = () => {
    if (isOpen) return closeDropdown();
    return setIsOpen(!isOpen);
  };

  const setBorderRadius = (
    position: DropDownPosition,
  ): Array<keyof BorderRadius> => {
    if (position === 'left') return ['l', 'none', 'l', 'l'];

    return ['none', 'l', 'l', 'l'];
  };

  const handleOnClick = () => {
    onClick?.(isOpen);
    toggleDropdown();
  };

  const renderText = () => {
    switch (size) {
      case 'small':
        return <TextBody2>{text}</TextBody2>;
      case 'medium':
        return <TextBody1>{text}</TextBody1>;
      default:
        return <TextBody1>{text}</TextBody1>;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', closeDropdown);

    return () => {
      window.removeEventListener('scroll', closeDropdown);
    };
  }, []);

  return (
    <StyledDropdownWrapper
      ref={dropdownRef}
      data-testid={testId ?? 'dropdown-button'}
    >
      <StyledDropdownButton
        onClick={handleOnClick}
        isOpen={isOpen}
        size={size}
        className={className}
        inverseStyle={inverseStyle}
      >
        <StyledFirstPart>
          {startIcon && <Icon {...startIcon} />}
          <StyledButtonTextWrapper>{renderText()}</StyledButtonTextWrapper>
        </StyledFirstPart>

        <Icon icon="arrow" rotate={isOpen ? 0 : 180} {...endIcon} />
      </StyledDropdownButton>

      {isOpen && (
        <StyledDropdownList
          position={position}
          background={inverseStyle ? 'polarNight' : 'arcticWind'}
          padding={[1.5, 2]}
          borderRadius={setBorderRadius(position)}
        >
          {withCloseButton && (
            <CloseWrapper position={position} onClick={closeDropdown}>
              <CloseIcon icon={'close'} />
            </CloseWrapper>
          )}
          {dropdownList({
            closeDropdown,
          })}
        </StyledDropdownList>
      )}
    </StyledDropdownWrapper>
  );
};
