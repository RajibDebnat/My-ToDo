import SideBar from "./components/sidebar Components/SideBar";
import "./App.css";
import CreateTask from "./components/createTask page/CreateTask";
import NoTask from "./components/createTask page/NoTask";
// import { useState } from "react";

import { useContext } from "react";
import { todoContext } from "./components/createTask page/TodoContenxt";
import SelectedProject from "./components/createTask page/SelectedProject";
function App() {
  const { projectId } = useContext(todoContext);
  
  // const [createTask, setCreateTask] = useState(null);
  // const content =;
  // console.log(projectId);
  let content = <SelectedProject/>
  if(projectId ===null){ content = <NoTask/>

  }  else if(projectId === undefined) content = <CreateTask/>

  // console.log("Project ID:", projectId);

  return (

      <main>
        <div className="container">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="create-task">
            {/* <NoTask handleCreateTask={handleCreateTask}  setCreateTask={setCreateTask} /> */}
            {/* <CreateTask /> */}
            {/* { projectId === null ? <NoTask /> : <CreateTask />} */}
            {content}
          </div>
        </div>
      </main>
  
  );
}

export default App;
