import { Layout } from "./components/layout/Layout/Layout";

export function Page() {
  return (
    <>
      <Layout>
        <section className="task-list">
          <h2 className="task-list__title">Liste de tâches</h2>

          <div className="task-container">
            <article className="task">
              <label className="task__checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <p>Faire un truc</p>
              </label>
              <button type="button">Supprimer</button>
            </article>

            <article className="task">
              <label className="task__checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <p>Faire un truc</p>
              </label>
              <button type="button">Supprimer</button>
            </article>

            <article className="task">
              <label className="task__checkbox">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <p>Faire un truc</p>
              </label>
              <button type="button">Supprimer</button>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
}
