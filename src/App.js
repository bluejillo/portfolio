import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Navigation from './components/nav/Navigation';
import SideDrawer from './components/side-drawer/SideDrawer';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import NotFound from './NotFound';
import Backdrop from './components/backdrop/Backdrop';

class App extends Component {

  state = {
    sideDrawerToggle: false
  };

  toggleClickHandler = () => {

    this.setState((prevState) => {
      return {sideDrawerToggle: !prevState.sideDrawerToggle};
    });

  };

  backdropClickHandler = () => {
    return this.setState({ sideDrawerToggle: false });
  };

  render() {

    let sideDrawer = null;
    let backdrop = null;

    if(this.state.sideDrawerToggle){
      

      backdrop = <Backdrop click={ this.backdropClickHandler }/>;
    }
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation toggle={ this.toggleClickHandler } />
            <SideDrawer linkClick={ this.backdropClickHandler } animation={ this.state.sideDrawerToggle }/>
            { backdrop }
            <Switch>
                <Route exact path = "/" component = { Home } />
                <Route path = "/portfolio" component = { Portfolio } />
                <Route path = "/contact" component = { Contact }/>
                <Route component = { NotFound } />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
