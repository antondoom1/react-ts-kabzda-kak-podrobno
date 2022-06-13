import React from 'react'
import {Clock} from './Clock'

export default {
  title: 'clock',
  component: Clock
}

export const DigitalClock = () => {
  return <Clock mode={'digital'}/>
}

export const AnalogClock = () => {
  return <Clock mode={'analog'}/>
}

// export const ClockVariant2 = () => {
//
//   const [state, setState] = useState<string>('')
//
//   let clock = new Date().toLocaleTimeString('ru-RU', {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit'
//   })
//
//   useEffect(() => {
//
//     const id = setInterval(() => setState(clock), 1000)
//
//     return () => clearInterval(id)
//
//   }, [state])
//
//   return <>
//     Clock - {clock}
//   </>
// }