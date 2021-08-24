import React from 'react'
import classes from './Offers.module.scss'
import {OffersList} from "./OffersList/OffersList"
import HomeEffect from "../Effect/Effect";

export const Offers = props => {
  return (
    <section className={classes.Offers}>
      <h3 className={classes.title}>
        <span className={classes.text}>
          Устали от серости мегаполиса?
        </span>
        Нам есть, что вам <br/>
        предложить!
      </h3>
      <OffersList/>
      <HomeEffect/>
    </section>
  )
}