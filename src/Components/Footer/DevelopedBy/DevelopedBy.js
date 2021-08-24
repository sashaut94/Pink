import React from 'react'
import classes from './DevelopedBy.module.scss'

export const DevelopedBy = () => (
  <div className={classes.DevelopedBy}>
    <a
      className={classes.link}
      href="https://htmlacademy.ru/"
      target='_blank'
      rel="noreferrer"
    >
      <span className={classes.text}>
        Разработано
      </span>
      <svg
        className={classes.logo}
        width="27" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.643.016L13.5 0 0 1.407v24.606L13.5 34 27 26.013V1.407L13.643.016zm11.591 25L13.5 31.956 1.766 25.015V14.93l11.685 6.916.02 1.253-8.017-4.743-.011 1.225 8.046 4.809.02 1.286-8.045-4.758-.01 1.226L13.5 26.95l8.124-4.833V16.91l3.62-2.15-.01 10.256zm0-11.564l-3.22 1.88-1.482.875-7.065-4.187-.011 1.225 6.04 3.573-.053.031-.13.076-.86.492-4.986-2.948-.011 1.225 3.936 2.328-.933.61-.021.012-2.971-1.742-.011 1.225 1.947 1.135-1.988 1.186-11.618-6.872 11.638-6.958 11.8 6.834zm0-1.225L13.44 5.31 1.766 12.22V2.99L13.5 1.764 25.234 2.99v9.237z"
          fill="currentColor"/>
      </svg>
    </a>
  </div>
)