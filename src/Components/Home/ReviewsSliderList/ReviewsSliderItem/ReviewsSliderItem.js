import React from 'react'
import classes from './ReviewsSliderItem.module.scss'
import {connect} from "react-redux";

const ReviewsSliderItem = props => {
  return (
    <div className={classes.ReviewsSliderItem}>
      <p className={classes.fullName}>
        {props.fullName}
        {props.width > 659
          ? <span className={classes['age-and-job']}>
          {props.age}, {props.job}
        </span>
          : null
        }
      </p>
      <p className={classes.text}>{props.text}</p>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    width: state.pink.width
  }
}

export default connect(mapStateToProps)(ReviewsSliderItem)