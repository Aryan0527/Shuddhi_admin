import React from "react";
import styles from "./menuLink.module.css";
// import Link from "next/link";

const MenuLink = ({item}) => {
  return (
    <div className={styles.container}>
      {item.icon}
      {item.title}
    </div>
  );
};

export default MenuLink;
