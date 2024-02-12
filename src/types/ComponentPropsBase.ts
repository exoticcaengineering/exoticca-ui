import React from 'react';

export interface ComponentPropsBase extends JSX.IntrinsicAttributes {
  id?: string;
  className?: string;
  testId?: string;
  as?: keyof JSX.IntrinsicElements;
}

export interface ComponentPropsBaseWithChildren extends ComponentPropsBase {
  children: React.ReactNode;
}

export interface ComponentPropsBaseWithOptionalChildren
  extends ComponentPropsBase {
  children?: React.ReactNode;
}
