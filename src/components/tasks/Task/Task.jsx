import { Button } from "../../ui/Button/Button";

export function Task({ taskName }) {
  return (
    <article className="task">
      <label className="task__checkbox">
        <input type="checkbox" />

        <span className="checkmark"></span>

        <p>{taskName}</p>
      </label>

      <Button type={"delete"} textContent={"Supprimer"} />
    </article>
  );
}
