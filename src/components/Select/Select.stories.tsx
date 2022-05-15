import React, {useState} from 'react'
import {SelectMemo} from './Select'

export default {
  title: 'Select',
  component: SelectMemo
}

export const WithValue = () => {
  const [value, setValue] = useState('2')

  return <>
    <SelectMemo onChange={setValue}
                value={value}
                items={[
                  {value: '1', title: 'Minsk'},
                  {value: '2', title: 'Moscow'},
                  {value: '3', title: 'Kiev'}
                ]}/>
  </>
}

export const WithoutValue = () => {
  const [value, setValue] = useState(null)

  return <>
    <SelectMemo onChange={setValue}
                value={value}
                items={[
                  {value: '1', title: 'Minsk'},
                  {value: '2', title: 'Moscow'},
                  {value: '3', title: 'Kiev'}
                ]}/>
  </>
}