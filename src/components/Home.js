import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import "firebase/auth";
import "firebase/firestore";
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Render from "./Render";
import { auth, db } from "./firebase";
import "./Main.css";
import "../App.css";
import "./Home.css";
import "./Left.css";
import ImageUpload from "./ImageUpload";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  
  
}));
function Home({ user }) {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      console.log({ snapshot });
    });
  }, []);

 

  const history = useHistory("");
  if (user === false) {
    history.push("/Login");
  }

  const logout = (event) => {
    auth.signOut();
    history.push("/Login");
  };

  return (

    <div className="App">
    
    <header>
      <label for="check">
        <i className="fas fa-bars" id="sidebar_btn"></i>
      </label>
      <div className="left_area">
        <h3> <span>LinkedIn Lite</span></h3>
      </div>
      <div className="right_area">
        <a href="/" class="logout_btn" onClick = {logout}>Logout</a>
      </div>
    </header>

    <div className="mobile_nav">
      <div className="nav_bar">
      <Avatar className={classes.orange} />
             <h4>{user?.displayName}</h4>
       </div>

    </div>

    <div className="sidebar">
      
      <div className="leftbar-1">
      <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgcI19mU4f72SdJxV-ztMOjzQaUOYbpMFIA&usqp=CAU" 
            alt="" />
      <Avatar   
      className={classes.orange}/>
             <h4>{user?.displayName}</h4>
             <h5>{user?.email}</h5>
             <p className="view">Who viewed your profile - <span className="ptag">2230</span></p>
     <p className="view">Views on your post - <span className="ptag">1089</span></p>
      </div>
      
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
    <ImageUpload user={user} />
    {posts.map((post, id) => (
                <Render
                  key={post.id}
                  user={user}
                  postId = {post.id}
                  username={post.data.username}
                  caption={post.data.caption}
                  imageUrl = {post.data.imageUrl}
                />

                  ))}
                  

    </div>


     </div>
  );
}
export default Home;
