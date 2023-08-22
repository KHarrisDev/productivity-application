export default function App () {
  return (
    <div>
      <Header />
      <InputForm />
      <TaskList />
      <TaskListFooter />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <header>Productivity Application</header>
    </div>
  );
}

const InputForm = () => {
  return (
    <div className="form">
      <h2>Input Form</h2>
    </div>
  );
}

const TaskList = () => {
  return (
    <div className="task-list">
      TASK LIST
    </div>
  );
}

const TaskListFooter = () => {
  return (
    <footer className="statistics">
      <em>You have accomplished x task on your task list.</em>
    </footer>
  )
}