import React from 'react'
import classes from './TextInput.module.scss'

export const TextInput = props => {
  const cls = [classes.TextInput]
  const htmlFor = `FullNameTextInput-${props.id}`
  if (props.isContact) cls.push(classes.contactInput)
  if (props.icon) cls.push(classes[props.icon])
  return (
    <div className={cls.join(' ')}>
      <label
        className={classes.label}
        htmlFor={htmlFor}
      >{props.label}
      </label>
      <p className={classes['input-wrapper']}>
        <input
          className={classes.input}
          id={htmlFor}
          value={props.value}
          type="text"
          placeholder={props.placeholder}
          onChange={(e) => (props.onChange(props.name, props.id, e))}
        />
      </p>
    </div>
  )
}