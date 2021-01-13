import React, {useState} from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom"

import Main from "./components/Main"
// import Feed from "./components/Feed"
import Login from "./components/Login"
import Register from "./components/Register"
// import Darkmode from "darkmode-js";
import { auth } from "./components/firebase";
// import Post from "./components/Posts";
import Home from "./components/Home"
// import LeftSide from "./components/Leftside"


const  App =()=> {

  // const options = {
  //   label: "🌓",
  //   time: "0.5s",
  // };
  // const darkmode = new Darkmode(options);
  
  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((authUser) =>{
    if(authUser){
      setUser(authUser)
    } else{
      setUser(false);
    }
  })

  return (
    
    <div className="App">

      {/* {darkmode.showWidget()} */}

      <Router>
        <Switch>
        <Route exact path="/">
          <Main />
          </Route>
          <Route  path="/Home">
          <Home user = {user} />
          </Route>
          <Route  path="/Login">
          <Login />
          </Route>
          <Route  path="/Register">
          <Register />
          </Route>
         

     </Switch>
        </Router>
    </div>
  );
}
export default App;