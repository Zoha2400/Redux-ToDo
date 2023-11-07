import { createStore } from "redux";

const toDo = (state = [], active) => {
  if (active.type === "ADD") {
    state.concat(active.todo);
  } else if (active.type === "REMOVE") {
    state.splice(active.todo);
  } else if (active.type === "DONE") {
  }
};

const store = createStore(toDo);
