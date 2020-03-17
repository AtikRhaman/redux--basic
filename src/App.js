import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import {addOne, minusOne} from "./store/action"

class App extends Component {
  render() {
    console.log("===From app.js===", this.props);
    console.log(this.props.addOne)
    console.log(this.props.minusOne)
    return (
      <div className="App">
        <h1>Redux Lession</h1>
        <h2>Count:{this.props.count} </h2>
        <button onClick={this.props.addOne}> Add One</button>
        <button onClick={this.props.minusOne}> Minus One</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state
});

const mapActionToProps = dispatch => ({
  addOne: () => dispatch(addOne),
  minusOne: () => dispatch(minusOne)
});

export default connect(mapStateToProps, mapActionToProps)(App);
