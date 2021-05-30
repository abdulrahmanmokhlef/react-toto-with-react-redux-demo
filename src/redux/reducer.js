import { combineReducers } from "redux";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  LOAD_TODOS
} from "./actionCreators";

const initialState = [
  {
    title: "New todo",
    completed: true,
    id: 12345
  },
  {
    title: "another todo",
    completed: false,
    id: 1456
  }
];

function todos(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODOS:
      return [...action.payload.todos];

    case ADD_TODO:
      console.log("ADD_TODO");
      const newTodo = action.payload.todoItem;
      return [...state, newTodo];

    case REMOVE_TODO:
      return state.filter((todoItem) => todoItem.id !== action.payload.id);

    case TOGGLE_TODO:
      return state.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            completed: !t.completed
          };
        }
        return t;
      });

    default:
      return state;
  }
}

export const reducer = combineReducers({
  todos
});
