import React from "react";
import styles from "@/ui/dashboard/products/addProduct/addProduct.module.css";
const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a category</option>
          <option value="kitchen">kitchen</option>
          <option value="phone">phone</option>
          <option value="computer">computer</option>
          <option value="fashion">Fashion</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="size" name="size" />
        <input type="text" placeholder="color" name="color" />
        <textarea
          name="desc"
          id="desc"
          rows={18}
          placeholder="Description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
