import React, {useState} from 'react'

type ItemType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onChange: () => void
  /**
   *  Elements that are showed when is opened. Each item should be ItemType
   */
  items: ItemType[]
  /**
   * Callback that is called when any item clicked
   * @param value is value of clicked item
   */
  onClick: (value: any) => void
  /**
   * Optional color of header text
   */
  color?: string
}

export function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitleMemo
        color={props.color}
        title={props.titleValue}
        onChange={props.onChange}/>

      {!props.collapsed && <AccordionBodyMemo items={props.items} onCLick={props.onClick}/>}
    </div>
  )
}

const AccordionMemo = React.memo(Accordion)

type AccordionTitlePropsType = {
  title: string
  onChange: () => void
  color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 style={{color: props.color ? props.color : 'black', cursor: 'pointer'}} onClick={(e) => props.onChange()}>-- {props.title} --</h3>
  )
}

const AccordionTitleMemo = React.memo(AccordionTitle)

type AccordionBodyPropsType = {
  items: ItemType[]
  onCLick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {
        props.items.map((i, index) => <li onClick={() => props.onCLick(i.value)} key={index}> {i.title} </li>)
      }
    </ul>
  )
}

const AccordionBodyMemo = React.memo(AccordionBody)