/**
 * Generates a unique ID for a new task based on existing task IDs
 * @param {Array} taskList - Array of existing tasks with id properties
 * @returns {number} Next available ID (highest existing ID + 1)
 */
export function generateTaskID(taskList) {
  // Handle empty task list case - return 1 as first ID
  if (!taskList || taskList.length === 0) {
    return 1;
  }

  // Find the highest existing ID and increment by 1
  const maxID = Math.max(...taskList.map((task) => task.id));
  return maxID + 1;
}
