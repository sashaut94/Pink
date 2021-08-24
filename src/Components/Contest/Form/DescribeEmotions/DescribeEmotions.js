import React from 'react'
import classes from './DescribeEmotions.module.scss'

export const DescribeEmotions = props => {
  return (
    <div className={classes.DescribeEmotions}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.title}>Опишите свои эмоции</legend>
        <textarea
          className={classes.textarea}
          placeholder='Можно прям в красках, не
            стесняясь в выражениях'
          name="" id=""/>
      </fieldset>
    </div>
  )
}