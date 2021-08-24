import React from 'react'
import classes from './Title.module.scss'
import {connect} from "react-redux";

const Title = props => {
  const cls = [classes.Title, classes[props.class]]
  return (
    <h1 className={cls.join(' ')}>
      {props.children}
    </h1>
  )
}

function MapStateToProps(state) {
  return {
    isMenuOpen: state.pink.isMenuOpen,
    width: state.pink.width
  }
}

export default connect(MapStateToProps)(Title)