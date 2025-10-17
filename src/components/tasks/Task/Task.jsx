import { Button } from "../../ui/Button/Button";

/**
 * Task component representing a single todo item
 * @param {Object} props - Component props
 * @param {number} props.taskId - Unique identifier for the task
 * @param {string} props.taskName - Display name of the task
 * @param {boolean} props.taskIsDone - Completion status of the task
 * @param {function} props.onDelete - Callback function to handle task deletion
 * @param {function} props.onCheck - Callback function to handle task completion toggle
 * @returns {JSX.Element} Task element with checkbox and delete functionality
 */
export function Task({ taskId, taskName, taskIsDone, onDelete, onCheck }) {
  /**
   * Handles checkbox state change to toggle task completion
   */
  const handleChange = () => {
    onCheck(taskId);
  };

  /**
   * Handles delete button click to remove task
   */
  const handleClick = () => {
    onDelete(taskId);
  };

  return (
    <article className={`task ${taskIsDone ? "task--done" : ""}`} id={taskId}>
      {/* Task checkbox with custom styling */}
      <label className="task__label">
        <input
          type="checkbox"
          name="isDone"
          className="task__checkbox"
          checked={taskIsDone}
          onChange={handleChange}
        />

        {/* Custom checkbox appearance */}
        <span className="task__checkmark"></span>

        {/* Task text content - Note: should be task__text for BEM consistency */}
        <p className="task-text">{taskName}</p>
      </label>

      {/* Delete button with trash icon */}
      <Button
        type={"delete"}
        content={<i className="fa-solid fa-trash"></i>}
        onClick={handleClick}
      />
    </article>
  );
}
