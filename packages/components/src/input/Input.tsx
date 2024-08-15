import React from 'react'
import { Color, Props, Variant } from '@/types/index';
import { classNames } from '@dex/utilities';

type InputProps = Props<HTMLInputElement>& {
    variant?: Variant;
    color?: Color;
}

import './Input.scss';

export default function Input(props: InputProps) {
  const { className, variant = 'solid', color = 'info' } = props;
  return (
    <input {...props} className={classNames('dex-button', className, `dex-button-${variant}-${color}`)} />
  )
}
