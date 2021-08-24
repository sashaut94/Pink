import React from 'react'
import classes from './Navigation.module.scss'
import Toggle from './Toggle/Toggle'
import Logo from "../Logo/Logo"
import '../../_global.scss'
import {connect} from "react-redux"
import {NavList} from "./NavList/NavList"

const Navigation = props => {
  const cls = [classes.Navigation]
  if (props.isMenuOpen && props.width < 1200) cls.push(classes.opened)
  return (
    <div className={cls.join(' ')}>
      <div className={classes.wrapper}>
        <div className={classes['logo-and-toggle']}>
          <Logo/>
          <Toggle/>
        </div>
        <NavList
          isMenuOpen={props.isMenuOpen}
          width={props.width}
        />
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    isMenuOpen: state.pink.isMenuOpen,
    width: state.pink.width
  }
}

export default connect(mapStateToProps)(Navigation)
