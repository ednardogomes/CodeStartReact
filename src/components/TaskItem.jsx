import { useEffect } from "react";

import { AiFillDelete } from "react-icons/ai";

import "./TaskItem.scss";

const TaskItem = ({ task }) => {
  useEffect(() => {}, []);
  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.isCompleted
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          {task.description}
          <input type="checkbox" defaultChecked={task.isCompleted} />
          <span
            className={task.isCompleted ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>
      <div className="delete">
        <AiFillDelete size={18} color="f97474" />
      </div>
    </div>
  );
};
export default TaskItem;

//Método abaixo é o método componentes de Classe
// import React from "react";
// class TaskItem extends React.Component {
//   componentDidMount() {
//     console.log("component was mounted");
//   }

//   componentWillUnmount() {
//     console.log("i will unmount!");
//   }
//   render() {
//     const { task } = this.props;
//     return (
//       <>
//         <h1>{task.description}</h1>
//         <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
//       </>
//     );
//   }
// }

// export default TaskItem;
