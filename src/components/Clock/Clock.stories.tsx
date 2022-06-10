import React, {useEffect, useState} from 'react'
import {Clock} from './Clock'

export default {
  title: 'clock',
  component: Clock
}

export const ClockVariant1 = () => {
  return <Clock toggleDigital={false}/>
}

export const ClockVariant2 = () => {

  const [state, setState] = useState<string>('')

  let clock = new Date().toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  useEffect(() => {

    const id = setInterval(() => setState(clock), 1000)

    return () => clearInterval(id)

  }, [state])

  return <>
    Clock - {clock}
  </>
}