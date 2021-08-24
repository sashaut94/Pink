import React, {useState} from 'react'
import classes from './Contest.module.scss'
import {connect} from "react-redux"
import {ContactInfo} from "../../Components/Contest/Form/ContactInfo/ContactInfo"
import {KindOfApp} from "../../Components/Contest/Form/KindOfApp/KindOfApp"
import {FullName} from "../../Components/Contest/Form/FullName/FullName";
import {Achievements} from "../../Components/Contest/Form/Achievements/Achievements";
import {DescribeEmotions} from "../../Components/Contest/Form/DescribeEmotions/DescribeEmotions";
import {Button} from "../../Components/UI/Button/Button";

const initialState = {
  fullName: {
    fieldSetName: 'fullName',
    isValid: false,
    controls: [
      {
        id: 1,
        placeholder: 'Укажите фамилию *',
        label: 'Фамилия:',
        value: '',
        isValid: false,
        isTouched: false,
        validation: {isRequired: true}
      },
      {
        id: 2,
        placeholder: 'Введите ваше имя *',
        label: 'Имя:',
        value: '',
        isValid: false,
        isTouched: false,
        validation: {isRequired: true}
      },
      {
        id: 3,
        placeholder: 'Ну и отчество тоже',
        label: 'Отчество:',
        value: '',
        isValid: false,
        isTouched: false,
        validation: {isRequired: true}
      }
    ]
  },
  achievements: {
    fieldSetName: 'achievements',
    title: 'Ваши безбашенные достижения в путешествии',
    controls: [
      {
        id: 1,
        label: 'Сделал селфи с акулой',
        checked: true
      },
      {
        id: 2,
        label: 'Обгорел на пляже',
        checked: true
      },
      {
        id: 3,
        label: 'Видел Чака Норриса',
        checked: false
      },
      {
        id: 4,
        label: 'Накупил сувениров',
        checked: false
      },
      {
        id: 5,
        label: 'Удержал башню',
        checked: true
      },
      {
        id: 6,
        label: 'Разгромил отель',
        checked: false
      }
    ]
  },
  contacts: {
    isValid: false,
    controls: [
      {
        placeholder: 'Номер, пожалуйста',
        label: 'Номер телефона',
        isValid: false,
        isTouched: false,
        validation: {isRequired: true, isPhone: true},
        icon: 'phone'
      },
      {
        placeholder: 'Введите почту *',
        label: 'Адрес почты',
        isValid: false,
        isTouched: false,
        validation: {isRequired: true},
        icon: 'email'
      },
    ]
  },
  app: {
    fieldSetName: 'app',
    title: 'С каким приложением путешествовали?',
    name: 'kindOfApp',
    controls: [
      {
        id: 1,
        label: 'Pink для iOS',
        checked: true
      },
      {
        id: 2,
        label: 'Pink на Android',
        checked: false
      },
      {
        id: 3,
        label: 'Windows Phone',
        checked: false
      }
    ]
  }
}

const Contest = props => {

  const [state, setState] = useState(initialState)

  const createNewStateOther = (fieldSet, controlId) => {
    let newState = {...state}
    let fieldSetState = newState[fieldSet]
    if (fieldSet === 'app') {
      fieldSetState.controls = fieldSetState.controls.map(control => {
        const newValue = control.id === controlId
        return {...control, checked: newValue}
      })
    } else {
      fieldSetState.controls[controlId - 1].checked = !fieldSetState.controls[controlId - 1].checked
    }
    newState[fieldSet] = fieldSetState
    setState(newState)
  }

  const createNewStateMain = (fieldSet, controlId, e) => {
    const newState = {...state}
    const currentControl = newState[fieldSet].controls[controlId - 1]
    currentControl.value = e.target.value
    setState(newState)
  }

  return (
    <>
      <h3 className={classes.title}>
        Поделитесь своей историей и получите шанс выиграть ценный приз — 1000 миль на вашу бонусную карту!
        {
          props.width > 659 && <>
            <br className='tablet-only'/>
            <span>Пожалуйста, заполните форму ниже:</span>
          </>
        }
      </h3>

      <form className={classes.form}>
        <FullName
          controls={state.fullName.controls}
          onChange={createNewStateMain}
          name={state.fullName.fieldSetName}
        />
        <Achievements
          controls={state.achievements.controls}
          title={state.achievements.title}
          name={state.achievements.fieldSetName}
          onChange={createNewStateOther}
        />
        <ContactInfo
          width={props.width}
          contacts={state.contacts.controls}/>
        <KindOfApp
          title={state.app.title}
          controls={state.app.controls}
          name={state.app.name}
          fieldSetName={state.app.fieldSetName}
          onChange={createNewStateOther}
        />
        <DescribeEmotions/>
        <div className={classes['button-wrapper']}>
          <Button
            type='form'
            class={classes.button}
          >
            Отправить форму
          </Button>
          <p className={classes.required}>
            <span className={classes.star}>
              * 
            </span>
            — Обязательные&nbsp;
            {props.width > 1199 && <span>
              для заполнения&nbsp;
            </span>}
            поля
          </p>
        </div>
      </form>
    </>
  )
}


function mapStateToProps(state) {
  return {
    width: state.pink.width
  }
}

export default connect(mapStateToProps)(Contest)