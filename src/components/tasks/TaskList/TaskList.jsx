import { useState } from "react";

import data from "../../../data/placeholder.json";

import { generateTaskID } from "../../../helpers/generateTaskID";
import { capitalizeTaskName } from "../../../helpers/capitalizeTaskName";
import { verifyTaskName } from "../../../helpers/verifyTaskName";

import { Button } from "../../ui/Button/Button";
import { Task } from "../Task/Task";

export function TaskList() {
  const [tasks, setTasks] = useState([...data]);

  const createTask = () => {
    const taskName = prompt("Nom de la tâche");

    if (!verifyTaskName(taskName, tasks)) {
      alert("⛔️ La tâche n'a pas été créée !");
      return;
    }

    const task = {
      id: generateTaskID(tasks),
      name: capitalizeTaskName(taskName),
      isDone: false,
    };

    alert(`✅ La tâche "${task.name}" a été ajoutée !`);
    return task;
  };

  const deleteTask = (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
    alert(`❌ La tâche "${task.name}" a été supprimée !`);
  };

  const markTaskAsDone = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone: !task.isDone };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleClick = () => {
    const newTask = createTask();

    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  // ===== Return ===== //
  return (
    <section className="task-list">
      <h2 className="task-list__title">Liste de tâches</h2>

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
