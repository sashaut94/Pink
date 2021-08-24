import React from 'react'
import classes from './Achievements.module.scss'
import {CheckboxInput} from "../../../UI/CheckboxInput/CheckboxInput";

export const Achievements = props => {
  return (
    <div className={classes.Achievements}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.title}>
          {props.title}
        </legend>
        {
          props.controls.map(control => (
            <CheckboxInput
              key={control.id}
              label={control.label}
              id={control.id}
              checked={control.checked}
              name={props.name}
              onChange={props.onChange}
            />
          ))
        }
      </fieldset>
    </div>
  )
}