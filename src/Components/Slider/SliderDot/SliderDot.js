import React from 'react'
import classes from './SliderDot.module.scss'

export const SliderDot = props => (
  <span
    className={classes.item}
    onClick={props.onClick}
  />
)