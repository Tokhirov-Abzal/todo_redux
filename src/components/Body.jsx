import React from "react";
import { useSelector } from "react-redux";
import closeImg from "../assets/close.png";
import editImg from "../assets/edit.png";
import checkImg from "../assets/check.png";
import { useDispatch } from "react-redux";

const Body = () => {
  const todoList = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const completeHandler = (id) => {
     
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  return (
    <ul className="body__container">
      {todoList &&
        todoList.map((todo, index) => (
          <li key={todo.id} className={todo.completed ? "lineThrough" : ""}>
            <h5>{todo.name}</h5>
            <div className="body__imageContainer">
              <img src={editImg} alt="edit" />
              <img
                src={checkImg}
                alt="edit"
                onClick={() => completeHandler(todo.id)}
              />
              <img
                src={closeImg}
                alt="edit"
                onClick={() => removeHandler(todo.id)}
              />
            </div>
          </li>
        ))}
    </ul>
  );
};

export default Body;
