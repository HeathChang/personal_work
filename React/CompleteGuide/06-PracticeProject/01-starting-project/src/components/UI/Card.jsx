//import from 3rd party
import React from 'react'

//import from src/files
import classes from './css/Card.module.css'
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>
}
export default Card
