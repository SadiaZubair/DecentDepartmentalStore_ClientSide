import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "./Shoppingcartside.css";
import ClearIcon from '@material-ui/icons/Clear';
import "./Lists.css"
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import final from "./final.png"
import {useContext} from 'react';
import { CartContext } from './CartContext'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '120%',
    maxWidth: '50ch',
    backgroundColor: theme.palette.background.paper,
    //display: 'inline',
  },
  middle: {
    display: 'middle',
  },

  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    paddingRight: '1.5rem',
    paddingBottom : '2rem',
    display: 'span',
    align: 'left',
  },
}));

let total1 = 0
export default function AlignItemsList() {
  const classes = useStyles();
  const data = useContext(CartContext);
  console.log(data)
  function increment(value,qty){

    total1 = total1 + value
     
 
  }
  
  let cart = data["shoppingCart"].map((content ,key) =>{
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
              {increment(content.price,content.qty)}
              </Typography>
             <div> {`${content.qty} x ${content.price} = ${content.price * content.qty}`}</div>
            </React.Fragment>
          }
        />
    </ListItem>
      </List> 
    )
  });
  return (

  
  
        <div>
        { cart}
       
        
      
    
    
       <Divider variant="left" component="li"className = "MuiDivider-root"/>
       <Typography component="h1" variant="subtitle1">
          {`Total Price               Rs.${data["totalQty"] * 50}`}
        </Typography>
      </div>
   
  );
}
