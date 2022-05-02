import React, {useState} from 'react'

type PropsType = {
  onChange: (on: boolean) => void
  defaultOn?: boolean
}

export const UncontrolledOnOff = (props: PropsType) => {
  const [on, setOn] = useState<boolean>(props.defaultOn ? props.defaultOn : false)

  const onStyle = {
    padding: '5px',
    width: '40px',
    display: 'inline-block',
    border: '1px solid black',
    textAlign: 'center' as const,
    background: on ? 'greenyellow' : 'white'
  }
  const offStyle = {
    margin: '1px',
    padding: '5px',
    width: '40px',
    display: 'inline-block',
    border: '1px solid black',
    textAlign: 'center' as const,
    background: !on ? 'orangered' : 'white'
  }
  const indicatorStyle = {
    width: '5px',
    height: '5px',
    padding: '5px',
    margin: '2px 5px',
    display: 'inline-block',
    border: '1px solid black',
    borderRadius: '50%',
    verticalAlign: 'sub',
    background: on ? 'greenyellow' : 'orangered'
  }

  const onClicked = () => {
    setOn(true)
    props.onChange(true)
  }
  const offClicked = () => {
    setOn(false)
    props.onChange(false)
  }

  return (
    <div style={{padding: '10px'}}>
      <div style={onStyle} onClick={onClicked}>on</div>
      <div style={offStyle} onClick={offClicked}>off</div>
      <div style={indicatorStyle}/>
    </div>
  )
}
