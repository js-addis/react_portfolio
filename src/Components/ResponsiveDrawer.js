// IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
// Custom Components
import ImgMediaCard from './ImgMediaCard';
import SimpleList from './SimpleList';
import Projects from './Projects';
import Contact from './Contact'
import Footer from './Footer';
import AboutMe from './AboutMe';
import VerticalTabs from './VerticalTabs';
import Logo from './Logo';
// Material UI Components 
import { AppBar, CssBaseline, Divider, Drawer, Hidden,
IconButton, List, ListItem, ListItemIcon, ListItemText,
Toolbar, Typography, Grid, Container, Tab, Tabs } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// Material UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon  from '@material-ui/icons/Code';

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      
    },
    [theme.breakpoints.down('xs')]: {
      backgroundcolor: 'white'
    },
  },
  appBar: {
    [theme.breakpoints.down('xs')]: {
      alignItems: '',
      backgroundColor: '#f29898',
      height: 63,
      paddingTop: 5,
      color: 'white',
    },
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      height: 80,
      alignItems: 'center',
      paddingTop: 0,
      backgroundColor: 'white',
      color: '#f29898',
      //textShadow: '0px 1px 1px #3B5998',
      boxShadow: 'none',
      opacity: 0.7,
      
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
      position: 'fixed',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      position: 'fixed'
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('xs')]: {
      
      backgroundColor: 'white'
    },
    [theme.breakpoints.up('sm')]: {
     
    },
  },
  content: {
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
      paddingTop: 10,
      backgroundColor: 'white'
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 0,
      flexGrow: 1,
      paddingTop: 17,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 0,
      flexGrow: 1,
      paddingTop: 17
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 0,
      flexGrow: 1,
      paddingTop: 17
    },
  },
  // Custom Styles
  logoTab: {
    height: 150,
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex'
  },
  familyCrest: {
    width: '120px',
    height: '90px',
    borderRadius: '100%',
    float: 'left',
    margin: 'auto'
  },
  toolBarContent: {
    paddingTop: '0px',
    height: 100,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  contentDivider: {
    
  },
  tabSelected: {
    backgroundColor: "green"
  },
  MenuIcon: {
    
  },
  HeaderText: {
    
  },
  headerContent: {
    margin: 'auto'
  },
  h3: {
    [theme.breakpoints.down('sm')]: {
      margin: 0
    }
    
  }
  // custom styles - END
}));

function ResponsiveDrawer(props) {
  //CUSTOM
  const loadAboutMeComponent = props.loadAboutMeComponent;
  const loadProjectsComponent = props.loadProjectsComponent;
  const loadContactComponent = props.loadContactComponent;
  const handleAboutMeButton = props.handleAboutMeButton;
  const handleProjectsButton = props.handleProjectsButton;

  //PAGE
  const Page = ({ loadAboutMeComponent, loadProjectsComponent, loadContactComponent }) => 
                  loadAboutMeComponent ? <AboutMe/> :
                  loadProjectsComponent ? <Projects/> :
                  loadContactComponent ? <Contact/> : 
                  null;
  //CUSTOM
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [ mobileOpen, setMobileOpen ] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //DRAWER
  const drawer =  (
    <div>
      <div className={classes.logoTab}>
        <Logo/>
      </div>
      <Divider />
      <VerticalTabs handleAboutMeButton={props.handleAboutMeButton}
                    handleProjectsButton={props.handleProjectsButton}
                    handleContactButton={props.handleContactButton}>
      </VerticalTabs>
    </div>
  );
  const HeaderText = ({ loadAboutMeComponent, loadProjectsComponent, loadContactComponent }) => 
                        loadAboutMeComponent ? <h3 className={classes.h3}>JS. ADDIS</h3> : 
                        loadProjectsComponent ? <h3 className={classes.h3}>Projects!</h3> :
                        loadContactComponent ? <h3 className={classes.h3}>Contact Me</h3> : 
                        null
  //RETURN
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarContent}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.headerContent}>
            <HeaderText loadAboutMeComponent={props.loadAboutMeComponent}
                        loadProjectsComponent={props.loadProjectsComponent}
                        loadContactComponent={props.loadContactComponent}
                        className={classes.HeaderText}/>
          </Typography>
        </Toolbar>
        <Divider absolute={true}/>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer> 
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      {/** PAGE CONTENT LOADED HERE*/}
      <main className={classes.content}>

        <div className={classes.toolbar} />

        <Page loadAboutMeComponent={props.loadAboutMeComponent}
              loadProjectsComponent={props.loadProjectsComponent}
              loadContactComponent={props.loadContactComponent}/>
    

        <Footer/>

      </main>

    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;

// I don't want you here. I'm not gona kick you out because that would be inhumane, and no one does that.
// If I could get away with it I would kick you out.