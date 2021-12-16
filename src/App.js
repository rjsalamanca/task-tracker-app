import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
   const [showAddTask, setShowAddTask] = useState(false);
   const [tasks, setTasks] = useState([]);

   useEffect(() => {
      const getTasks = async () => {
         const tasksFromServer = await fetchTasks();
         setTasks(tasksFromServer);
      }

      getTasks();
   }, [])

   // Fetch Tasks
   const fetchTasks = async () => {
      try {
         const getTasks = await fetch('http://localhost:3000/tasks');
         const data = await getTasks.json();
         return data;
      } catch (err) {
         return err;
      }
   }

   const fetchTask = async (id) => {
      try {
         const getTasks = await fetch(`http://localhost:3000/tasks/${id}`);
         const data = await getTasks.json();
         return data;
      } catch (err) {
         return err;
      }
   }


   // Add Task
   const addTask = async (task) => {
      try {
         const res = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
               'Content-type': 'application/json',
            },
            body: JSON.stringify(task)
         })


         const data = await res.json();

         setTasks([...tasks, data]);
      } catch (err) {
         console.log(err);
      }

      // const id = tasks.length > 0 ? tasks.length + 1 : 1;
      // const newTask = { id, ...task }
      // setTasks([...tasks, newTask]);
   }

   // Delete Task
   const deleteTask = async (id) => {
      await fetch(`http://localhost:3000/tasks/${id}`,
         {
            method: 'DELETE'
         });
      setTasks(tasks.filter(task => task.id !== id));
   }

   // Toggle Add
   const toggleAddTask = () => {
      setShowAddTask(!showAddTask);
   }

   // Toggle Reminder
   const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id);
      const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

      try {
         const res = await fetch(`http://localhost:3000/tasks/${id}`,
            {
               method: 'PUT',
               headers: {
                  'Content-type': 'application/json',
               },
               body: JSON.stringify(updatedTask)
            });

         const data = await res.json();
         console.log(data)

         setTasks(tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task))
      } catch (err) {
         console.log(err);
      }
      // setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
   }

   return (
      <div className="container">
         <Header onAddTask={toggleAddTask} showAddTask={showAddTask} />
         {!!showAddTask && <AddTask onAdd={addTask} />}
         {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
      </div>
   );
}

export default App;
