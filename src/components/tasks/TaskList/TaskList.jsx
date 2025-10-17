import { useState, useEffect } from "react";

import { generateTaskID } from "../../../helpers/generateTaskID";
import { capitalizeTaskName } from "../../../helpers/capitalizeTaskName";
import { verifyTaskName } from "../../../helpers/verifyTaskName";

import { Button } from "../../ui/Button/Button";
import { Task } from "../Task/Task";

/**
 * TaskList component managing the complete todo list functionality
 * Handles task creation, deletion, completion toggle, and localStorage persistence
 * @returns {JSX.Element} Complete task list interface with add functionality
 */
export function TaskList() {
  // ===== State Management ===== //

  /**
   * Tasks state initialized from localStorage or empty array
   * Persists user data between browser sessions
   */
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // ===== Side Effects ===== //

  /**
   * Synchronize tasks with localStorage on every state change
   * Ensures data persistence across browser sessions
   */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // ===== Task Management Functions ===== //

  /**
   * Creates a new task with user input validation
   * @returns {Object|undefined} New task object if valid, undefined otherwise
   */
  const createTask = () => {
    const taskName = prompt("Nom de la tâche");

    // Validate task name against multiple criteria
    if (!verifyTaskName(taskName, tasks)) {
      alert("⛔️ La tâche n'a pas été créée !");
      return;
    }

    // Create task object with auto-generated ID and formatted name
    const task = {
      id: generateTaskID(tasks),
      name: capitalizeTaskName(taskName),
      isDone: false,
    };

    alert(`✅ La tâche "${task.name}" a été ajoutée !`);
    return task;
  };

  /**
   * Deletes a task by ID and shows confirmation message
   * @param {number} taskId - Unique identifier of the task to delete
   */
  const deleteTask = (taskId) => {
    // Find task for confirmation message before deletion
    const task = tasks.find((task) => task.id === taskId);

    // Remove task from state
    setTasks(tasks.filter((task) => task.id !== taskId));

    alert(`❌ La tâche "${task.name}" a été supprimée !`);
  };

  /**
   * Toggles the completion status of a task
   * @param {number} taskId - Unique identifier of the task to toggle
   */
  const markTaskAsDone = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        // Toggle isDone status while preserving other properties
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  // ===== Event Handlers ===== //

  /**
   * Handles add task button click
   * Creates new task and adds it to the list if valid
   */
  const handleClick = () => {
    const newTask = createTask();

    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  // ===== Component Render ===== //
  return (
    <section className="task-list">
      {/* Page title */}
      <h2 className="task-list__title">Liste de tâches</h2>

      {/* Add new task button */}
      <Button
        type={"add"}
        content={
          <>
            <i className="fa-solid fa-plus"></i>
            <span>Ajouter une tâche</span>
          </>
        }
        onClick={handleClick}
      />

      {/* Tasks container - renders all existing tasks */}
      <div className="task-list__container">
        {tasks.map((task) => (
          <Task
            key={task.id}
            taskId={task.id}
            taskName={task.name}
            taskIsDone={task.isDone}
            onDelete={deleteTask}
            onCheck={markTaskAsDone}
          />
        ))}
      </div>
    </section>
  );
}
