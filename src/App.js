import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,NavLink,Route, Switch} from "react-router-dom";
import './App.css';
import  './component/Landingpage/Landing.css';
import Containers from './component/Container/Containers';
import NavigationBar from './component/NavigationBar/NavigationBar';

import Landingpage from './component/Landingpage/landing';

function App() {
  return (
    <div className="App">
    <NavigationBar />
      <Switch>
        <Route path="/" >
          <Landingpage/>
        <Containers />
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
  );
}

export default App;
