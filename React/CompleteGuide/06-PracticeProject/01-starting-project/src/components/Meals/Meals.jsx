//import from 3rd party
import React, { Fragment } from 'react'

//import from src/files
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  )
}
export default Meals
