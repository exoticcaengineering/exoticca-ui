import { FC } from 'react';
import { Props, TextOverLineProps } from './TypographyVariants.types';
import {
  StyledBody1,
  StyledBody2,
  StyledBody3,
  StyledBody4,
  StyledBody5,
  StyledButton1,
  StyledButton2,
  StyledButton3,
  StyledCaption,
  StyledDisplay1,
  StyledDisplay2,
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledOverline,
} from './TypographyVariants.styles';

export const TextDisplay1: FC<Props> = ({ as, ...props }) => (
  <StyledDisplay1 {...props} forwardedAs={as} />
);
export const TextDisplay2: FC<Props> = ({ as, ...props }) => (
  <StyledDisplay2 {...props} forwardedAs={as} />
);
export const TextHeading1: FC<Props> = ({ as, ...props }) => (
  <StyledHeading1 {...props} forwardedAs={as} />
);
export const TextHeading2: FC<Props> = ({ as, ...props }) => (
  <StyledHeading2 {...props} forwardedAs={as} />
);
export const TextHeading3: FC<Props> = ({ as, ...props }) => (
  <StyledHeading3 {...props} forwardedAs={as} />
);
export const TextBody1: FC<Props> = ({ as, ...props }) => (
  <StyledBody1 {...props} forwardedAs={as} />
);
export const TextBody2: FC<Props> = ({ as, ...props }) => (
  <StyledBody2 {...props} forwardedAs={as} />
);
export const TextBody3: FC<Props> = ({ as, ...props }) => (
  <StyledBody3 {...props} forwardedAs={as} />
);
export const TextBody4: FC<Props> = ({ as, ...props }) => (
  <StyledBody4 {...props} forwardedAs={as} />
);
export const TextBody5: FC<Props> = ({ as, ...props }) => (
  <StyledBody5 {...props} forwardedAs={as} />
);
export const TextButton1: FC<Props> = ({ as, ...props }) => (
  <StyledButton1 {...props} forwardedAs={as} />
);
export const TextButton2: FC<Props> = ({ as, ...props }) => (
  <StyledButton2 {...props} forwardedAs={as} />
);
export const TextButton3: FC<Props> = ({ as, ...props }) => (
  <StyledButton3 {...props} forwardedAs={as} />
);
export const TextCaption: FC<Props> = ({ as, ...props }) => (
  <StyledCaption {...props} forwardedAs={as} />
);
export const TextOverline: FC<TextOverLineProps> = ({ as, ...props }) => (
  <StyledOverline {...props} forwardedAs={as} />
);
