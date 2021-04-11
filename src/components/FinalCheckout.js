import React from 'react'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import './finalCheckout.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Route, useHistory } from "react-router-dom";

const FinalCheckout = () => {
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

         <h4 className ="MuiTypography-h4">Your order has been successfully placed</h4>
        <h4 className ="MuiTypography-h3"> The rider will contact you soon         </h4>
      <div className = "temp">
      
        <Button
              type="cancel"
              variant="contained"  //   className="crossalign"
            color="#0277BD"
            className="temp1"
            onClick ={()=>routeChange("/Home")}
            >
           Continue Shopping
            </Button>
            
        </div>
  </div>
    )
}

export default FinalCheckout
