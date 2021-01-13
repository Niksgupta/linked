import React, {useState} from "react";
import "firebase/auth";
import "firebase/firestore";
import {auth} from "./firebase"

// import {Form, Col, Button} from "react-bootstrap"
import {useHistory, Link}  from "react-router-dom"
import Avatar from '@material-ui/core/Avatar';
import {Form} from "react-bootstrap"

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';

import "./Main.css";
import "../App.css"


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Made with Love
      </Link>{' '}
      {'.'}
    </Typography>
  );
}

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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


function Login({user}) {

  const classes = useStyles();


  const history = useHistory('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const login = (event)=>{
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((auth)=>{
      console.log(auth)
      history.push("/Home")
    }).catch((e)=>{
      alert(e.message);
    })
  }
  const but = (event)=>{
    event.preventDefault();
    history.push("/")
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
          <Button color="inherit" className={classes.login} onClick ={but} >  Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>



    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>

        <form onSubmit= {login}>
        <Grid container spacing={2}>
            
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
            Log In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to ="/" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
 </div>
  
  );
}
export default Login;

