import { Layout } from "./components/layout/Layout/Layout";
import { TaskList } from "./components/tasks/TaskList/TaskList";

/**
 * Main Page component serving as the application entry point
 * Combines the layout structure with the task list functionality
 * @returns {JSX.Element} Complete application page with layout and task management
 */
export function Page() {
  return (
    <Layout>
      {/* Main application content - Task management interface */}
      <TaskList />
    </Layout>
  );
}
