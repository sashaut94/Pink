import React from 'react'
import classes from './TarifsSlider.module.scss'
import {connect} from "react-redux"
import {SlickSlider} from "../../Slider/Slider";
import TarifItem from "./TarifItem/TarifItem";
import {SliderDot} from "../../Slider/SliderDot/SliderDot";

const tarifs = [
  {
    isMobile: false,
    id: 1,
    options: [
      {id: 1, text: 'Розовый фильтр'},
      {id: 2, text: 'Смайлики'},
      {id: 3, text: 'Комментарии'}
    ]
  },
  {
    isMobile: true,
    id: 2,
    name: 'База',
    price: '1,99 USD',
    options: [
      {id: 1, text: 'Розовый фильтр', available: true},
      {id: 2, text: 'Смайлики', available: false},
      {id: 3, text: 'Комментарии', available: false}
    ]
  },
  {
    isMobile: true,
    id: 3,
    name: 'Стандарт',
    price: '3,99 USD',
    hit: true,
    options: [
      {id: 1, text: 'Розовый фильтр', available: true},
      {id: 2, text: 'Смайлики', available: true},
      {id: 3, text: 'Комментарии', available: false}
    ]
  },
  {
    isMobile: true,
    id: 4,
    name: 'Анлим',
    price: '9,99 USD',
    options: [
      {id: 1, text: 'Розовый фильтр', available: true},
      {id: 2, text: 'Смайлики', available: true},
      {id: 3, text: 'Комментарии', available: true}
    ]
  }
]

const TarifsSlider = props => {

  return (
    <section className={classes.Tarifs}>
      {
        <SlickSlider
          isSlider={props.width < 660}
          class={classes.wrapper}
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: dots => <ul>{dots}</ul>,
            dotsClass: `${classes.dots} list`,
            customPaging: () => <SliderDot/>,
            centerMode: true,
            centerPadding: '20px'
          }}
        >
          {
            tarifs.map(tarif => {
              return props.width >= 660 || tarif.isMobile
                ? <TarifItem
                  key={tarif.id}
                  id={tarif.id}
                  name={tarif.name}
                  price={tarif.price}
                  options={tarif.options}
                  isMobile={tarif.isMobile}
                  hit={tarif.hit || false}
                  lastId={tarifs.length}
                />
                : null
            })
          }
        </SlickSlider>
      }
    </section>
  )
}

function mapStateToProps(state) {
  return {
    width: state.pink.width
  }
}

export default connect(mapStateToProps)(TarifsSlider)