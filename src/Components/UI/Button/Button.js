import React from 'react'
import classes from './Button.module.scss'

export const Button = props => {
  const cls = [classes.Button]
  if (props.type) cls.push(classes[props.type])
  if (props.class) cls.push(props.class)
  return (
    <button
      disabled={props.disabled || false}
      className={cls.join(' ')}>
      {props.children}
    </button>
  )
}