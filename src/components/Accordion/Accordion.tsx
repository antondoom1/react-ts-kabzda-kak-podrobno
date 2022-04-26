import React, {useState} from 'react'

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
  onClickHandler: () => void
}

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.titleValue} onClickHandler={props.onClickHandler}/>
      {!props.collapsed && <AccordionBody/>}
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 style={{cursor: 'pointer'}} onClick={props.onClickHandler}>
    -- {props.title} --
  </h3>
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

export default Accordion