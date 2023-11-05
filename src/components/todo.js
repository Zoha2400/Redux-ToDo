import "../styles/todo.scss";

export default function ToDo() {
  return (
    <div className="ToDo-wrap">
      <p className="message">
        <p className="num">1</p>
        <p className="text">Do Homework</p>
      </p>
      <div className="buttons">
        <div className="done btn"></div>
        <div className="remove btn"></div>
      </div>
    </div>
  );
}
