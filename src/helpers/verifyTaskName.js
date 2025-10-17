import { formatString } from "./formatString";
import { capitalizeTaskName } from "./capitalizeTaskName";

/**
 * Validates a task name against multiple criteria
 * @param {string} taskName - The task name to validate
 * @param {Array} tasksList - Array of existing tasks to check for duplicates
 * @returns {boolean} True if valid, false otherwise (with alert feedback)
 */
export function verifyTaskName(taskName, tasksList) {
  // Regex pattern for allowed characters (letters, numbers, spaces, basic punctuation)
  const authorizedChars = /^[a-zA-Z0-9\sàâäéèêëïîôöùûüÿç.,!?'-]+$/;

  // Format task name for validation (trimmed and lowercase)
  const formatedTaskName = taskName.trim().toLowerCase();

  // Capitalize task name for user feedback in error messages
  const capitalizedTaskName = capitalizeTaskName(taskName);

  // Check if task already exists (case-insensitive comparison)
  const isTaskExist = tasksList.some(
    (task) => formatString(task.name) === formatString(taskName)
  );

  // Validation 1: Check for empty or whitespace-only input
  if (!taskName || formatedTaskName === "") {
    alert("⛔️ Le nom de la tâche ne peut pas être vide !");
    return false;
  }

  // Validation 2: Prevent numeric-only task names
  if (!isNaN(formatedTaskName)) {
    alert("⛔️ Le nom de la tâche ne peut pas être un nombre !");
    return false;
  }

  // Validation 3: Check for unauthorized characters
  if (!authorizedChars.test(formatedTaskName)) {
    alert("⛔️ Le nom de la tâche contient des caractères non autorisés !");
    return false;
  }

  // Validation 4: Minimum length requirement (3 characters)
  if (formatedTaskName.length < 3) {
    alert("⛔️ Le nom de la tâche ne peut pas être si court !");
    return false;
  }

  // Validation 5: Maximum length requirement (100 characters)
  if (formatedTaskName.length > 100) {
    alert("⛔️ Le nom de la tâche ne peut pas être si long !");
    return false;
  }

  // Validation 6: Check for duplicate task names
  if (isTaskExist) {
    alert(`⛔️ La tâche "${capitalizedTaskName}" existe déjà !`);
    return false;
  }

  // All validations passed
  return true;
}
