// import React from 'react'

import styles from './button.module.css';
function Button({handleFunction,children}) {
  return (
    <>

    <button className={styles.submit_btn} type={handleFunction?'button': 'submit'}   onClick={handleFunction || undefined }>{children}</button>
    </>
  )
}

export default Button