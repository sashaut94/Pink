import React from "react"
import classes from './Picture.module.scss'

export const Picture = ({name}) => {
  return (
    <picture>
      <source type='image/avif' media={`(min-width: 1200px)`}
              srcSet={`${process.env.PUBLIC_URL}/images/${name}-desktop.avif 1x,
              ${process.env.PUBLIC_URL}/images/${name}-desktop-2x.avif 2x`}/>
      <source type='image/webp' media={`(min-width: 1200px)`}
              srcSet={`${process.env.PUBLIC_URL}/images/${name}-desktop.webp 1x,
              ${process.env.PUBLIC_URL}/images/${name}-desktop-2x.webp 2x`}/>
      <source media={`(min-width: 1200px)`}
              srcSet={`${process.env.PUBLIC_URL}/images/${name}-desktop.jpg 1x,
              ${process.env.PUBLIC_URL}/images/${name}-desktop-2x.jpg 2x`}/>


      <source type='image/avif' media={`(min-width: 660px)`}
              srcSet={`${process.env.PUBLIC_URL}/images/${name}-tablet.avif 1x,
              ${process.env.PUBLIC_URL}/images/${name}-tablet-2x.avif 2x`}/>
      <source type='image/webp' media={`(min-width: 660px)`}
              srcSet={`${process.env.PUBLIC_URL}/images/${name}-tablet.webp 1x,
              ${process.env.PUBLIC_URL}/images/${name}-tablet-2x.webp 2x`}/>
      <source media={`(min-width: 660px)`}
              srcSet={`${process.env.PUBLIC_URL}/images/${name}-tablet.jpg 1x,
              ${process.env.PUBLIC_URL}/images/${name}-tablet-2x.jpg 2x`}/>


      <source type='image/avif'
              srcSet={`${process.env.PUBLIC_URL}/images/${name}-mobile.avif 1x,
              ${process.env.PUBLIC_URL}/images/${name}-mobile-2x.avif 2x`}/>
      <source type='image/webp'
              srcSet={`${process.env.PUBLIC_URL}/images/${name}-mobile.webp 1x,
              ${process.env.PUBLIC_URL}/images/${name}-mobile-2x.webp 2x`}/>
      <img
        className={classes.img} width={320} height={137}
        src={`${process.env.PUBLIC_URL}/images/${name}-mobile.jpg`}
        srcSet={`${process.env.PUBLIC_URL}/images/${name}-mobile-2x.jpg 2x`}
        alt={name}
      />
    </picture>
  )
}
