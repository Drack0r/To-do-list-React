import { formatString } from "./formatString";
import { capitalizeTaskName } from "./capitalizeTaskName";

export function verifyTaskName(taskName, tasksList) {
  const formatedTaskName = taskName.trim().toLowerCase();
  const authorizedChars = /^[a-zA-Z0-9\sàâäéèêëïîôöùûüÿç.,!?'-]+$/;

  if (!taskName || formatedTaskName === "") {
    alert("⛔️ Le nom de la tâche ne peut pas être vide !");
    return false;
  }

  if (!isNaN(formatedTaskName)) {
    alert("⛔️ Le nom de la tâche ne peut pas être un nombre !");
    return false;
  }

  if (!authorizedChars.test(formatedTaskName)) {
    alert("⛔️ Le nom de la tâche contient des caractères non autorisés !");
    return false;
  }

  if (formatedTaskName.length < 3) {
    alert("⛔️ Le nom de la tâche ne peut pas être si court !");
    return false;
  }

  if (formatedTaskName.length > 100) {
    alert("⛔️ Le nom de la tâche ne peut pas être si long !");
    return false;
  }

  // TO DO : Existe déjà
  if (
    tasksList.some((task) => formatString(task.name) === formatString(taskName))
  ) {
    alert(`⛔️ La tâche "${capitalizeTaskName(taskName)}" existe déjà !`);
    return false;
  }

  return true;
}
