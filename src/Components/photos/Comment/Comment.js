import React from "react"
import classes from './Comment.module.scss'
import {connect} from "react-redux"
import {LIKE_COMMENT} from "../../../store/actions/actionTypes"

const Comment = props => {
  const cls = [classes.comment]
  const panoramaWrapperCls = []
  const likeCls = [classes.like]
  if (props.isPanorama) {
    cls.push(classes.panorama)
    panoramaWrapperCls.push(classes.wrapper)
  }

  if (props.isLiked) {
    likeCls.push(classes.liked)
  }

  return <div className={panoramaWrapperCls.join(' ')}>
    <div className={cls.join(' ')}>
      <p className={classes.user}>
        {props.user}
        <span className={classes.timeAgo}>
             ({props.time} назад)
            </span>
      </p>
      <p className={classes.text}>
        {props.text}
      </p>
      <p className={classes.likes}>
        <button className={classes.button}>
          <svg className={likeCls.join(' ')} width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.383 11.49a.276.276 0 01-.124-.075v-.001c-1.199-1.32-2.111-2.323-2.811-3.091l-1.11-1.221a72.12 72.12 0 01-.794-.884
    4.011 4.011 0 01-.265-.321l-.015-.023-.017-.021A3.265 3.265 0 01.5 3.8c.004-.626.193-1.239.546-1.768.354-.53.859-.954
     1.457-1.22a3.59 3.59 0 011.92-.28c.655.085 1.27.348 1.772.756l.315.256.315-.255A3.58 3.58 0 019.07.5c.916.003
     1.79.355 2.432.976.641.62.997 1.456.997 2.324h0v.008a2.91 2.91 0 01-.788 2.031h0l-.005.005-5.038 5.56h0a.257.257
     0 01-.087.063.282.282 0 01-.112.023h-.086z" fill="currentColor" stroke="#D22856"/>
          </svg>
        </button>
        <span>Нравится: {props.likes}</span>
      </p>
    </div>
  </div>
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    likePost: newPosts => dispatch({type: LIKE_COMMENT, newPosts})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)