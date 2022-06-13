import React, {useEffect, useState} from 'react'
import s from './Clock.module.css'
import {DigitalClockView} from './DigitalClockView'
import {AnalogClockView} from './AnalogClockView'

type PropsType = {
  mode: 'digital' | 'analog'
}

export type ClockViewPropsType = {
  hours: string | number
  minutes: string | number
  seconds: string | number
}

export const Clock: React.FC<PropsType> = ({mode}) => {
  const [date, setDate] = useState<Date>(new Date())

  const hoursForDigitalClock = String(date.getHours()).padStart(2, '0')
  const minutesForDigitalClock = String(date.getMinutes()).padStart(2, '0')
  const secondsForDigitalClock = String(date.getSeconds()).padStart(2, '0')

  const hoursForAnalogClock = (((date.getHours() + 11) % 12 + 1)) * 30
  const minutesForAnalogClock = (date.getMinutes()) * 6
  const secondsForAnalogClock = (date.getSeconds()) * 6

  useEffect(() => {

    const id = setInterval(() => setDate(new Date()), 1000)

    return () => clearInterval(id)

  }, [])

  let view
  switch (mode) {
    case 'digital':
      view = <DigitalClockView hours={hoursForDigitalClock}
                               minutes={minutesForDigitalClock}
                               seconds={secondsForDigitalClock}/>
      break
    case 'analog':
    default:
      view = <AnalogClockView hours={hoursForAnalogClock}
                              minutes={minutesForAnalogClock}
                              seconds={secondsForAnalogClock}/>
  }

  return <div className={s.clockWrapper}>{view}</div>
}