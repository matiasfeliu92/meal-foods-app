import React from 'react'
import Categories from './Categories'
import Ingredients from './Ingredients'
import Areas from './Areas'

type Props = {
  categorySelected: string
}

const Meals = ({categorySelected}: Props) => {
  console.log(categorySelected)
  return (
    <div>
        <h1>All Meals</h1>
    </div>
  )
}

export default Meals
