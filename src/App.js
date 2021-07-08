import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";
import { $ } from "./utils/selectors.js";

export default function App(store) {
  store.addObserver(new TodoInput(store, $(".new-todo")));
  store.addObserver(new TodoList(store, $(".todo-list")));
}
