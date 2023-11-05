import TodoFiled from "./components/field";
import Input from "./components/input";
import ToDo from "./components/todo";
import "./style.scss";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <a href="https://github.com/Zoha2400">
          React ToDo v2.0 - Redux Version by Zoha2400
        </a>
      </div>

      <div className="content">
        <Input />
        <TodoFiled />
      </div>
    </div>
  );
}
