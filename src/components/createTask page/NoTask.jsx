// import React from 'react'
import { AddIcon } from '../../utils/constant';
import styles from './notask.module.css';
import logo from '../../assets/R.png';
import Img from '../sidebar Components/Img';
import { useContext } from "react";
// import { todoContext } from "";
import { todoContext } from './TodoContenxt';
function NoTask() {
  const {handleCreate} = useContext(todoContext);
  return (
    // 
    <div className={styles.notask_main_container}  >
         {/*  */}
<div className={styles.notask_container}>
   <Img logo = {logo}/>
    <div className={styles.btn_parent}>
        <button className={styles.create_btn} onClick={handleCreate} >
        
        <span className={styles.add_icon}>
            <AddIcon sx={{ fontSize: 40 }} />
        </span>
        <span  className={styles.create_btn_text}>

            Create New
        </span>
        </button>
    </div>
</div>
    </div>
  )
}

export default NoTask