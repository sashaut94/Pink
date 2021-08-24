import React from 'react'
import classes from './ReviewsSliderList.module.scss'
import {SlickSlider} from "../../Slider/Slider"
import ReviewsSliderItem from "./ReviewsSliderItem/ReviewsSliderItem"
import {SliderArrow} from "../../Slider/SliderArrows/SliderArrows"
import '../../../_global.scss'
import {SliderDot} from "../../Slider/SliderDot/SliderDot";

const reviews = [
  {
    fullName: 'Николай Петров',
    age: '25 лет',
    text: '«Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные серые вещи! А еще я познакомился со своей будущей женой в комментариях к выложенной фотографии!»',
    job: 'водитель трамвая'
  },
  {
    fullName: 'Галина Анатольевна',
    age: '46 лет',
    text: '«Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные серые вещи! А еще я познакомился со своей будущей женой в комментариях к выложенной фотографии!»',
    job: 'Кондуктор'
  },
  {
    fullName: 'Любовь Ивановна',
    age: '48 лет',
    text: '«Это приложение перевернуло мой мир и позволило по-новому взглянуть на привычные серые вещи! А еще я познакомился со своей будущей женой в комментариях к выложенной фотографии!»',
    job: 'Бухгалтер'
  }
]

let settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SliderArrow isNext={true}/>,
  prevArrow: <SliderArrow/>,
  appendDots: dots => <ul>{dots}</ul>,
  customPaging: () => <SliderDot/>,
  dotsClass: `${classes.dots} list`,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: false
      }
    }
  ]
}

export const ReviewsSliderList = props => (
  <section className={classes.ReviewsSliderList}>
    <div className={classes.wrapper}>
      <SlickSlider
        settings={settings}
        isSlider={true}
      >
        {
          reviews.map((review, index) => <ReviewsSliderItem
            key={index}
            fullName={review.fullName}
            age={review.age}
            text={review.text}
            job={review.job}
          />)
        }
      </SlickSlider>
    </div>
  </section>
)