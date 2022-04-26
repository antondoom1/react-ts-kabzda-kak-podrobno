import React, {useState} from 'react'

type OnOffType = {
  on: boolean
  onClickHandler: (on: boolean) => void
}

export const OnOff = (props: OnOffType) => {

  const onStyle = {
    padding: '5px',
    width: '40px',
    display: 'inline-block',
    border: '1px solid black',
    textAlign: 'center' as const,
    background: props.on ? 'greenyellow' : 'white',
    cursor: 'pointer'
  }
  const offStyle = {
    margin: '1px',
    padding: '5px',
    width: '40px',
    display: 'inline-block',
    border: '1px solid black',
    textAlign: 'center' as const,
    background: !props.on ? 'orangered' : 'white',
    cursor: 'pointer'
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
    background: props.on ? 'greenyellow' : 'orangered'
  }

  return (
    <div style={{padding: '10px'}}>
      <div style={onStyle} onClick={() => props.onClickHandler(true)}>on</div>
      <div style={offStyle} onClick={() => props.onClickHandler(false)}>off</div>
      <div style={indicatorStyle}/>
    </div>
  )
}
