import styles from "@/styles/intro/Hello.module.scss"
import React from 'react'

const Hello = () => {
  return (
    <div className={styles.hello}>
        <div className={styles.text}>Hello</div>
    </div>
  )
}

export default Hello