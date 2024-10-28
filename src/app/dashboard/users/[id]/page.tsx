import React from "react";
import styles from "@/ui/dashboard/users/singleuser/singleUser.module.css";
import Image from "next/image";

const SingleuserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Jhonny Depp
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Jhonney depp" />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="jhonney depp@gmail.com"
          />
          <label>Passwords</label>
          <input type="password" name="username" />
          <label>Phone</label>
          <input type="text" name="username" placeholder="9955886600" />
          <label>Address</label>
          <textarea name="address" placeholder="New Delhi"></textarea>
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleuserPage;
