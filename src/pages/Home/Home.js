import React from 'react'
import {Offers} from "../../Components/Home/Offers/Offers"
import {ReviewsSliderList} from "../../Components/Home/ReviewsSliderList/ReviewsSliderList"
import TarifsSlider from "../../Components/Home/TarifsSlider/TarifsSlider"
import {ContactUs} from "../../Components/Home/ContuctUs/ContactUs";

export const Home = props => {
  return (
    <>
      <Offers/>
      <ReviewsSliderList/>
      <TarifsSlider/>
      <ContactUs/>
    </>
  )
}
