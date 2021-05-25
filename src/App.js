import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,NavLink,Route, Switch} from "react-router-dom";
import './App.css';
import  './component/Landingpage/Landing.css';
import Containers from './component/Container/Containers';
import CardViews from './component/CardView/CardViews';
import NavigationBar from './component/NavigationBar/NavigationBar';

import Landingpage from './component/Landingpage/landing';
import { createContext, useReducer, useRef, useState } from 'react';
const MyContext = createContext();

function App() {
  const ref = useRef();
  const initialValues ={};
  function render(state,action){

  }
  const [all,dispatch] = useReducer(render,initialValues);

  return (
    <MyContext.Provider value={{all,dispatch}}>
      <div className="App" >
      <NavigationBar />
        <Switch>
          <Route path="/" >
            <Landingpage/>
            <Containers />
            <CardViews/>
          </Route>
          <Route path="/benefits">
            <h1>benefits</h1>
          </Route>
          <Route path="/goals" exact>
            <h1>goals</h1>
          </Route>
          <Route path="/member" exact>
            <h1>member</h1>
          </Route>
          <Route>
            <h1>404!</h1>
          </Route>
        </Switch>
  </div>
  </MyContext.Provider>
  );
}

export default App;
export {MyContext};
