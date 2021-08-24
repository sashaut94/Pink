import React from 'react'
import classes from './ContactItem.module.scss'

export const ContactItem = props => {
  const cls = [classes.item]
  cls.push(classes[props.class])
  return (
    <li className={cls.join(' ')}>
      <p className={classes.text}>
        {props.text}:
      </p>
      <a
        className={classes.link}
        href={props.href}
        target={props.target}
      >
        {props.link}
      </a>

    </li>
  )
}
