import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
import Counter from './state/Counter';
import Form from './state/Form';
import Todo from './state/todos/Todo';
import Keeper from './state/keeper/Keeper';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = () => {};

  return (
    <div className='wrapper'>
      <div className='container'>
        <Header title='Task Tracker' />
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          'No Task To Show.'
        )}
      </div>
      <div className='container'>
        <h1>Other Mini App</h1>
        <Counter />
        <Form />
        <Todo />
        <Keeper />
      </div>
    </div>
  );
}

export default App;
