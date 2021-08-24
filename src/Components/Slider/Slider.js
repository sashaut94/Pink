import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const SlickSlider = (props) => {
  return (
    props.isSlider
      ? <Slider {...props.settings}
      >
        {props.children}
      </Slider>
      : <div className={props.class}>
        {props.children}
      </div>
  )
}
