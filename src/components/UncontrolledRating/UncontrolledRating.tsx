import React, {useState} from 'react'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  defaultValue?: RatingValueType
  onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {
  const [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

  return (
    <div>
      <StarMemo selected={value > 0} onClickHandler={() => {
        setValue(1)
        props.onChange(1)
      }}/>
      <StarMemo selected={value > 1} onClickHandler={() => {
        setValue(2)
        props.onChange(2)
      }}/>
      <StarMemo selected={value > 2} onClickHandler={() => {
        setValue(3)
        props.onChange(3)
      }}/>
      <StarMemo selected={value > 3} onClickHandler={() => {
        setValue(4)
        props.onChange(4)
      }}/>
      <StarMemo selected={value > 4} onClickHandler={() => {
        setValue(5)
        props.onChange(5)
      }}/>
    </div>
  )
}

const UncontrolledRatingMemo = React.memo(UncontrolledRating)

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