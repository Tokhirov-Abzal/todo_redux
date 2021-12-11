import React from "react";
import { useDispatch } from "react-redux";

const Input = () => {
  const [input, setInput] = React.useState("");
  const disptach = useDispatch();

  const clickHandler = () => {
    if (input.length < 1) {
      return alert("Enter something!");
    }
    disptach({
      type: "ADD_TODO",
      payload: { id: Math.random(), name: input, completed: false },
    });

    setInput("");
  };
  return (
    <div className="input__container">
      <input
        type="text"
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="input__addBtn" onClick={clickHandler}>
        ADD
      </button>
    </div>
  );
};

export default Input;
