import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,NavLink,Route, Switch} from "react-router-dom";
import './App.css';
import  './component/Landingpage/Landing.css';
import Containers from './component/Container/Containers';
import Footer from './component/Footer/Footer';
import CardViews from './component/CardView/CardViews';
import NavigationBar from './component/NavigationBar/NavigationBar';
import Landingpage from './component/Landingpage/landing';
import DOM from './component/DOMech/DOM';
import { createContext, useReducer, useRef, useState } from 'react';
import EventPage from './component/EventPage/EventPage';
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
          <Route path="/" exact >
            <Landingpage/>
            <Containers />
            <CardViews/>
            <DOM/>
          </Route>
          <Route path="/benefits" exact>
            <h1>benefits</h1>
          </Route>
          <Route path="/events" exact>
            <EventPage />
          </Route>
          <Route path="/member" exact>
            <h1>member</h1>
          </Route>
          <Route>
            <h1>404!</h1>
          </Route>
        </Switch>
      <Footer />

  </div>
  </MyContext.Provider>
  );
}

export default App;
export {MyContext};
