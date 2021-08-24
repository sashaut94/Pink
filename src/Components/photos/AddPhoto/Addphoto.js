import React from 'react'
import classes from './Addphoto.module.scss'
import {Picture} from "../Picture/Picture";
import {Button} from "../../UI/Button/Button";
import RangeInput from "../../UI/RangeInput/RangeInput";

export const AddPhoto = props => {
  return (
    <section className={classes.AddPhoto}>

      <h3 className={classes.title}>
        Затмите их всех! <br/>
        Выкладывайте все, что накопилось в <br className='mobile-only'/> телефоне!
      </h3>

      <div className={classes.wrapper}>

        <p className={classes.imgWrapper}>
          <Picture
            name='winter'/>
        </p>

        <div className={classes.controls}>

          <div className={classes.ranges}>

            {
              props.ranges.map(item => (
                  <RangeInput
                    key={item.id}
                    value={item.value}
                    active={item.active}
                    name={item.name}
                  />
                )
              )
            }

          </div>

          <div className={classes.buttons}>
            <Button
              type='photo'
            >
              Запостить
            </Button>

            <Button
              type='photo'
              disabled={true}
            >
              Отмена
            </Button>
          </div>
        </div>

      </div>

    </section>
  )
}