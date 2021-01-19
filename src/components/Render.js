



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';

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
    fontWeight: 500,
  
  }
  
  
}));

function Render( {username, caption, imageUrl, timestamp}) {
  const classes = useStyles();


  return (
    <div className="posting-area">
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        
        title={username}
        subheader={timestamp}
      />
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
      
     
      <div className="add-image">
      <ThumbUpAltIcon />
       <CommentIcon />
        <ScreenShareIcon />
      </div>
      
    </Card>
    </div>
  );
}
export default Render;
