import React, { useState, useReducer } from "react";
import Todoitem from "./Todoitem";
import "./styles.css";

export const ACTIONS = {
  ADD_TODO: "add",
  TOGGLE: "toggle",
  DELETE_TODO: "del"
};

const reducerfn = (todos, actions) => {
  switch (actions.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(actions.payload.item)];
    case ACTIONS.TOGGLE:
      return todos.map((todo) => {
        if (todo.id === actions.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== actions.payload.id);
    default:
      return todos;
  }
};

const newTodo = (new_item) => {
  return { id: Date.now(), todoitem: new_item, complete: false };
};

const Todolist = () => {
  const [todos, dispatch] = useReducer(reducerfn, []);
  const [currItem, setItem] = useState("");
  // console.log(currItem);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { item: currItem } });
    setItem("");
  };
  return (
    <div className="Todolist">
      <h1>
        <span role="img" aria-label="emoji">
          🧾
        </span>
        To Do List
        <span role="img" aria-label="emoji">
          🧾
        </span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currItem}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter TODO ITEM and hit ENTER"
          size="35"
        />
      </form>
      {todos.length ? (
        ""
      ) : (
        <span className="Notodo">No todo to complete !!</span>
      )}
      {/* { We cannot access key so id will be taken from todo(id, todoitem,complete)} */}
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
};
export default Todolist;
