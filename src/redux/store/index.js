import { createStore, combineReducers } from "redux";
import addTodoRecuer from "../reducer/addTodoReducer";
import inputReducer from "../reducer/inputReducer";

const rootReducer = combineReducers({
  todos: addTodoRecuer,
  inputVal: inputReducer,
});

export const store = createStore(rootReducer);
