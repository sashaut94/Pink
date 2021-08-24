import React from "react";
import classes from './RangeInput.module.scss'
import {connect} from "react-redux";
import {Toggles} from "../Toggles/Toggles";

const RangeInput = props => {
  return (
    <div className={classes.RangeInput}>
      <Toggles
        name={props.name}
        active={props.active}
      />
      {
        (props.active || props.width > 659) && <input
          className={classes.input}
          type="range"
          value={props.value}
        />
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    width: state.pink.width
  }
}

export default connect(mapStateToProps)(RangeInput)