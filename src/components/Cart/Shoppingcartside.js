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
import { ArrowRight } from '@material-ui/icons';
//import TheFigure from './components/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Shoppingcartside.css";
import AlignItemsList from './Lists';
// import './final.png'
import { useHistory } from "react-router-dom";
import Footer from '../Footer'
import SideCat from '../HomePage/SideCatSecond';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import JqxScrollView from 'jqwidgets-react/react_jqxscrollview.js';



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width : '120vh',
    // alignItems:'right',
    float: 'right',
   
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },

  alignit: {
      align: "left"
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();
  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    history.push(path);
  }

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
      <div className={classes.paper} style={{float: 'right', height: '600px', overflowY: 'scroll' }} >

        
         
  
        <Typography component="h1" variant="h6" align="left">
          Shopping Cart
        </Typography>
        
        <form className={classes.form} Validate>
      
          <AlignItemsList className={classes.paper} /> 
       
         
   
      
        {/* <h7 className={classes.adjust}>hello </h7>
        <h7 className={classes.adjust}>hello </h7> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="#0277BD"
                
                  className={classes.crossalign}
                  onClick={() =>routeChange(`Full Shopping Cart`)}
                >
                  View Shopping Cart
                </Button>         
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


