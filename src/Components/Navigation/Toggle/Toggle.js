import React from 'react'
import classes from './Toggle.module.scss'
import {connect} from "react-redux";
import {MENU_TOGGLE} from "../../../store/actions/actionTypes";

const Toggle = props => {
  const cls = [classes.Toggle]
  cls.push(props.isMenuOpen ? classes.opened : classes.closed)
  if (props.width >= 1200) return null
  return (
    <button
      className={cls.join(' ')}
      onClick={props.onToggleMenuHandler}
    >
        <span className='visually-hidden'>
          {props.isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
        </span>
    </button>
  )
}

function mapStateToProps(state) {
  return {
    width: state.pink.width,
    isMenuOpen: state.pink.isMenuOpen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleMenuHandler: () => dispatch({type: MENU_TOGGLE})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)