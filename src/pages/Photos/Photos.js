import React from 'react'
import classes from './Photos.module.scss'
import '../../_variables.scss'
import {connect} from "react-redux";
import {Panorama} from "../../Components/photos/Panorama/Panorama";
import {Post} from "../../Components/photos/Post/Post";
import {AddPhoto} from "../../Components/photos/AddPhoto/Addphoto";

const Photos = props => {
  return (
    <>
      <h3 className={classes.title}>
        Взгляните на фотографии, которые выкладывают пользователи!
        Видите, как не хватает ваших?
      </h3>
      <Panorama
        name={props.panorama.photo}
        likes={props.panorama.likes}
        text={props.panorama.text}
        time={props.panorama.time}
        user={props.panorama.user}
      />
      <div className={classes.gallery}>
        {
          props.posts.map(post => <Post
            key={post.id}
            name={post.photo}
            likes={post.likes}
            text={post.text}
            time={post.time}
            user={post.user}
          />)
        }
      </div>
      <AddPhoto ranges={props.ranges}/>
    </>
  )
}

function mapStateToProps(state) {
  return {
    panorama: state.photos.panorama,
    posts: state.photos.posts,
    ranges: state.photos.ranges
  }
}

export default connect(mapStateToProps)(Photos)