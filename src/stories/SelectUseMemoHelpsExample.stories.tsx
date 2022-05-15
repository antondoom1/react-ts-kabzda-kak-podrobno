import React, {useMemo, useState} from 'react'
import {SelectMemo} from '../components/Select/Select'

export default {
  title: 'UseMemo',
  component: SelectMemo
}

export const Example1 = () => {
  const [state, setState] = useState([
    {country: 'BLR', value: '1', title: 'Minsk'},
    {country: 'RU', value: '2', title: 'Moscow'},
    {country: 'UK', value: '3', title: 'Kiev'},
    {country: 'UK', value: '4', title: 'Kherson'},
    {country: 'RU', value: '5', title: 'Omsk'},
    {country: 'BLR', value: '6', title: 'Gomel'}
  ])
  const [value, setValue] = useState('')

  const blrCountries = useMemo(() => {
    return state.filter(s => s.country === 'BLR')
  }, [state])

  const startsOnMLetterCountries = useMemo(() => {
    return state.filter(s => s.title.toLowerCase().startsWith('m'))
  }, [state])

  return <div style={{display: 'flex', gap: '30px'}}>
    <SelectMemo onChange={setValue}
                value={value}
                items={blrCountries}/>
    <SelectMemo onChange={setValue}
                value={value}
                items={startsOnMLetterCountries}/>
  </div>
}

