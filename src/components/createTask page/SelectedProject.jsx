  import { useContext } from "react";
  import { todoContext } from "./TodoContenxt";
  import styles from './selectedproject.module.css';
  import { useRef } from "react";
  import {DeleteOutlineIcon} from '../../utils/constant.js'
// import { borderRadius } from "@mui/system";
function SelectedProject() {
  const inputRef = useRef();
  const { projectId, todoList, selectedCategory, handleDelete, handleSubTask, task , handleDeleteSubTask } = useContext(todoContext);
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  const selectedProject = todoList[selectedCategory]?.find(list => list.id === projectId);

  if (!selectedProject) {
    return <p>No List is Selected</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.selectedTaskContainer}>
        <div>
          <h1>Welcome Rajib</h1>
          <p className={styles.date}>{formattedDate}</p>
        </div>
        <div onClick={() => handleDelete(selectedProject.id, selectedCategory)}>
          <DeleteOutlineIcon sx={{ fontSize: 30, cursor: 'pointer' }} />
        </div>

        <div className={styles.listDataContainer}>
          <h3>{selectedProject.Task}</h3>
          <ul className={styles.listContainer}>
            <li className={styles.list}><span className={styles.span}>Priority: </span> {selectedProject["priority-select"]}</li>
            <li className={styles.list}><span className={styles.span}>Category: </span> {selectedProject.Category}</li>
            <li className={styles.list}><span className={styles.span}>Time: </span> {selectedProject.Time}</li>
            <li className={styles.list}><span className={styles.span}>Date: </span> {selectedProject["Acomplish Date"]}</li>
          </ul>
          <div className={styles.inputContainer}>
            <input ref={inputRef} className={styles.taskInput} type="text" placeholder="Write task" />
            <button className={styles.subButton} onClick={() => handleSubTask(selectedProject.id, selectedCategory, inputRef.current.value)}>Add</button>
          </div>
        </div>
      </div>

      <div className={styles.subTaskConatainer}>
        <ul className={styles.subTasklistContainer}>
          {task
            .filter((list) => list.selectedProjectId === selectedProject.id) // Filter the correct project
            .flatMap((list) => list.list.map((subtask) => ( // Map over the subtasks
              <li key={subtask.id} className={styles.subList}>
                <input
                onChange={()=>handleDeleteSubTask(projectId,subtask.id)}
                  style={{ marginRight: 7, borderRadius: "21px", cursor: 'pointer' }}
                  type="checkbox"
                />
                {subtask.task}
              </li>
            )))
          }
        </ul>
      </div>
    </div>
  );
}
export default SelectedProject;