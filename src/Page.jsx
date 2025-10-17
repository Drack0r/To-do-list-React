import { Layout } from "./components/layout/Layout/Layout";
import { TaskList } from "./components/tasks/TaskList/TaskList";

export function Page() {
  return (
    <>
      <Layout>
        <TaskList />
      </Layout>
    </>
  );
}
