import React, {useState} from 'react'
import {ComponentStory, ComponentMeta} from '@storybook/react'
import {Rating, RatingValueType} from './Rating'


export default {
  title: 'Rating',
  component: Rating
}

export const EmptyRating = () => <Rating value={0} onClickHandler={x => x}/>
export const Rating1 = () => <Rating value={1} onClickHandler={x => x}/>
export const Rating2 = () => <Rating value={2} onClickHandler={x => x}/>
export const Rating3 = () => <Rating value={3} onClickHandler={x => x}/>
export const Rating4 = () => <Rating value={4} onClickHandler={x => x}/>
export const Rating5 = () => <Rating value={5} onClickHandler={x => x}/>
export const RatingChanging = () => {
  const [rating, setRating] = useState<RatingValueType>(3)
  return <Rating value={rating} onClickHandler={setRating}/>
}
