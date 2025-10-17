/**
 * Formats a string for consistent comparison by normalizing whitespace and case
 * @param {string} string - The string to format
 * @returns {string} Formatted string (trimmed and lowercase)
 */
export function formatString(string) {
  // Handle null/undefined input gracefully
  if (!string) {
    return "";
  }

  // Remove leading/trailing whitespace and convert to lowercase
  // This ensures consistent comparison for duplicates detection
  return string.trim().toLowerCase();
}
