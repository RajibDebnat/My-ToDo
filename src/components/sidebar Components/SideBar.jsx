import styles from "../css/sidebar.module.css";
import logo from "../../assets/R.png";
import Img from "./Img";
import { todoContext } from "../createTask page/TodoContenxt";
import { useContext } from "react";
function SideBar() {
  // console.log('side ')
  const {
    todoList: { personal, workspace },
    projectId,
    handleSelect,
    handleCreate,
  } = useContext(todoContext);

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <div className={styles.logo_parent}>
          <Img logo={logo} />
          <div>
            <p className={styles.website_name}>RD Plan</p>
            <p className={styles.builder_name}>Rajib Debnath</p>
          </div>
        </div>
        <div className={styles.category_parent}>
          <div className={styles.category}>
            <h3 className={styles.category_heading}>Private</h3>
            <div className={styles.list_container}>
              {personal.map((list) => {
                //  const listId = list.id === projectId;
                return (
                  <p
                  onClick={()=>handleSelect(list.id,list.Category || 'personal')}
                    key={list.id}
                    className={`${styles.list_text}  ${ projectId===list.id && styles.active_list}`}
                  >
                    {list.Task}
                  </p>
                );
              })}
            </div>
            <button className={styles.create_task_btn} onClick={handleCreate}>
              + Create New Task
            </button>
          </div>
          <div className=" className={styles.category}">
            <h3 className={styles.category_heading}>workspace</h3>
            <div className={styles.list_container}>
              {workspace.map((list) => {
                //  const listId = list.id === projectId;
            
                return (
                  <p
                  onClick={()=>handleSelect(list.id,list.Category|| 'workspace')}
                  key={list.id}
                  className={`${styles.list_text}  ${ projectId===list.id && styles.active_list}`}
                  >
                    {list.Task}
                  </p>
                );
              })}
            </div>
          </div>
          <button className={styles.create_category_btn}>
            + Create New Category
          </button>
        </div>
      </nav>
    </aside>
  );
}

export default SideBar;
