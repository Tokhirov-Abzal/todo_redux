const initialState = {
  inputVal: "",
};

function getInputVal(state = initialState, action) {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, inputVal: action.payload };
    default:
      return state;
  }
}

export default getInputVal;
