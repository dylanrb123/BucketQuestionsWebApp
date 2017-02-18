/**
 * Created by Dylan on 2/18/2017.
 */
import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

import './App.css'

class IndexForm extends Component {
  constructor(props) {
    super(props);
    this.state = {bucketName: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({bucketName: event.target.value});
  }

  handleSubmit(event) {
    console.log('Bucket name submitted: ' + this.state.bucketName);
    event.preventDefault();
  }

  render() {
    return (
      <div className="indexForm">
        <form onSubmit={this.handleSubmit} className="IndexForm">
          <TextField value={this.state.bucketName} onChange={this.handleChange}
            floatingLabelText="Enter your bucket name"
          /><br/>
          <RaisedButton label={"Go to bucket: " + this.state.bucketName} fullWidth={true} primary={true} onTouchTap={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default IndexForm;