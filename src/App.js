import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/Main";
// import Feed from "./components/Feed"
import Login from "./components/Login";
import Register from "./components/Register";
// import Darkmode from "darkmode-js";
import { auth, db } from "./components/firebase";
// import Post from "./components/Posts";
import Home from "./components/Home";
import Leftside from "./components/Leftside";
import Render from "./components/Render";
import ImageUpload from "./components/ImageUpload";

const App = () => {
  // const options = {
  //   label: "🌓",
  //   time: "0.5s",
  // };
  // const darkmode = new Darkmode(options);

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
