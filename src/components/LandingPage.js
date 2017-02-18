/**
 * Created by Dylan on 2/18/2017.
 */
import React, { Component } from 'react';
import IndexForm from './IndexForm';
import bucket from '../bucket.svg'
import question from '../question.svg'
import './App.css'

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={bucket} className="App-logo" alt=""/>
          <img src={question} className="App-logo" style={{paddingLeft: '10px'}} alt=""/>
        </div>
        <IndexForm/>
      </div>
    )
  }
}

export default LandingPage