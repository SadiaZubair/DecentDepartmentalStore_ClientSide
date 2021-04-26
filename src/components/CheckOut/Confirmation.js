import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Route, useHistory } from "react-router-dom";
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      width : '260vh',
      float: 'left',
      alignItems : 'left',
  
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
    large :{
      paddingRight : '1cm',
      paddingLeft : '0.4cm',
      width : '5cm',
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
    margin: {
      margin: theme.spacing(1),
      width : '40ch',
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
export default function AlertDialog() {

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const history = useHistory();
  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    history.push(path);
  }
  
  
  return (
    <div>
      <Button className ={clsx(classes.margin, classes.crossalign)} onClick={handleClickOpen}>
        Proceed
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Order Confirm?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are sure that you want to place order
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{routeChange('/Confirmation')}} color="primary">
            Confirm
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}