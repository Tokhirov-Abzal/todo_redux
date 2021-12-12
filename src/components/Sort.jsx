import React from "react";
import { useDispatch, useSelector } from "react-redux";
import filterImg from "../assets/filter.png";
const Sort = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  console.log(todos);
  return (
    <div className="sortContainer">
      <img
        style={{ width: "30px", height: "30px" }}
        src={filterImg}
        alt="filterIcon"
        onClick={() =>
          dispatch({
            type: "SORT_TODOS",
            payload: todos.sort((a) => (a.completed ? 1 : -1)),
          })
        }
      />
    </div>
  );
};

export default Sort;
