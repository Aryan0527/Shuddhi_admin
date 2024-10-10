import React from 'react'
import styles from './card.module.css'
import { MdSupervisedUserCircle } from "react-icons/md";

const card = () => {
  return (
    <div className={styles.container}>
        <MdSupervisedUserCircle size={24}/>
        <div className={styles.texts}>
          <span className={styles.title}>Total Users</span>
          <span className={styles.numbers}>10,555</span>
          <span className={styles.detail}>
            <span className={styles.positive}>12%</span>more than previous week
          </span>
        </div>
    </div>
  )
}

export default card