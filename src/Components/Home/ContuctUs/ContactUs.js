import React from 'react'
import classes from './ContactUs.module.scss'
import {ContactItem} from "./ContactItem/ContactItem";
import '../../../_global.scss'

const contacts = [
  {id: 1, text: 'Звоните', link: '+7 (812) 555-66-66'},
  {id: 2, text: 'Пишите', link: 'mail@htmlacademy.ru'},
  {id: 3, text: 'Приезжайте в гости', link: (<>ул. Большая <br/> Конюшенная, 19/8</>), target: '_blank'}
]

export const ContactUs = props => {
  return (
    <section className={classes.ContactUs}>

      <div className={classes.contacts}>

        <h3 className={classes.title}>
          Остались вопросы?
          <br/>
          Свяжитесь с нами!
        </h3>

        <ul className={`${classes.list} list`}>

          {contacts.map(contact => <ContactItem
              key={contact.id}
              text={contact.text}
              link={contact.link}
              target={contact.target}
              class={`item-${contact.id}`}
            />
          )}

        </ul>

      </div>

      <div className={classes.map}/>

    </section>
  )
}