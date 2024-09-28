// Input.js
// import React from 'react';
import styles from './input.module.css';

function Input({ type, label, textArea }) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      {textArea ? (
        <textarea
          className={styles.textArea}
          id={label}
          placeholder={label}
        
        />
      ) : (
        <input
          className={styles.input}
          id={label}
          name={label}
          type={type}
          placeholder={label}
        />
      )}
    </div>
  );
}

export default Input;
