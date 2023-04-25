import { FC, useRef, useState } from 'react';
import {
  StyledDropdownButton,
  CloseIcon,
  CloseWrapper,
  StyledDropdownWrapper,
  StyledDropdownList,
} from './Dropdown.styles';
import { DropDownPosition, Props } from './Dropdown.types';
import { BorderRadius } from 'src/types/theme';
import { useOnClickOutside } from 'src/hooks';

export const Dropdown: FC<Props> = ({
  children,
  position = 'right',
  withCloseButton,
  text,
  size = 'medium',
  startIcon,
  className,
  testId,
  onClick,
  onClose,
  buttonOpenColor = 'black',
  buttonCloseColor = 'white',
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

  return (
    <StyledDropdownWrapper
      ref={dropdownRef}
      data-testid={testId ?? 'dropdown-button'}
    >
      <StyledDropdownButton
        onClick={handleOnClick}
        endIcon={{ icon: 'arrow', rotate: isOpen ? 0 : 180 }}
        isOpen={isOpen}
        color={isOpen ? buttonOpenColor : buttonCloseColor}
        text={text}
        variant="tertiary"
        size={size}
        startIcon={startIcon}
        className={className}
      />

      {isOpen && (
        <StyledDropdownList
          position={position}
          background="arcticWind"
          padding={[1.5, 2]}
          borderRadius={setBorderRadius(position)}
        >
          {withCloseButton && (
            <CloseWrapper position={position} onClick={closeDropdown}>
              <CloseIcon icon={'close'} />
            </CloseWrapper>
          )}
          {children}
        </StyledDropdownList>
      )}
    </StyledDropdownWrapper>
  );
};
