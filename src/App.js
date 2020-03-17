import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addOne, minusOne, changeName, changeColor } from "./store/action";

class App extends Component {
  render() {
    console.log("===From app.js===", this.props);
    console.log(this.props.addOne);
    console.log(this.props.minusOne);
    return (
      <div className="App" style={{ backgroundColor: this.props.colorState }}>
        <h1>Redux Lession</h1>
        <h2>Count:{this.props.countState} </h2>
        <h2>Name:{this.props.nameState} </h2>
        <button onClick={this.props.addOne}> Add One</button>
        <button onClick={this.props.minusOne}> Minus One</button>
        <button onClick={this.props.changeName}> Change Name</button>
        <button onClick={this.props.changeColor}> Change color</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countState: state.count,
  nameState: state.name,
  colorState: state.color
});

const mapActionDispatchToProps = dispatch => ({
  addOne: () => dispatch(addOne),
  minusOne: () => dispatch(minusOne),
  changeName: () => dispatch(changeName),
  changeColor: () => dispatch(changeColor)
});

export default connect(mapStateToProps, mapActionDispatchToProps)(App);
