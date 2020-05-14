import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Container} from '@material-ui/core'; 


const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 50,
      position: 'fixed',
      bottom: 0,
      left: 0,
      backgroundColor: '#f29898',
      margin: 'none',
      color: 'white',
    },
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - 240px)`,
      height: 50,
      position: 'fixed',
      bottom: 0,
      left: 190,
      margin: 'none',
      color: '#f29898',
    },
  },
  icon: {
    marginTop: 7,
    width: 35,
    height: 35,
    cursor: 'pointer'
  }
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Container className={classes.root}>
      <GitHubIcon className={classes.icon} onClick={()=> window.open("https://github.com/js-addis", "_blank")}/> <FacebookIcon className={classes.icon} onClick={()=> window.open("https://facebook.com/jacob.addis.351/", "_blank")}/> <LinkedInIcon className={classes.icon} onClick={()=> window.open("https://www.linkedin.com/in/jacob-addis-11955414a/")}/>
    </Container>
  );
}
