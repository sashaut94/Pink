import React from 'react'
import Layout from "./hoc/Layout/Layout"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import Contest from "./pages/Contest/Contest";
import Photos from "./pages/Photos/Photos";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contest' component={Contest}/>
          <Route path='/photos' component={Photos}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
