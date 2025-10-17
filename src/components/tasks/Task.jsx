export function Task({ taskName }) {
  return (
    <article className="task">
      <label className="task__checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
        <p>{taskName}</p>
      </label>
      <button type="button">Supprimer</button>
    </article>
  );
}
