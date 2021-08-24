import React from 'react'
import classes from './SliderArrows.module.scss'

export const SliderArrow = props => {
  const cls = [classes.SliderArrow]
  cls.push(props.isNext || false ? classes.next : classes.prev)
  return (
    <button
      className={cls.join(' ')}
      onClick={props.onClick}
    >
      <span className={'visually-hidden'}>
        {props.isNext ? 'Следующий слайд' : 'Предыдущий слайд'}
      </span>
    </button>
  )
}