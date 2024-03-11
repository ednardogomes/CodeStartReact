import { useState, useEffect } from "react";
import axios from "axios";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar Programação",
      isCompleted: false,
    },
    {
      id: "2",
      description: "Fazer o Full Stack Club!",
      isCompleted: false,
    },
    {
      id: "3",
      description: "Ir na academia",
      isCompleted: true,
    },
  ]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get("localhost:3000/tasks");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="tasks-container">
      <h2>Minhas Tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas Tarefas</h3>
        <AddTask />
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <TaskItem task={lastTask} key={lastTask.id} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <div className="tasks-list"></div>
        {tasks
          .filter((task) => task.isCompleted)
          .map((completedTask) => (
            <TaskItem task={completedTask} key={completedTask.id} />
          ))}
      </div>
    </div>
  );
};

export default Tasks;
