import React,{useState, useEffect} from 'react';
import fire from "../../fire";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import './Signup.css'
import Footer from '../Footer'
import SideCat from '../HomePage/SideCat';
//const [boo, setBoo]=useState(false)
//var boo=false

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    paddingLeft : '15rem',
    paddingRight : '25rem',
    
    flexDirection: 'column',
  },
 
  form: {
    width: '100%', // Fix IE 11 issue.
    height: '50%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#0277BD',
    color: '#fff',
  },
  align:{
    color : '#0277BD',
  }
}));

export default function SignUp() {
  let fname;
  let lname;
  let email;
  let password;
  let repassword;
  let phone;
  const classes = useStyles();
  console.log("lname", lname)
 
  const history = useHistory();
  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    history.push(path);
  }
  const [emailError, setEmailError]=useState('');
  const [generalError, setgeneralError]=useState('');
  const [passwordError, setPasswordError]=useState('');
  const [numberError, setNumberError]=useState('');
  const authListener=()=> {
    
  
fire.auth().onAuthStateChanged(function(user) {
  if (user) {
    //setUserc(true)
    routeChange('SuccessfulSignUp')
    var name, email, photoUrl, uid;
    var emailVerified=false;
    uid=user.uid;
    email=user.email;
    emailVerified=user.emailVerified;
    var firestore=fire.firestore();
    firestore.collection("custacc").doc(uid).set({
      uid:uid,
      email:email,
      fname:fname,
      lname:lname,
      phone:phone

    }).then(function(){
      console.log("No Error");
    }).catch(function(error){
      console.log("Got error",error);
    });
    if (!emailVerified)
      user.sendEmailVerification().then(function(){
      }).catch(function(error){
      });

  } else {

    // window.alert('Invalid email address')
  }
});
}

useEffect(()=> {
    authListener();
  }, []);

  

  const handleSignup=(event)=> {
    event.preventDefault()
    setPasswordError('')
    setEmailError('')
    setNumberError('')
    if (lname=='' || fname =='' || email =='' || password=='' || repassword=='' || phone ==''){
      setgeneralError('Required Fields are empty *')

    }else{

      if (password == repassword){
        
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        // .then(routeChange(`Home`))
        .catch(err=> {
          switch(err.code){
           
            case "auth/invalid-email":
              // window.alert(err.message);
              setEmailError(`Invalid Email Address`);
              // email = '';
              break;
            case "auth/weak-password":
              // window.alert(err.message);
              setPasswordError(`Weak Password`)
              break;
            case "auth/email-already-in-use":
              // window.alert(err.message);
              setEmailError(`Email Address already registered`);
              // email = '';
              break;
            default:
              window.alert('ss')
    
          }
        });
      
      }
   
      else{
        if (repassword =="")
        {
          setgeneralError("Please re-enter password")

        }else{
        setPasswordError("passwords do not match")
        }
      }
    
    }
  
  };


  return (

    <>
    <div className="contain">
    <SideCat/>
    <div>
    <Container component="main" maxWidth="s">
      
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <form className={classes.form} noValidate>
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
                value={fname}
                onChange={(e)=>fname=e.target.value}
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
                value={lname}
                onChange={(e)=>lname=e.target.value}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e)=>email=e.target.value}
              />
              <p className="errorMsg" style = {{color: "red",
  fontSize: "16px"}}> {emailError}</p>
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
                value={password}
                onChange={(e)=>password=e.target.value}
                autoComplete="current-password"
              />
              <p  className="errorMsg" style = {{color: "red",
  fontSize: "16px"}} >  {passwordError}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Re-enter Password"
                type="password"
                id="password"
                value={repassword}
                onChange={(e)=>repassword=e.target.value}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Contact"
                label="Contact"
                name="Contact"
                autoComplete="Contact"
                type="number"
                value={phone}
                onChange={(e)=>phone=e.target.value}
                placeholder='eg 03123456789' 
                autoComplete="phone"
                
              />
              <p className="errorMsg" style = {{color: "red",
  fontSize: "16px"}}> {numberError}</p>
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#fff"
            className= {classes.submit}
            onClick={handleSignup}
          >
            Sign Up
          </Button>
          <p className="errorMsg" style = {{color: "red", fontSize: "16px"}}> {generalError}</p>
          <Grid container justify="flex-end"> 
            <Grid item>
              <div  onClick ={()=>{routeChange('Login')}}>
                Already have an account? Sign in
              </div>
            </Grid>
           </Grid>
        </form>
      </div>
      <Box mt={5}>
       
      </Box>
      {console.log(email, fname, lname, password)}
    </Container>
    </div>
    <div className="footer"> 
        <Footer />
      </div>
    </div>
    </>
  );
}