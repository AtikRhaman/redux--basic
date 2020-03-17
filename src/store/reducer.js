// Reducer
const initialState = {
  count: 0,
  name: "Atik",
  color: "#764abc"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ONE":
      return { ...state, count: state.count + 1 };
    case "MINUS_ONE":
      return { ...state, count: state.count - 1 };
    case "CHANGE_NAME":
      const name = state.name === "Atik" ? "Rahman" : "Atik";
      return { ...state, name: name };
    case "CHANGE_COLOR":
      const color = state.color === "#764abc" ? "red" : "#764abc";
      return { ...state, color: color };

    default:
      return state;
  }
}
