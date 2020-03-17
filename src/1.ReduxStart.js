import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// redux module
import { createStore } from "redux";

const initialState = {
  count: 0,
  name: "Atik"
};

// reducer takes 2 parameeters
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ONE":
      return { ...state, count: state.count + 1 };
    case "MINUS_ONE":
      return { ...state, count: state.count - 1 };
    case "CHANGE_NAME":
      return { ...state, name: "David" };
    default:
      return state;
  }
}

// this take one call back
const store = createStore(reducer);
console.log("===console from store==", store);
console.log("==from store.getstate==", store.getState());

//action
//Action is an obkect with 2 keys (type, payload)

const addOneAction = {
  type: "ADD_ONE"
  // payload is similar to react state
  //   payload: {
  //     count: 0
  //   }
};
const minusOneAction = {
  type: "MINUS_ONE"
  // payload is similar to react state
  //   payload: {
  //     count: 0
  //   }
};
const changeName = {
  type: "CHANGE_NAME"
};

store.dispatch(addOneAction);
store.dispatch(addOneAction);
store.dispatch(addOneAction);
store.dispatch(addOneAction);
store.dispatch(addOneAction);
console.log("===AddOneAction===", store.getState());
console.log("minus from MINUS ONE Action");
store.dispatch(minusOneAction);
store.dispatch(minusOneAction);
store.dispatch(minusOneAction);
store.dispatch(minusOneAction);
console.log("===MinusOneAction===", store.getState());

store.dispatch(changeName);
console.log("===Change Name===", store.getState());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
