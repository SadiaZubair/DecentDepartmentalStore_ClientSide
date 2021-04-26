import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import fire from "../../fire";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import { ArrowRight, Home } from '@material-ui/icons';
import {  BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
// import {ResetPassword} from "./ResetPassword";
import Signup from "../SignUp/Signup"
import Navbar from '../Header/Navbar'
import Footer from '../Footer'
import SideCat from '../HomePage/SideCatSecond';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width : '120vh',
    // alignItems:'right',
    float: 'right',
    paddingTop: 0,
    paddingLeft: '0rem' ,
   
  }

  ,
  btn :{
    backgroundColor : '#0277BD',
  },
  box: {
  
    paddingRight: 0.5,
    height: 30,
    width: 30,
    paddingTop: 0.1,
    className :"cross",
  },
  crossaligns:{
    backgroundColor: '#0277BD',
    color : '#ffffff',
    width : '40vh',

 },
  crossalign:{
     color: '#0277BD',

  },
  paper: {
    // width : '50vh',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [emailError, setEmailerror]= useState("")
  const [passwordError, setPassworderror]= useState("")
  const [user, setUser]= useState('')


  const history = useHistory();
  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    history.push(path);
  }

  const clearInputs =() =>{
    setEmail('');
    setPassword('');
  }
  const authListener=()=> {

    fire.auth().onAuthStateChanged(user=>{
      if (user){
        
        clearInputs();
        setUser(user);
        if(!user.emailVerified)
        {  
         
          console.log("IN login, VERIFY")
          console.log("STAT", user.isEmailVerified)
          setEmailerror("Verify your email please!")
          
        fire.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });      
     }
     else
     {
      routeChange(`/`)
     }
        }
        else{
        setUser(false);
        
        }
      
    });
  };

  useEffect(()=> {
    authListener();
  }, []);

  const handleLogin = (event) => {
    event.preventDefault()
    setEmailerror("")
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err=> {
      switch(err.code){
        case "auth/invalid-email":
          setEmailerror(`Invalid Email`);
          break;
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailerror(`User not Found`);
          break;
        case "auth/wrong-password":
          setEmailerror(`Invalid Password`);
          break;
      }
    });


  };
 

  return (
    <>
    <div className="contain">
    <SideCat/>
    <div>
    <Grid container component="main" className={classes.root}  >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div style={{float: 'right'}} >
      <ClearIcon  onClick={() =>routeChange(`/`)} className ={classes.box}/>
           </div>
        <div className={classes.paper} style={{float: 'right'}} >
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              
              label="Email Address"
              className={classes.form} 
              value={email}
             
              onChange={(e)=>setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <p className="errorMsg" style = {{color: "red",
  fontSize: "12px"}}> {passwordError}</p>
         
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              className={classes.form} 
              label="Password"
              type="password"
              
              
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
                           
            />
            <p className="errorMsg" style = {{color: "red",
  fontSize: "12px"}}> {emailError}</p>
           
          
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="#0277BD"
              onClick ={handleLogin}
              className={classes.crossaligns}
              
            >
              Sign In
            </Button>
            {user? (console.log("Logged")):( console.log("Not Logged in"))}
            <Grid container>
              
              <Grid item xs > 
                <Link onClick={() =>routeChange(`ResetPassword`)} className = {classes.crossalign}>Forgot password? </Link>
              </Grid>
              <Grid item className = {classes.crossalign}>
                <Link onClick={() =>routeChange(`Signup`)}>
                 <h7 className = {classes.crossalign}> {"Don't have an account?"}</h7>
                 {/* <h7 className = {classes.crossalign}> {"Signup"}</h7> */}
                </Link>

                
              </Grid>
            </Grid>
            <Box mt={4}>
           
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </div>
    <div className="footer"> 
        <Footer />
      </div>
    </div>
    </>
    
  );
}