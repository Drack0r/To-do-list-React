import { useState } from "react";
import { generateTaskID } from "../../../helpers/generateTaskID";
import { capitalizeTaskName } from "../../../helpers/capitalizeTaskName";
import { verifyTaskName } from "../../../helpers/verifyTaskName";

import { Button } from "../../ui/Button/Button";
import { Task } from "../Task/Task";

export function TaskList() {
  // ===== States ===== //
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Faire du sport",
      isDone: false,
    },
    {
      id: 2,
      name: "Ranger ma chambre",
      isDone: false,
    },
    {
      id: 3,
      name: "Cuisiner un poulet curry",
      isDone: false,
    },
    {
      id: 4,
      name: "Aller au cinéma",
      isDone: false,
    },
    {
      id: 5,
      name: "Développer une application",
      isDone: false,
    },
  ]);

  // ===== Functions ===== //
  const handleClick = () => {
    const newTask = createTask();

    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

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

    alert("✅ La tâche a été ajoutée !");
    return task;
  };

  // ===== Return ===== //
  return (
    <section className="task-list">
      <h2 className="task-list__title">Liste de tâches</h2>

      <Button
        type={"add"}
        textContent={"Ajouter une tâche"}
        callback={handleClick}
      />

      <div className="tasks-container">
        {tasks.map((task) => (
          <Task taskName={task.name} key={task.id} />
        ))}
      </div>
    </section>
  );
}
