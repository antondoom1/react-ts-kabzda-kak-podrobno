import React from 'react'
import {ClockViewPropsType} from './Clock'

export const DigitalClockView: React.FC<ClockViewPropsType> = ({hours, minutes, seconds}) => {
  return (
    <div style={{fontSize: '50px'}}>
      {
        `${hours}:${minutes}:${seconds}`
      }
    </div>
  )
}