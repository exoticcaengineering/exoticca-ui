import React from 'react';
export interface ComponentPropsBase {
    id?: string;
    className?: string;
    testId?: string;
}
export interface ComponentPropsBaseWithChildren extends ComponentPropsBase {
    children: React.ReactNode;
}
export interface ComponentPropsBaseWithOptionalChildren extends ComponentPropsBase {
    children?: React.ReactNode;
}
