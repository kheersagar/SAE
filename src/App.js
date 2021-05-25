import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,NavLink,Route, Switch} from "react-router-dom";
import './App.css';
import  './component/Landingpage/Landing.css';
import NavigationBar from './component/NavigationBar/NavigationBar';

import Landingpage from './component/Landingpage/landing';

function App() {
  return (
    <div className="App">
    <NavigationBar />
      <Switch>
        <Route path="/" >
          {/* <h1>Home</h1> */}
          <Landingpage/>
        </Route>
        <Route path="/benefits">
          <h1>benefits</h1>
        </Route>
        <Route path="/goals">
          <h1>goals</h1>
        </Route>
        <Route path="/member">
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
