//import from 3rd party
import React from 'react'

//import from src/files
import classes from './css/Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* {...props.input}을 통해 Parenet에서 props (type등)을 받을 수 있음   */}
    </div>
  )
}
export default Input
