import Header from "./component/Header";
import { useState } from "react";
import Tasks from "./component/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shooping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const deleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const reminderHandler = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteHandler}
          onToggle={reminderHandler}
        />
      ) : (
        <h1 className="empty">No tasks to show</h1>
      )}
    </div>
  );
};

export default App;
