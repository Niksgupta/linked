import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./components/firebase";
import Home from "./components/Home";


const App = () => {
  

  const [user, setUser] = useState([]);
  

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser);
    } else {
      setUser(false);
    }
  });

  return (
    <div>
      <div className="app">
      
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/Register">
              <Register />
            </Route>

            <Route path="/Home">
              <div>
                <Home user={user} />
                
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};
export default App;
