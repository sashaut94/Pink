import React from 'react'
import classes from './KindOfApp.module.scss'
import {RadioInput} from "../../../UI/RadioInput/RadioInput";

export const KindOfApp = props => {
  return (
    <div className={classes.KindOfApp}>
      <fieldset className={classes.fieldset}>
        <legend className={classes.title}>
          {props.title}
        </legend>
        {
          props.controls.map(control => (
            <RadioInput
              key={control.id}
              label={control.label}
              id={control.id}
              name={props.name}
              checked={control.checked}
              onChange={props.onChange}
              fieldSetName={props.fieldSetName}
            />
          ))
        }
      </fieldset>
    </div>
  )
}