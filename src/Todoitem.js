import React from "react";
import { ACTIONS } from "./Todolist";
import "./styles.css";
const Todoitem = ({ todo, dispatch }) => {
  return (
    <div className="ListItem">
      <span
        style={{
          color: todo.complete ? "#aaa" : "#000",
          textDecoration: todo.complete ? "line-through" : "none"
        }}
      >
        {todo.todoitem}
      </span>
      <div>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
          }
        >
          <span role="img" aria-label="emoji">
            {todo.complete ? "👎" : "👍"}
          </span>
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          <span role="img" aria-label="emoji">
            ❌
          </span>
        </button>
      </div>
    </div>
  );
};
export default Todoitem;
