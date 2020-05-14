import React from 'react';
import SimpleBottomNavigation from './Components/SimpleBottomNavigation';
import { Container, makeStyles } from '@material-ui/core';
import ResponsiveDrawer from './Components/ResponsiveDrawer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loadAboutMeComponent: false,
      loadProjectsComponent: true,
      loadContactComponent: false
    }
  }
  
  handleAboutMeButton = () => {
    this.setState( state => ({ loadAboutMeComponent: true, loadProjectsComponent: false, loadContactComponent: false }) );
  }
  handleProjectsButton = () => {
    this.setState( state => ({ loadProjectsComponent: true, loadAboutMeComponent: false, loadContactComponent: false }) );
  }
  handleContactButton = () => {
    this.setState( state => ({ loadContactComponent: true, loadAboutMeComponent: false, loadProjectsComponent: false }) );
  }
  render() { 
    return ( 
      <div>
        <ResponsiveDrawer 
          loadAboutMeComponent={ this.state.loadAboutMeComponent }
          loadProjectsComponent={ this.state.loadProjectsComponent }
          loadContactComponent={ this.state.loadContactComponent }
          handleAboutMeButton={ this.handleAboutMeButton }
          handleProjectsButton={ this.handleProjectsButton }
          handleContactButton={ this.handleContactButton }>
        </ResponsiveDrawer>
        <SimpleBottomNavigation/>
      </div>
    );
  }
}
 
export default App;


