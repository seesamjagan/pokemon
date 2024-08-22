import React from 'react';

import { Color, Props, Variant } from '@/types/index';
import { classNames } from '@dex/utilities';
import './Button.scss';

type ButtonProps = Props<HTMLButtonElement> & {
    variant?: Variant;
    color?: Color;
}

export default function Button(props: ButtonProps) {
    const { className, variant = 'solid', color = 'info' } = props;
  return (
    <button {...props} className={classNames('dex-button', className, `dex-button-${variant}-${color}`)} />
  )
}
