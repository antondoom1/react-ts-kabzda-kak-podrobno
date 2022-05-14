import React from 'react'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  value: RatingValueType
  onClickHandler: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
  return (
    <div>
      <StarMemo selected={props.value > 0} onClickHandler={() => props.onClickHandler(1)}/>
      <StarMemo selected={props.value > 1} onClickHandler={() => props.onClickHandler(2)}/>
      <StarMemo selected={props.value > 2} onClickHandler={() => props.onClickHandler(3)}/>
      <StarMemo selected={props.value > 3} onClickHandler={() => props.onClickHandler(4)}/>
      <StarMemo selected={props.value > 4} onClickHandler={() => props.onClickHandler(5)}/>
    </div>
  )
}

const RatingMemo = React.memo(Rating)

type StarPropsType = {
  selected: boolean
  onClickHandler: () => void
}

function Star(props: StarPropsType) {
  return <span style={{cursor: 'pointer'}} onClick={props.onClickHandler}>
    {props.selected ? <b>star </b> : 'star '}
  </span>
}

const StarMemo = React.memo(Star)