import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Todolist from "./Todolist";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Todolist />
  </StrictMode>,
  rootElement
);
