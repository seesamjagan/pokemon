import { HTMLAttributes, ReactNode } from "react";

export interface Props<T = HTMLDivElement> extends HTMLAttributes<T> {
    children?: ReactNode
}

export  type Variant = 'solid' | 'outline' | 'link-text';

export type Color = 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'danger';
