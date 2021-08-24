import React from 'react'
import classes from './SocialItem.module.scss'
import '../../../../_global.scss'

export const SocialItem = props => {
  const cls = [classes.link, classes[props.class]]
  return (
    <li className={classes.SocialItem}>
      <a
        className={cls.join(' ')}
        href={props.href}
        target='_blank'
        rel="noreferrer"
      >
        <span className='visually-hidden'>{props.class}</span>
      </a>
    </li>
  )
}