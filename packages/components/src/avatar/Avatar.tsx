import React from 'react'
import './Avatar.scss';
import { Props } from '@/types';

export default function Avatar({name, ...rest}: {name: string, src: string, width?: string | number, height?: string | number} & Props<HTMLImageElement>) {
  return (
    <div className={'avatar'}>
        <label>{name}</label>
        <img {...rest} alt={name} />
    </div>
  )
}
