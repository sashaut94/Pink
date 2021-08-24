import React from 'react'
import classes from './FullName.module.scss'
import {TextInput} from "../../../UI/TextInput/TextInput";

export const FullName = props => {
  return (
    <fieldset className={classes.FullName}>
      {props.controls.map(control => (
        <TextInput
          key={control.id}
          label={control.label}
          placeholder={control.placeholder}
          value={control.value}
          id={control.id}
          onChange={props.onChange}
          name={props.name}
        />
      ))}
    </fieldset>
  )
}