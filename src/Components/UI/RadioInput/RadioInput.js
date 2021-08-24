import React from 'react'
import classes from './RadioInput.module.scss'

export const RadioInput = props => {
  const htmlFor = `radio-${props.id}`
  return (
    <div className={classes.RadioInput}>
      <input
        className={`${classes.input} visually-hidden`}
        id={htmlFor}
        type="radio"
        name={props.name}
        checked={props.checked}
        onChange={() => props.onChange(props.fieldSetName, props.id)}
      />
      <label className={classes.label} htmlFor={htmlFor}>
        {props.label}
      </label>
    </div>
  )
}