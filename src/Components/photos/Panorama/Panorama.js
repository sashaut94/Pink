import React from 'react'
import classes from './Panorama.module.scss'
import {Picture} from "../Picture/Picture";
import Comment from "../Comment/Comment";

export const Panorama = props => {
  return (
    <div className={classes.panorama}>
      <Picture
        name={props.name}
      />
      <Comment
        user={props.user}
        likes={props.likes}
        text={props.text}
        time={props.time}
        isPanorama={true}
      />
    </div>
  )
}