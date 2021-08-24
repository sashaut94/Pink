import React from 'react'
import classes from './Effect.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Effect = props => {
  if (props.width < 660) return null
  return (
    <div className={classes.HomeEffect}>
      <div className={classes.wrapper}>
        <div className={classes.inner}>
          <h4 className={classes.title}>
            Эффект <br className='tablet-only'/>на 24 часа!
          </h4>
          <p className={classes.text}>
            Британские ученые провели исследования <br className='tablet-only'/>
            и доказали, <br className='desktop-only'/> что положительный эффект <br className='tablet-only'/>
            от использования приложения <br className='desktop-only'/> длится <br className='tablet-only'/>
            целые сутки!
          </p>
          <NavLink className={classes.link} to='/' exact>
            Узнать больше об исследовании
          </NavLink>
        </div>
      </div>

    </div>
  )
}

function mapStateToProps(state) {
  return {
    width: state.pink.width
  }
}

export default connect(mapStateToProps)(Effect)