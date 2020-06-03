import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Login from "./components/Login";
import Login2 from './components/Login2'
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/protected" component={BubblePage} />
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/" component={Login2}/>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
