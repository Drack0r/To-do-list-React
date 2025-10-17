import { Button } from "../../ui/Button/Button";

export function Task({ taskId, taskName, taskIsDone, onDelete, onCheck }) {
  const handleChange = () => {
    onCheck(taskId);
  };

  const handleClick = () => {
    onDelete(taskId);
  };

  return (
    <article className={`task ${taskIsDone ? "task--done" : ""}`} id={taskId}>
      <label className="task__label">
        <input
          type="checkbox"
          name="isDone"
          className="task__checkbox"
          checked={taskIsDone}
          onChange={handleChange}
        />

        <span className="task__checkmark"></span>

        <p className="task-text">{taskName}</p>
      </label>

      <Button
        type={"delete"}
        content={<i className="fa-solid fa-trash"></i>}
        onClick={handleClick}
      />
    </article>
  );
}
