import { useState } from "react";
import { ListTasks } from "./ListTasks";

export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listTasks, setListTask] = useState<string[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setListTask((prevTask) => [...prevTask, newTask]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    setListTask((tasks) => tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva Tarea"
        ></input>

        <div className="buttontask">
          <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
      </div>
      <ListTasks
        listTasks={listTasks}
        deleteTask={handleDeleteTask}
      ></ListTasks>
    </div>
  );
};
