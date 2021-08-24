import React from 'react'
import classes from './GetApp.module.scss'
import Title from "../../Title/Title"
import '../../../_global.scss'
import '../../../_variables.scss'
import {Button} from "../../UI/Button/Button"

const links = [
  {id: 1, class: 'apple'},
  {id: 2, class: 'android'},
  {id: 3, class: 'windows'}
]

export const GetApp = props => {
  return (
    <div className={classes.HomeGetApp}>
      <Title class={'home'}>Взгляните <br className='from-tablet'/>на жизнь <br/>
        иначе!</Title>
      <div className={classes.getApp}>
        <Button
          type='getApp'
          class={classes.button}
        >Скачать приложение</Button>
        <ul className={`list ${classes.list}`}>
          {links.map(link => (
            <li
              className={`${classes.item} ${classes[link.class]}`}
              key={link.id}
            >
              <span className='visually-hidden'>
                {link.class}
              </span>
            </li>
          ))}
        </ul>
        <p className={classes.text}>Доступно для iPhone, iPad, Android, <br/> Windows Phone, OS X, Windows 8</p>
      </div>
    </div>
  )
}