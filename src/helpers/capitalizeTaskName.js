export function capitalizeTaskName(taskName) {
  const trimmedTaskName = taskName.trim();

  const capitalizedTaskName =
    trimmedTaskName[0].toUpperCase() + trimmedTaskName.slice(1).toLowerCase();

  return capitalizedTaskName;
}
