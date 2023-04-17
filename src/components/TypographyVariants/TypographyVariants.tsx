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

export const TextDisplay1: FC<Props> = (props) => <StyledDisplay1 {...props} />;
export const TextDisplay2: FC<Props> = (props) => <StyledDisplay2 {...props} />;
export const TextHeading1: FC<Props> = (props) => <StyledHeading1 {...props} />;
export const TextHeading2: FC<Props> = (props) => <StyledHeading2 {...props} />;
export const TextHeading3: FC<Props> = (props) => <StyledHeading3 {...props} />;
export const TextBody1: FC<Props> = (props) => <StyledBody1 {...props} />;
export const TextBody2: FC<Props> = (props) => <StyledBody2 {...props} />;
export const TextBody3: FC<Props> = (props) => <StyledBody3 {...props} />;
export const TextBody4: FC<Props> = (props) => <StyledBody4 {...props} />;
export const TextBody5: FC<Props> = (props) => <StyledBody5 {...props} />;
export const TextButton1: FC<Props> = (props) => <StyledButton1 {...props} />;
export const TextButton2: FC<Props> = (props) => <StyledButton2 {...props} />;
export const TextButton3: FC<Props> = (props) => <StyledButton3 {...props} />;
export const TextCaption: FC<Props> = (props) => <StyledCaption {...props} />;
export const TextOverline: FC<TextOverLineProps> = (props) => (
  <StyledOverline {...props} />
);
