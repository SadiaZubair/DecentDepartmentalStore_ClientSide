import React from 'react'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import './SuccessfulSignup.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Route, useHistory } from "react-router-dom";
import fire from "../../fire";
function SuccessfulSignup  ()  {
  const handleLogout= (event) =>{
      fire.auth().signOut().then(() => {
       // Sign-out successful.
       routeChange('Login')
       })
     
  };
  const history = useHistory();
  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    history.push(path);
  }
    return (
        <div>
        <div className = "MuiIcon-root">
            <CheckCircleRoundedIcon style={{ fontSize: 100 }} />
           
           
        </div>

        <div className="h4" >Check your email for verification link!</div>
       
      <div className = "temp">
     
        <Button
              type="cancel"
              variant="contained"  //   className="crossalign"
            color="#0277BD"
            className="temp1"
            onClick ={()=>handleLogout()}
            >
             Go Back
            </Button>
            
        </div>
  </div>
    )
}

export default SuccessfulSignup
