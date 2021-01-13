import React from "react";
import {useHistory} from "react-router-dom"
import "firebase/auth";
import "firebase/firestore";
import { Avatar } from '@material-ui/core'

import { auth } from "./firebase";
// import Leftside from "./Leftside";
import "./Main.css";
import "../App.css"
import "./cool.css"
import "./Left.css"


function Home({user}){
   const history = useHistory('');
   if (user === false){
     history.push("/Login")
   }

  const logout =(event)=>{
    auth.signOut();
    history.push("/Login")

  }


   
  return(
    
    <div className="App">
    
    <header>
      <label for="check">
        <i className="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div className="left_area">
        <h3> <span>Snow</span></h3>
      </div>
      <div className="right_area">
        <a href="/" class="logout_btn" onClick = {logout}>Logout</a>
      </div>
    </header>

    <div className="mobile_nav">
      <div className="nav_bar">
      <Avatar className= "avatar" />
             <h4>{user?.displayName}</h4>
        <i className="fa fa-bars nav_btn"></i>
       </div>

    </div>

    <div className="sidebar">
      
      <div className="leftbar-1">
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgcI19mU4f72SdJxV-ztMOjzQaUOYbpMFIA&usqp=CAU" 
            alt="" />
      <Avatar className= "avatar" />
             <h4>{user?.displayName}</h4>
             <h5>{user?.email}</h5>
             <p className="view">Who viewed your profile - <span className="ptag">2230</span></p>
     <p className="view">Views on your post - <span className="ptag">1089</span></p>
      </div>
      {/* <i class="fas fa-desktop"></i><span className="ptag">Who viewed your profile - 2000 </span>
      
      <i class="fas fa-desktop"></i><span  className ="view" className="ptag">Views on your post - 100</span> */}
     {/* <p className="view">Who viewed your profile - <span className="ptag">2230</span></p>
     <p className="view">Views on your post - <span className="ptag">1089</span></p> */}
     <div className="leftbar-bottom">
     <hr />

                  <p>Recent</p>
                   <p className="recent"># webdev</p>
                   <p className="recent"># softwareeengineering</p>
                   <p className="recent"># reactjs</p>
                   <p className="recent"># frontenddevelopmet</p>

              </div>

    </div>

    

    <div className="content">
      <div className="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div className="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div className="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
    </div>


     </div>
 

  )
}
export default Home;
