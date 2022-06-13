import React from 'react'
import s from './Clock.module.css'
import {ClockViewPropsType} from './Clock'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({hours, minutes, seconds}) => {
  return (
    <div className={s.clock}>
      <div className={s.wrap}>
        <span
          className={s.hour}
          style={{transform: `rotate(${hours}deg)`}}></span>
        <span
          className={s.minute}
          style={{transform: `rotate(${minutes}deg)`}}></span>
        <span
          className={s.second}
          style={{transform: `rotate(${seconds}deg)`}}></span>
        <span
          className={s.dot}></span>
      </div>
    </div>
  )
}