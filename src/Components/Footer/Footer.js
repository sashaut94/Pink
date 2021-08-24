import React from 'react'
import classes from './Footer.module.scss'
import Logo from "../Logo/Logo";
import {SocialsList} from "./SocialsList/SocialsList";
import {DevelopedBy} from "./DevelopedBy/DevelopedBy";

export const Footer = props => {
  return (
    <footer className={classes.Footer}>
      <Logo isFooter={true}/>
      <SocialsList/>
      <DevelopedBy/>
    </footer>
  )
}