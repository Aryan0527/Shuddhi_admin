import React from 'react'
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>ShuddhiKala</div>
        <div className={styles.tet}>© All rights reserved.</div>
    </div>
  )
}

export default Footer