import React from 'react'
import classes from './TarifItem.module.scss'
import {connect} from "react-redux";

const TarifItem = props => {

  const cls = [classes.tarif]
  if (props.hit) cls.push(classes.hit)
  if (props.id === 2) cls.push(classes['header-top-left'])
  if (props.id === props.lastId) cls.push(classes['header-top-right'])

  return (
    <div className={classes.TarifItem}>
      {
        props.name && props.price && <p className={cls.join(' ')}>
        <span className={classes.name}>
          {props.name}
        </span>
          <span className={classes.price}>
            {props.price}
        </span>
        </p>
      }
      {
        props.options.map(option => {
            const cls = [classes.cell]

            if (option.available !== undefined) cls.push(option.available ? classes.yes : classes.no)

            if (props.id === 1 && option.id === 1) cls.push(classes['table-top-left'])
            if (props.id === 1 && option.id === props.options.length) cls.push(classes['table-bottom-left'])
            if (props.id === props.lastId && option.id === props.options.length) cls.push(classes['table-bottom-right'])

            return (
              <p
                className={cls.join(' ')}
                key={option.id}
              >
                {(props.width < 660 || !props.isMobile) && option.text}
              </p>
            )
          }
        )
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    width: state.pink.width
  }
}

export default connect(mapStateToProps)(TarifItem)