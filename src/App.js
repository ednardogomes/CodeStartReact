//Componente de classes
// import React from "react";
// import TaskItem from "./components/TaskItem";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleStateChange = this.handleStateChange.bind(this);
//     this.state = {
//       tasks: [
//         {
//           id: "1",
//           description: "Estudar Programação",
//           isCompleted: false,
//         },
//         {
//           id: "2",
//           description: "Ler",
//           isCompleted: true,
//         },
//       ],
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevState);
//     console.log("component wasd update!");
//   }

//   handleStateChange() {
//     this.setState({
//       tasks: [],
//     });
//   }

//   render() {
//     return (
//       <>
//         {this.state.tasks.map((task) => (
//           <TaskItem key={task.id} task={task} />
//         ))}
//         <button onClick={this.handleStateChange}>Limpar tarefas</button>
//       </>
//     );
//   }
// }

// export default App;

import { useState, useEffect } from "react";
import axios from "axios";

import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Estudar Programação",
      isCompleted: false,
    },
    {
      id: "2",
      description: "Ler",
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
  });

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;
