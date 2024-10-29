import React from "react";
import styles from "@/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleproductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Iphone 15" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$999" />
          <label>Stock</label>
          <input type="number" name="stock" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Crimson Red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="NA" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            rows="10"
            placeholder="Description for the product"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleproductPage;
