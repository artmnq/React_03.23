import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, onClick, name }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
