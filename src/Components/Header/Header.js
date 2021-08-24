import React from 'react'
import Navigation from "../Navigation/Navigation"
import classes from './Header.module.scss'
import {connect} from "react-redux";

const Header = props => {
  const cls = [classes.Header]
  if (props.isMenuOpen && props.width < 1200) cls.push(classes.opened)
  return (
    <header className={cls.join(' ')}>
      <Navigation/>
      {props.children}
    </header>
  )
}

function mapStateToProps(state) {
  return {
    isMenuOpen: state.pink.isMenuOpen,
    width: state.pink.width
  }
}

export default connect(mapStateToProps)(Header)