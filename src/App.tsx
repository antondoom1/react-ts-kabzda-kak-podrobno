import React, {useState} from 'react'
import './App.css'
import {Rating, RatingValueType} from './components/Rating/Rating'
import {Accordion} from './components/Accordion/Accordion'
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion'
import {OnOff} from './components/OnOff/OnOff'
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff'

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  const [on, setOn] = useState<boolean>(false)

  return (
    <div className="App">
      {/*<OnOff on={on} onClickHandler={setOn}/>*/}
      <UncontrolledOnOff onChange={setOn} /> {on.toString()}
      {/*<Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onClickHandler={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
      <UncontrolledAccordion titleValue={'Users'}/>
      {/*<Rating value={ratingValue} onClickHandler={setRatingValue} />*/}
      {/*<UncontrolledRating/>*/}
    </div>
  )
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: any) {
  return <h1>{props.title}</h1>
}

export default App
