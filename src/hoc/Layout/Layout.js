import React, {useEffect} from 'react'
import classes from './Layout.module.scss'
import Header from "../../Components/Header/Header";
import {connect} from "react-redux";
import {UPDATE_WIDTH} from "../../store/actions/actionTypes";
import {Route, Switch} from "react-router-dom";
import Title from "../../Components/Title/Title";
import {GetApp} from "../../Components/Home/GetApp/GetApp";
import {Footer} from "../../Components/Footer/Footer";

const Layout = props => {
  useEffect(() => {
    function handleResize() {
      props.updateWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  })

  return (
    <div className={classes.Layout}>
      <Header>
        <Switch>
          <Route path='/' exact component={GetApp}/>
          <Route path='/photos' exact render={() => <Title class={'photos'}>Фотографии <br/>
            пользователей</Title>}/>
          <Route path='/contest' exact render={() => <Title class={'contest'}>Конкурс на самое <br className='mobile-tablet'/>
            безбашенное <br/> путешествие с Пинк</Title>}/>
        </Switch>
      </Header>
      <main className={classes.main}>
        {props.children}
      </main>
      <Footer/>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    updateWidth: newWidth => dispatch({type: UPDATE_WIDTH, newWidth})
  }
}

export default connect(null, mapDispatchToProps)(Layout)