// import React from 'react'
import styles  from "./input.module.css";

function HowImportentSection({ label, options }) {
  // console.log('no task')
  return (
    <div className= {styles.input_container} >
      <label className= {styles.label} htmlFor={label}>{label}</label>

      <select name={label} id={label} className= {styles.priority_options}>
        {
            options.map((value,index)=> <option className={styles.option}  key={value+index} value={value}>{value}</option>)
        }
       
        
      </select>
    </div>
  );
}

export default HowImportentSection;
