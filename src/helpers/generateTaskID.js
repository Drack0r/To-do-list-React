export function generateTaskID(taskList) {
  const ID = Math.max(...taskList.map((t) => t.id)) + 1;
  return ID;
}
