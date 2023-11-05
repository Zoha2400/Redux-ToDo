import "../styles/todo.scss";

export default function ToDo() {
  return (
    <div className="ToDo-wrap">
      <p className="message">do homework</p>
      <div className="buttons">
        <div className="done btn">D</div>
        <div className="remove btn">X</div>
      </div>
    </div>
  );
}
