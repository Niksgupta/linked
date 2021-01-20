import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import { db } from "./firebase";
import firebase from "firebase";


import "./Home.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontWeight: 900,
  
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

function Render( {user, postId, username, caption, imageUrl, timestamp}) {
  const classes = useStyles();

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    let unsubscribe;
    if(postId){
      unsubscribe = db.collection("posts")
      .doc(postId)
      .collection("comments")
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setComments(snapshot.docs.map((doc)=> doc.data()));
      });

    }
    return ()=>{
      unsubscribe();
    };
  }, [postId]);

  const sendComment = (event) =>{
      event.preventDefault();

      db.collection("posts").doc(postId).collection("comments")
      .add({
        text: comment,
        username: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
      setComment('');

  }


  return (
    <div className="posting-area">
    <Card className={classes.root}>
      <div className="avatar1">
        <Avatar className={classes.orange} />
        <h5><strong>{username}</strong></h5>
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {caption}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={username}
      />
      <hr/>
        <div className="post_comments">
          {
            comments.map((comment) =>(
              <p>
                <strong>{comment.username}</strong>
                <span> {comment.text}</span>
              </p>
            ))
          }
        </div>
      
     
        <form className="post_commentBox">
          <input 
              className="post_input"
              type ="text"
              placeholder="Add a comment.."
              value={comment}
              onChange = {(event) => setComment(event.target.value)}
          />
          <button
              className="post_button"
              type="submit"
              disabled = {!comment}
              onClick={sendComment}
          
           >Post </button>
        </form>
   
    </Card>
    </div>
  );
}
export default Render;
