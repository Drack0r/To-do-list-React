/**
 * Reusable Button component with predefined styling variants
 * @param {string} type - Button variant type ('add', 'delete', or custom)
 * @param {React.ReactNode} content - Button content (text, icons, or JSX elements)
 * @param {function} onClick - Click event handler function
 * @returns {JSX.Element} Styled button element
 */
export function Button({ type, content, onClick }) {
  // Mapping object for button type to CSS class correspondence
  const buttonClasses = {
    add: "add-btn", // Green button for adding items
    delete: "delete-btn", // Red button for deleting items
  };

  return (
    <button
      type="button"
      className={buttonClasses[type] || "btn"} // Fallback to generic 'btn' class
      onClick={onClick}
    >
      {content}
    </button>
  );
}
