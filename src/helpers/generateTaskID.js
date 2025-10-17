export function generateTaskID(array) {
  const ID = Math.max(...array.map((t) => t.id)) + 1;
  return ID;
}
