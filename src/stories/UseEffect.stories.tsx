import React, {useEffect, useState} from 'react'

export default {
  title: 'useEffect demo'
}

export const SimpleExample = () => {
  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)

  console.log('SimpleExample')

  useEffect(() => {
    console.log('useEffect every render')
    document.title = counter.toString()
    // api.getUsers().then('')
    // setInterval
    // indexedDB
    // document.getElementId
    // document.title = 'User '
  })

  useEffect(() => {
    console.log('useEffect only first render (componentDidMount)')
    document.title = counter.toString()
  }, [])

  useEffect(() => {
    console.log('useEffect first render and every counter change')
    document.title = counter.toString()
  }, [counter])

  return <>
    Hello, {counter} {fake}
    <button onClick={() => setFake(fake + 1)}>fake+</button>
    <button onClick={() => setCounter(counter + 1)}>counter+</button>
  </>
}

export const SetTimeoutExample = () => {
  const [state, setState] = useState<string>('')

  let clock = new Date().toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  useEffect(() => {

    setInterval(() => setState(clock), 1000)

  }, [state])

  return <>
    Clock - {clock}
  </>
}

export const SetTimeoutExample2 = () => {
  const [date, setDate] = useState<Date>(new Date())

  let hours = String(date.getHours()).padStart(2, '0')
  let minutes = String(date.getMinutes()).padStart(2, '0')
  let seconds = String(date.getSeconds()).padStart(2, '0')

  useEffect(() => {

    setInterval(() => setDate(new Date()), 1000)

  }, [seconds])

  return <>
    Clock - {`${hours}:${minutes}:${seconds}`}
  </>
}