import React, {useEffect, useState} from 'react'
import s from './Clock.module.css'

type PropsType = {
  toggleDigital: boolean
}

export const Clock: React.FC<PropsType> = ({toggleDigital}) => {
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

  return <div className={s.clockWrapper}>
    {
      toggleDigital
        ? <div style={{fontSize: '50px'}}>
          {`${hoursForDigitalClock}:${minutesForDigitalClock}:${secondsForDigitalClock}`}
        </div>
        : <div className={s.clock}>
          <div className={s.wrap}>
            <span
              className={s.hour}
              style={{transform: `rotate(${hoursForAnalogClock}deg)`}}></span>
            <span
              className={s.minute}
              style={{transform: `rotate(${minutesForAnalogClock}deg)`}}></span>
            <span
              className={s.second}
              style={{transform: `rotate(${secondsForAnalogClock}deg)`}}></span>
            <span
              className={s.dot}></span>
          </div>
        </div>
    }
  </div>
}