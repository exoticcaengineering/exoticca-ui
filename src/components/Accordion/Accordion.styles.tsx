import styled, { css } from 'styled-components';

export const Header = styled.h3<{
  isOpen?: boolean;
  titleBackground?: string;
  isDisabled?: boolean;
  customAccordionButton?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 0;
  border-radius: ${({ theme }) =>
    `${theme.newBorderRadius.xs} ${theme.newBorderRadius.xs} 0 0 `};
  margin-top: 0;
  margin-bottom: 0;

  ${(props) =>
    props.isOpen &&
    !props.titleBackground &&
    css`
      padding-bottom: 0;
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
      padding-bottom: 24px;
    `}
`;

export const AccordionButton = styled.div<{
  isOpen: boolean;
  isDisabled: boolean;
}>`
  transition: 0.3ms ease-out;
  ${(props) =>
    props.isOpen &&
    !props.isDisabled &&
    css`
      transform: rotate(180deg);
    `};
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  word-break: break-word;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: translateY(${(props) => (props.isOpen ? '15px' : 0)});
  transition: ${({ theme }) =>
    `opacity ${theme.transition.duration.standard} ease-in-out, transform ${theme.transition.duration.standard} ease-in-out`};
`;
