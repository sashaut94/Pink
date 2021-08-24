import React from 'react'
import classes from './ContactInfo.module.scss'
import {TextInput} from "../../../UI/TextInput/TextInput";

export const ContactInfo = props => {
  return (
    <div className={classes.ContactInfo}>
      <fieldset className={classes.fieldset}>
        {props.width > 659 && <legend className={classes.title}>
          Контактная информация
        </legend>}
        {props.contacts.map((contact, index) => (
          <TextInput
            key={index}
            label={contact.label}
            placeholder={contact.placeholder}
            isContact={true}
            icon={contact.icon}
          />
        ))}
      </fieldset>
    </div>
  )
}