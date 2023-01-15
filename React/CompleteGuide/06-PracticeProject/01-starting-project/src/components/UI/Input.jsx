//import from 3rd party
import React from 'react'

//import from src/files
import classes from './css/Input.module.css'

//use React.forwardRef to use ref in  custom component
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* {...props.input}을 통해 Parenet에서 props (type등)을 받을 수 있음   */}
    </div>
  )
})
export default Input
