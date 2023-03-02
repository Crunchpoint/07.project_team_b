import React from 'react'

import styles from "@/styles/info/CharInfo.module.scss";

const logo = () => {
  return (
    <div className={styles.wrap_logo}>
        <button onClick={()=> {
        // window.location.href = '/'
        window.location.href = '/main/ghibli'
        }}>Ghibli</button>
    </div>
  )
}

export default logo