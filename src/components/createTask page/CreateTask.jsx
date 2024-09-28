// import { styles } from "@mui/system";
import styles from "./createTask.module.css";
// import AddIcon from "@mui/icons-material/Add";
import Form from "./Form";

function CreateTask() {
const date = new Date();
const options ={
  weekday:'long',
  year: 'numeric',
  month:'long',
  day : 'numeric'
}
const formattedDate = new Intl.DateTimeFormat('en-US',options).format(date);
  return (
    <div className={styles.CreateTask_container}>
      <div className={styles.header_parent}>
        <h1 className={styles.user_name}>Hi Rajib Debnath</h1>
        <p className={styles.date}>It&#39;s {formattedDate}</p>
      </div>
      <Form/>
    </div>
  );
}

export default CreateTask;
