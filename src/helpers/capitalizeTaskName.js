/**
 * Capitalizes the first letter of a task name and converts the rest to lowercase
 * @param {string} taskName - The task name to capitalize
 * @returns {string} Formatted task name with proper capitalization
 */
export function capitalizeTaskName(taskName) {
  // Handle null/undefined/empty input gracefully
  if (!taskName || taskName.trim() === "") {
    return "";
  }

  // Remove leading/trailing whitespace
  const trimmedTaskName = taskName.trim();

  // Capitalize first character and lowercase the rest
  const capitalizedTaskName =
    trimmedTaskName[0].toUpperCase() + trimmedTaskName.slice(1).toLowerCase();

  return capitalizedTaskName;
}
