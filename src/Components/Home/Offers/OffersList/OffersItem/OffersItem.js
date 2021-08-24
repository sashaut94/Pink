import React from 'react'
import classes from './OffersItem.module.scss'

export const OffersItem = props => {
  return (
    <li className={`${classes.OffersItem} ${classes[props.class]}`}>
      <h4 className={classes.title}>{props.title}</h4>
      <p className={classes.text}>{props.text}</p>
    </li>
  )
}