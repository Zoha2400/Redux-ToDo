import "../styles/input.scss";

export default function Input() {
  return (
    <div className="input-wrapper">
      <textarea
        placeholder="Type a task..."
        type="text"
        name="input"
        id="input"
        className="inputTodo"
      />
      <button className="add">Add</button>
    </div>
  );
}
