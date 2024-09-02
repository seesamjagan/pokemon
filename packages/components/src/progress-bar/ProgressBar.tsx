import React from 'react'

import './ProgressBar.scss';

type ProgressBarProp = {
    value: number;
}

export default function ProgressBar(props: ProgressBarProp) {
    let { value } = props;
    value = Math.max(0, value);
    value = Math.min(100, value);
  return (
    <div className='progress-bar'>
        <div className='current-progress' style={{width: `${value}%`}} />
    </div>
  )
}
