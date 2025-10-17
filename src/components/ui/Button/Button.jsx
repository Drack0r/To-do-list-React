export function Button({ type, content, onClick }) {
  const buttonClasses = {
    add: "add-btn",
    delete: "delete-btn",
  };

  return (
    <button
      type="button"
      className={buttonClasses[type] || "btn"}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
