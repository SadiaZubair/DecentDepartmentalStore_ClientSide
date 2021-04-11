// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import ClearIcon from '@material-ui/icons/Clear';
// import { ArrowRight } from '@material-ui/icons';
// import { useHistory } from "react-router-dom";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//     width : '120vh',
//     // alignItems:'right',
//     float: 'right'
   
//   }

//   ,
//   box: {
//     // height: 100,
//     // display: "flex",
//     // border: "1px solid black",
//     paddingRight: 0.5,
//     height: 30,
//     width: 30,
//     paddingTop: 0.1,
    
//   },
//   adjust:{
//     color: '#ffffff',

//  },
//  crossalign:{
//   backgroundColor: '#0277BD',
//   color: '#fff',

// },
// adjustSubmit:{
//  color: '#0277BD',
//  backgroundColor: '#fff',

// },

//   paper: {
//     // width : '50vh',
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'left',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(2),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 1),
//   },
// }));

// export default function ResetPassword() {
//   const classes = useStyles();
//   const history = useHistory();
//   const routeChange = (path) =>{ 
//     // let path = `newPath`; 
//     history.push(path);
//   }
//   return (
//     <Grid container component="main" className={classes.root}  >
//       <CssBaseline />
//       <Grid item xs={false} sm={3} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//       <div style={{float: 'right'}} >
//       <ClearIcon  onClick={() =>routeChange(`Home`)} className ={classes.box}/>

//            </div>
//         <div className={classes.paper} style={{float: 'right'}} >
          
           
          
//           <Typography component="h1" variant="h5">
//             Reset Password
//           </Typography>
//           <h3 className ={classes.adjust}> hello</h3>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//       <h7 className={classes.adjust}>hello </h7>
//          <Button
//               type="cancel"
//               fullWidth
//               variant="contained"
//               color="#0277BD"
//               onClick={() =>routeChange(`VerificationCode`)}
//               className={classes.crossalign}
//             >
//               Submit
              
//               </Button>
//               <h7 className={classes.adjust}>hello </h7>
//             <Button
//               type="cancel"
//               fullWidth
//               variant="contained"
//               color="#0277BD"
//               onClick={() =>routeChange(`Login`)}
//               className={classes.adjustSubmit}
//             >
//               Cancel
//             </Button>
//             {/* <Grid container>
//               <Grid item xs > 
//                 <Link href="#" variant="body2">
//                   <h7 className = {classes.crossalign}>Forgot password? </h7>
//                 </Link>
//               </Grid>
//               <Grid item className = {classes.crossalign}>
//                 <Link href="#" variant="body2">
//                  <h7 className = {classes.crossalign}> {"Don't have an account?"}</h7>
                 
//                 </Link>
//               </Grid>
//             </Grid> */}
//             <Box mt={4}>
             
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }

import React,{useState, useEffect} from 'react';
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
import { ArrowRight } from '@material-ui/icons';
import { useHistory } from "react-router-dom";
import fire from "../fire";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width : '120vh',
    // alignItems:'right',
    float: 'right'
   
  }

  ,
  box: {
    // height: 100,
    // display: "flex",
    // border: "1px solid black",
    paddingRight: 0.5,
    height: 30,
    width: 30,
    paddingTop: 0.1,
    
  },
  adjust:{
    color: '#ffffff',

 },
 crossalign:{
  backgroundColor: '#0277BD',
  color: '#fff',

},
adjustSubmit:{
 color: '#0277BD',
 backgroundColor: '#fff',

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

export default function ResetPassword() {
  const classes = useStyles();
  const history = useHistory();
  const [email,setEmail]=useState("");

  const changePass=(event)=>{

    event.preventDefault()
    var auth=fire.auth();
    if (email !="")
    {
      auth.sendPasswordResetEmail(email).then(function()

      {
        window.alert("Email Sent!");
        console.log("emailsetn")

      })
      .catch(function(error){

        window.alert("ERROR");
        console.log("error")

      });

    }
    else
    {
      window.alert("Please enter email first.");
    }
  }



  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    history.push(path);
  }
  return (
    <Grid container component="main" className={classes.root}  >
      <CssBaseline />
      <Grid item xs={false} sm={3} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div style={{float: 'right'}} >
      <ClearIcon  onClick={() =>routeChange(`Home`)} className ={classes.box}/>

           </div>
        <div className={classes.paper} style={{float: 'right'}} >
          
           
          
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <h3 className ={classes.adjust}> hello</h3>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              autoFocus
            />
      <h7 className={classes.adjust}>hello </h7>
         <Button
              type="cancel"
              fullWidth
              variant="contained"
              color="#0277BD"
              onClick={changePass}
              className={classes.crossalign}
            >
              Submit
              
              </Button>
              <h7 className={classes.adjust}>hello </h7>
            <Button
              type="cancel"
              fullWidth
              variant="contained"
              color="#0277BD"
              onClick={() =>routeChange(`Login`)}
              className={classes.adjustSubmit}
            >
              Cancel
            </Button>
            {/* <Grid container>
              <Grid item xs > 
                <Link href="#" variant="body2">
                  <h7 className = {classes.crossalign}>Forgot password? </h7>
                </Link>
              </Grid>
              <Grid item className = {classes.crossalign}>
                <Link href="#" variant="body2">
                 <h7 className = {classes.crossalign}> {"Don't have an account?"}</h7>
                 
                </Link>
              </Grid>
            </Grid> */}
            <Box mt={4}>
             
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}