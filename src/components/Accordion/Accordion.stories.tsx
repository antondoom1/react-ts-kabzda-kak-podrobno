import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'
import {Accordion, AccordionPropsType} from './Accordion'
import {Story} from '@storybook/react'

const GetCategoryObj = (CategoryName: 'Color' | 'Event' | 'Main') => ({
  table: {
    category: CategoryName
  }
})

export default {
  title: 'components/Accordion',
  component: Accordion,
  argTypes: {
    color: {
      control: 'color',
      ...GetCategoryObj('Color')
    },
    onChange: {
      ...GetCategoryObj('Event')
    },
    onClick: {
      ...GetCategoryObj('Event')
    },
    items: {...GetCategoryObj('Main')},
    collapsed: {...GetCategoryObj('Main')},
    titleValue: {...GetCategoryObj('Main')}
  }
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
const callbacksProps = {
  onChange: callback,
  onClick: onClickCallback
}

export const MenuCollapsedMode = () => Template.bind({})
MenuCollapsedMode.args = {
  ...callbacksProps,
  titleValue: 'Menu',
  collapsed: true,
  items: []
}

export const UsersUncollapsedMode = () => Template.bind({})
UsersUncollapsedMode.args = {
  ...callbacksProps,
  titleValue: 'Users',
  collapsed: false,
  items: [
    {title: 'Anton', value: 1},
    {title: 'Dasha', value: 2},
    {title: 'Dima', value: 3},
    {title: 'Natasha', value: 4}
  ]
}

export const ModeChanging: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(true)

  return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
  titleValue: 'Users',
  items: [
    {title: 'Anton', value: 1},
    {title: 'Dasha', value: 2},
    {title: 'Dima', value: 3},
    {title: 'Natasha', value: 4}
  ],
  onClick: (value) => {
    alert(`user with ID ${value} should be happy`)
  }
}
