import React from 'react'
import classes from './SocialsList.module.scss'
import {SocialItem} from "./SocialItem/SocialItem";
import '../../../_global.scss'

const socials = [
  {
    id: 1, class: 'twitter', href: "https://twitter.com/"
  },
  {
    id: 2, class: 'facebook', href: "https://facebook.com/"
  },
  {
    id: 3, class: 'youtube', href: "https://youtube.com/"
  }
]

export const SocialsList = props => (
  <ul className={`${classes.SocialList} list`}>
    {
      socials.map(social => (
        <SocialItem
          key={social.id}
          class={social.class}
          href={social.href}
        />
      ))
    }
  </ul>
)