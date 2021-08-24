import React from 'react'
import classes from './Post.module.scss'
import {Picture} from "../Picture/Picture";
import Comment from "../Comment/Comment";

export const Post = props => {
  return (
    <div className={classes.Post}>
      <Picture
        name={props.name}
      />
      <Comment
        likes={props.likes}
        text={props.text}
        time={props.time}
        user={props.user}
      />
    </div>
  )
}
