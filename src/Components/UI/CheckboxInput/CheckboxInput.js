import React from 'react'
import classes from './CheckboxInput.module.scss'

export const CheckboxInput = props => {
  const htmlFor = `checkbox-${props.id}`
  return (
    <div className={classes.CheckboxInput}>
      <input
        className={` ${classes.input} visually-hidden`}
        checked={props.checked}
        type="checkbox"
        id={htmlFor}
        onChange={() => props.onChange(props.name, props.id)}
      />
      <label className={classes.label} htmlFor={htmlFor}>{props.label}</label>
    </div>
  )
}