import { Layout } from "./components/layout/Layout/Layout";
import { Task } from "./components/tasks/Task";

import data from "./data/placeholder.json";

export function Page() {
  return (
    <>
      <Layout>
        <section className="task-list">
          <h2 className="task-list__title">Liste de tâches</h2>

          <div className="tasks-container">
            {data.map((task) => (
              <Task taskName={task.name} key={task.id} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
