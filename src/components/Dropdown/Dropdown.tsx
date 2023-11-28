import { FC, useEffect, useRef, useState } from 'react';
import {
  StyledDropdownButton,
  CloseIconWrapper,
  CloseWrapper,
  StyledDropdownWrapper,
  StyledDropdownList,
  StyledFirstPart,
  StyledButtonTextWrapper,
} from './Dropdown.styles';
import { DropDownPosition, Props } from './Dropdown.types';
import { BorderRadius } from 'src/types/theme';
import { useOnClickOutside } from 'src/hooks';
import { TextBody1, TextBody2 } from '../TypographyVariants';
import { CloseIcon } from 'icons/SvgIcons/Close';
import { ArrowIcon } from 'icons/SvgIcons/Arrow';

export const Dropdown: FC<Props> = ({
  dropdownList,
  position = 'right',
  withCloseButton,
  text,
  size = 'medium',
  startIcon,
  endIcon,
  className,
  testId = 'dropdown',
  onClick,
  onClose,
  textColor,
  openBackgroundColor,
  isDefaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(isDefaultOpen);
  }, [isDefaultOpen]);

  const closeDropdown = () => {
    if (!isOpen) return;

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
        return <TextBody2 ellipsis>{text}</TextBody2>;
      case 'medium':
        return <TextBody1 ellipsis>{text}</TextBody1>;
      default:
        return <TextBody1 ellipsis>{text}</TextBody1>;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', closeDropdown);

    return () => {
      window.removeEventListener('scroll', closeDropdown);
    };
  }, [isOpen]);

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
        textColor={textColor}
        openBackgroundColor={openBackgroundColor}
      >
        <StyledFirstPart>
          {startIcon}
          <StyledButtonTextWrapper>{renderText()}</StyledButtonTextWrapper>
        </StyledFirstPart>

        <ArrowIcon rotate={isOpen ? 0 : 180} />
      </StyledDropdownButton>
      <StyledDropdownList
        isOpen={isOpen}
        position={position}
        padding={[1.5, 2]}
        borderRadius={setBorderRadius(position)}
        testId={`${testId}-list`}
      >
        {withCloseButton && (
          <CloseWrapper position={position} onClick={closeDropdown}>
            <CloseIconWrapper>
              <CloseIcon />
            </CloseIconWrapper>
          </CloseWrapper>
        )}
        {dropdownList({
          closeDropdown: closeDropdown,
          isOpen: isOpen,
        })}
      </StyledDropdownList>
    </StyledDropdownWrapper>
  );
};
