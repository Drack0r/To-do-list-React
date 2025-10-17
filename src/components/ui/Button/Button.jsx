export function Button({ type, textContent, callback }) {
  const buttonClasses = {
    add: "add-btn",
    delete: "delete-btn",
  };

  return (
    <button
      type="button"
      className={buttonClasses[type] || "btn"}
      onClick={callback}
    >
      {textContent}
    </button>
  );
}
