import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import "firebase/auth";
import "firebase/firestore"
import Register from "./Register";
import Posts from "./Posts"
import { auth } from "./firebase";
import CreateIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/Photo';

function Feed({user}){
  
   const history = useHistory('');
   if(user === false){
     history.push("/Login")
   }

  const logout =(event)=>{
   event.preventDefault();

    auth.signOut();
    history.push("/Login")
  }
   
  return(
    <div>
      Feed
  </div>
  )
}
export default Feed;