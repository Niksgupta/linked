import React, {useState} from 'react'
import "firebase/auth";
import "firebase/firestore";
import {useHistory, Link} from "react-router-dom"
import {Form} from "react-bootstrap"
import {auth} from "./firebase"

import "./Main.css";
import "../App.css"
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
    paddingBottom: "30px"
  },
  login: {
    paddingBottom: "30px"
  }
}));


function Main({user}) {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const history = useHistory('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

 
  
  const regHome = (event)=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
      if(auth.user){
        auth.user.updateProfile({
          displayName: firstname + " " + lastname
        })
        .then((s)=>{
          history.push("/Home")
        })
      }
    })
    .catch((e)=>{
      alert(e.message)
    })

  }

  const butt = (event) => {
    event.preventDefault();
    history.push("/Login")

  }

    return (
        <div className="App">
         
         <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            LinkedIn
          </Typography>
          <Button color="inherit" className={classes.login} onClick = {butt}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    
     
    <div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form  onSubmit={regHome}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange = {(e)=> setFirstname(e.target.value)}

              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange = {(e)=> setLastname(e.target.value)}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                onChange = {(e)=> setEmail(e.target.value)}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {(e)=> setPassword(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
            <Form.Group>
                <input type="checkbox" required feedback="You must agree before submitting." /> 
                <label className="agree">Agree to terms and conditions </label>
              </Form.Group>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to ="/Login" variant="body2">
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <div className="footer">
          <h6>Made by <Link to ="https://github.com/Niksgupta">NiksGupta ❤️</Link></h6>
        </div>
        
      </Box>
    </Container>
    </div>
 </div>
    )
}
 export default Main;

