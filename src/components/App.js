import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import 'whatwg-fetch'
import { Router, Route, browserHistory } from 'react-router'
import LandingPage from './LandingPage'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {buckets: []}
  }
  componentDidMount() {
    fetch('http://localhost:8080/api/buckets').then( result => {
      this.setState({buckets: result.json()});
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Router history={browserHistory}>
          <Route path="/" component={LandingPage}/>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
