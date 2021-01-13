import React, { useState, useEffect} from 'react'
import {db} from "./firebase"
import {useHistory} from "react-router-dom"

function Posts({user}) {

   const history = useHistory("");

   const [posts, setPosts] = useState("");

   useEffect(() =>{
       db.collection('posts').onSnapshot(snapshot => {
           setPosts(snapshot.docs.map(doc => ({
               id : doc.id,
               post: doc.data()
           })))
       })
   } , [] );

    return (
        <div>
            
        </div>
    )
}
export default Posts;