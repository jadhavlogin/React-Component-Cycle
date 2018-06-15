import React, { Component } from 'react';

class NewComponent extends Component {
constructor(){
    super()
    console.log("In NewComponent constructor");
    this.state = {
      message: 'Hello !'
    }
  }
  getInitialState() {
    return {message: 'Hello!'};
  }
  handleChange(event){
    this.setState({
        message: event.target.value
    });
  }
  componentWillMount(){
    console.log("In NewComponent component will mount..");
  }
  render() {
    console.log("In NewComponent Render..");
    var message = this.state.message;
    return (
      <div className="App">
        <p className="App-intro">
          In New Component 
          <input type="text" value={message} onChange={this.handleChange.bind(this)}/>
        </p>
      </div>
    );
  }
  componentDidMount(){
    console.log("In NewComponent component did mount..");
  }

  componentWillReceiveProps(){
    console.log("In NewComponent component will receive update..");
  }
  shouldComponentUpdate(nextProp, nextState){
    console.log("In NewComponent should component update..");
    if (this.state === nextState){
        return false;
    }
      return true;
  }
  componentWillUpdate(){
    console.log("In NewComponent component will update..");
  }
  componentDidUpdate(){
    console.log("In NewComponent component did update..");
  }
  componentWillUnmount(){
    console.log("In NewComponent component will unmount..");
  }
}

export default NewComponent;
