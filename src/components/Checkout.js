import React from 'react';
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
import { ArrowRight, LaptopWindows } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import clsx from 'clsx';
import final from './decentlogo.png'
import './Checkout.css'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { useAlert } from 'react-alert'
import { Route, useHistory } from "react-router-dom";
import {useContext} from 'react';
import { CartContext } from './CartContext'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import fire from '../fire'
//import {useContext} from 'react';
//import { CartContext } from './CartContext'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width : '260vh',
    float: 'left',
    alignItems : 'left',
    display: 'flex',
      flexWrap: 'wrap',
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
  
  temp:{
    color: '#fff',
  },
  crossalign:{
    backgroundColor: '#0277BD',
    color: '#fff',
    width: 100,
    
  
  },
  adjustSubmit:{
   color: '#fff',
   backgroundColor: 'grey',
  
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
  margin: {
    margin: theme.spacing(1),
    width : '81ch',
  },
  margin1: {
    margin: theme.spacing(1),
    marginBlockStart : theme.spacing(5),
    width : '20cm',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '40ch',
  },
}));


const auth = fire.auth();
const db = fire.firestore();
function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
   

   
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', 0, 9,2,  ')', ' ', /\d/, /\d/,/\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  } 
  TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };


  
export default function  SignInSide() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: '',
    firstName: '',
    lastName : '',
    shippingAddress: '',
    phoneNumber : '',
    
  });
  // const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);
  const data = useContext(CartContext);
  const totalQty = data["totalQty"]

  console.log(data)
  const shoppingCart = data["shoppingCart"]
  
  //console.log
 
  const history = useHistory();
  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    history.push(path);
  }
  console.log(shoppingCart)
  function checkFields () {
      if ( values.lastName.length ==0 || values.firstName.length ==0 ||  values.email.length ==0 || values.phoneNumber.length ==3 
        || values.shippingAddress.length ==0 )
      {
         window.alert("Enter all the fields.")
          return false
      }
      return true


  }
 
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const data = useContext(CartContext);
  // console.log(`xxx  ${data}`)
   
  const cashoutSubmit = () => {
    
    auth.onAuthStateChanged(user => {
        if (user) {
            const today = new Date();
            const time = today.getTime();
            db.collection('All Orders').doc(user.uid).update({
                Date: today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear(),
                BuyerName: values.firstName +values.lastName,
                BuyerEmail: values.email,
                BuyerCell: values.phoneNumber,
                BuyerAddress: values.shippingAddress,
                BuyerPayment:  totalQty*50,
                BuyerQuantity: totalQty,
                // Item_list: shoppingCart,
                orderid: user.uid + time,
                User: user.uid,
                state:"Pending"
            })
            db.collection('custacc').doc(user.uid).collection('Orders').doc(user.uid).update({
                Date: today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear(),
                BuyerName: values.firstName +values.lastName,
                BuyerEmail: values.email,
                BuyerCell: values.phoneNumber,
                BuyerAddress: values.shippingAddress,
                BuyerPayment:  totalQty*50,
                BuyerQuantity: totalQty,
                // Item_list: shoppingCart,
                orderid: user.uid + time,
                User: user.uid,
                state:"Pending"
            }).then(() => {
                
            }).catch()
        }else{
          window.alert("You are not logged in !!")
          routeChange("/CheckOut")
        }
    })
}
  let cart = shoppingCart.map((content ,key) =>{
    return(
      
      <List className={classes.root}>
      <ListItem alignItems="flex-start">
    <img src ={content.img} className={classes.large}  height = "40" width ="40"  align = "left"  />
    <ListItemText
          primary={content.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="subtitle1"
                className={classes.middle}
                color="textPrimary"
              >
                  {content.price}
              </Typography>
              {" — (1xRs.50)"}
            </React.Fragment>
          }
        />
    </ListItem>
      </List> 
    )
  });
  
  const Proceed = ()=>{
    console.log(`check fields ${checkFields()}`)
    if (checkFields()){
        cashoutSubmit()
        
        routeChange("/Confirmation")
    }
  }
  return (
  <div>   
    <Grid container component="main" className={classes.root}  >
    
     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
     <Typography component="h3" variant="h5" className = "MuiTypography-h3">
           Contact Information 
    </Typography>

         <FormControl  className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Email address</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            value={values.email}
            onChange={handleChange('email')}
           
            labelWidth={100}
            required
          />
        </FormControl>
        <Typography component="h4" variant="h6" className = "MuiTypography-h4">
            Shipping Address

        </Typography>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-firstName">First Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-firstNam"
            value={values.firstName}
            onChange={handleChange('firstName')}
           
            labelWidth={80}
          />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-lastName">Last Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-lastName"
            value={values.lastName}
            onChange={handleChange('lastName')}
           
            labelWidth={80}
          />
        </FormControl>
        <FormControl  className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-shippingAddress">Shipping Address</InputLabel>
          <OutlinedInput
            id="outlined-adornment-shippingAddress"
            value={values.shippingAddress}
            onChange={handleChange('shippingAddress')}
           
            labelWidth={125}
          />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField
          id="standard-read-only-input"
          variant="filled" 
          label="City"
          defaultValue="Lahore"
          InputProps={{
            readOnly: true,
          }}
        />
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField
          id="standard-read-only-input"
          variant="filled" 
          label="Country"
          defaultValue="Pakistan"
          InputProps={{
            readOnly: true,
          }}
        />
        </FormControl>
        <FormControl  className={classes.margin} variant="outlined">
          <InputLabel  htmlFor="formatted-text-mask-input">Phone Number</InputLabel>
          <OutlinedInput
            id="outlined-adornment-phoneNumber"
            
            id="formatted-text-mask-input"
            onChange={handleChange('phoneNumber')}
            inputComponent={TextMaskCustom}
            value={values.phoneNumber}
            labelWidth={125}
          />
        </FormControl>


<h5 className = {classes.temp}>hello</h5>
            <Button
              type="submit"
              
              variant="contained"
              className ={clsx(classes.margin, classes.crossalign)}
              // onClick ={checkFields}
              onClick = {()=>Proceed()}
              // onClick ={()=>{routeChange("/Confirmation")}}
            >
              Proceed
            </Button>
           <h7 className = {classes.temp}>hello</h7>
           <Button
              type="cancel"        
              variant="contained"
              className ={clsx(classes.margin, classes.adjustSubmit)}
              onClick ={()=>{routeChange("/CheckOut")}}
            >
              Cancel
            </Button>
           
     </Grid>
     <Typography component="h3" variant="h5" className = "MuiTypography-h3">
      Order
    
       
      </Typography>
      {cart}
      
    
    </Grid>
    
       </div>
  );
}