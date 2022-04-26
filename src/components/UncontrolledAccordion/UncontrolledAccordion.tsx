import React, {useState} from 'react'

type AccordionPropsType = {
  titleValue: string
  // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(false)

  return (
    <div>
      <AccordionTitle title={props.titleValue} onClickHandler={() => setCollapsed(!collapsed)}/>
      { !collapsed && <AccordionBody/> }
    </div>
  )
}

type AccordionTitlePropsType = {
  title: string
  onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3
    style={{cursor: 'pointer'}}
    onClick={props.onClickHandler}>-- {props.title} --</h3>
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

export default UncontrolledAccordion