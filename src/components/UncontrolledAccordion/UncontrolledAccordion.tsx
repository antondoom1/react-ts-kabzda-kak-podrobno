import React, {useReducer} from 'react'
import {reducer, TOGGLE_COLLAPSED} from './reducer'

type AccordionPropsType = {
  titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
  let [state, dispatch] = useReducer(reducer, {collapsed: false})

  return (
    <div>
      <AccordionTitleMemo title={props.titleValue} onClickHandler={() => {
        dispatch({type: TOGGLE_COLLAPSED})
      }}/>
      {!state.collapsed && <AccordionBodyMemo/>}
    </div>
  )
}

const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion)

type AccordionTitlePropsType = {
  title: string
  onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3
    style={{cursor: 'pointer'}}
    onClick={props.onClickHandler}>-- {props.title} --</h3>
}

const AccordionTitleMemo = React.memo(AccordionTitle)

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

const AccordionBodyMemo = React.memo(AccordionBody)

