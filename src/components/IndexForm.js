/**
 * Created by Dylan on 2/18/2017.
 */
import React, { Component } from 'react'
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your bucket name:
            <input type="text" value={this.state.bucketName} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default IndexForm;