// import { NewspaperRounded } from "@mui/icons-material";
import { createContext, useReducer } from "react";
// import { category } from "../../utils/constant";

export const todoContext = createContext({
  todoList: {
    personal: [],
    workspace: [],
  },
  selectedCategory: "",
  projectId: null,
  task: [],
  // submitTask:()=>{},
  // cancleCreatingTask:()=>{},
  handleSelect: () => {},
  handleSubmit: () => {},
  handleDelete: () => {},
  handleCancle: () => {},
  handleCreate: () => {},
  handleSubTask: () => {},
  handleDeleteSubTask:()=>{},
});
function todoListReducer(state, action) {
  switch (action.type) {
    case "CREATE_LIST":
      return {
        ...state,
        projectId: undefined,
      };
      case "SUB_TASK": {
        const existingTask = state.task?.find(
          (task) => task.selectedProjectId === action.payload.id
        );
      
        const newSubTask = {
          task: action.payload.task.task, 
          id: action.payload.task.id
        };
      
        let updatedTask;
        if (existingTask) {
          updatedTask = state.task.map((task) => {
            if (task.selectedProjectId === action.payload.id) {
              return {
                ...task,
                list: [
                  ...task.list, // Append the new subtask
                  newSubTask,
                ],
              };
            }
            return task;
          });
      
          return {
            ...state,
            task: updatedTask,
          };
        } else {
          const newTask = {
            selectedProjectId: action.payload.id,
            category: action.payload.category,
            list: [newSubTask], // First subtask for this project
            taskId: Math.random(),
          };
      
          return {
            ...state,
            task: [newTask, ...(state.task || [])],
          };
        }
      }
      
    case "CANCLE_LIST":
      return {
        ...state,
        projectId: null,
      };
      case "DELETE_SUB_TASK": {
        const { projectId, subtaskId } = action.payload;
      
        // Find the project containing the subtask
        const updatedTasks = state.task.map((task) => {
          if (task.selectedProjectId === projectId) {
            return {
              ...task,
              list: task.list.filter((subtask) => subtask.id !== subtaskId), // Remove the subtask
            };
          }
          return task;
        });
      
        return {
          ...state,
          task: updatedTasks,
        };
      }
    case "SUBMIT_LIST": {
      const newProjectData = {
        ...action.payload.data,
        id: Math.random(),
      };
      // console.log(newProjectData);
      if (action.payload.data.Category === "workspace") {
        console.log(action.payload.data.Category);
        return {
          todoList: {
            ...state.todoList,
            workspace: [...state.todoList.workspace, newProjectData],
          },
          projectId: undefined,
        };
      }
      if (action.payload.data.Category === "personal") {
        // console.log(action.payload.data.Category);
        return {
          todoList: {
            ...state.todoList,
            personal: [...state.todoList.personal, newProjectData],
          },
          projectId: undefined,
        };
      }
      break;
    }
    case "SELECT_LIST":
      return {
        ...state,
        projectId: action.payload.id,
        selectedCategory: action.payload.category,
      };
    case "DELETE_LIST": {
      const { id, category } = action.payload;

      const updatedList = state.todoList[category].filter(
        (item) => item.id !== id
      );
      console.log(updatedList, category, id);
      if (category === "personal") {
        return {
          ...state,
          projectId: undefined,
          todoList: {
            ...state.todoList,
            personal: updatedList,
          },
        };
      }
      if (category === "workspace") {
        return {
          ...state,
          projectId: undefined,
          todoList: {
            ...state.todoList,
            workspace: updatedList,
          },
        };
      }
    }
  }

  return state;
}

function TodoContenxtProvider({ children }) {
  const [todoListReducerState, todoListStateDispatch] = useReducer(
    todoListReducer,
    {
      todoList: {
        personal: [],
        workspace: [],
      },
      selectedCategory: "",
      projectId: null,
      task: [],
    }
  );
  function handleDeleteSubTask(projectId, subtaskId) {
    todoListStateDispatch({
      type: "DELETE_SUB_TASK",
      payload: {
        projectId: projectId,
        subtaskId: subtaskId,
      },
    });
  }
  

  function handleSubTask(id, category, task) {
    todoListStateDispatch({
      type: "SUB_TASK",
      payload: {
        id: id,
        category: category,
        task: {
          task: task,
          id: Math.random(),
        },
      },
    });
  }

  function handleDelete(id, category) {
    todoListStateDispatch({
      type: "DELETE_LIST",
      payload: {
        id: id,
        category: category,
      },
    });
  }

  function handleSelect(id, category) {
    todoListStateDispatch({
      type: "SELECT_LIST",
      payload: {
        id: id,
        category: category,
      },
    });
  }

  function handleSubmit(event, formData) {
    event.preventDefault();
    todoListStateDispatch({
      type: "SUBMIT_LIST",
      payload: {
        data: formData,
      },
    });
    event.target.reset();
  }
  function handleCreate() {
    // event.target.reset();
    todoListStateDispatch({
      type: "CREATE_LIST",
    });
  }
  function handleCancle(event) {
    event.preventDefault();
    todoListStateDispatch({
      type: "CANCLE_LIST",
    });
  }

  // function handleUpdateCartItemQuantity(productId, amount) {

  //     shopingCartDispatch({
  //       type:"UPDATE_CART",
  //       payload:{
  //         productId:productId,
  //         amount:amount
  //       }
  //     })
  //     // setShoppingCart((prevShoppingCart) => {

  //     // });
  //   }

  const ctxValue = {
    todoList: {
      personal: todoListReducerState.todoList.personal,
      workspace: todoListReducerState.todoList.workspace,
    },
    projectId: todoListReducerState.projectId,
    selectedCategory: todoListReducerState.selectedCategory,
    task: todoListReducerState.task || [],
    handleSubmit: handleSubmit,
    handleCancle: handleCancle,
    handleCreate: handleCreate,
    handleSelect: handleSelect,
    handleDelete: handleDelete,
    handleSubTask: handleSubTask,
    handleDeleteSubTask:handleDeleteSubTask,
  };
  return (
    <todoContext.Provider value={ctxValue}>{children} </todoContext.Provider>
  );
}

export default TodoContenxtProvider;
