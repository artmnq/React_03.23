import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({
  name,
  labelText,
  placeholder,
  id,
  handleChange,
  value,
}) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {labelText}
        <textarea
          className={styles.textArea}
          placeholder={placeholder}
          id={id}
          onChange={handleChange}
          rows="7"
          value={value}
          name={name}
        ></textarea>
      </label>
    </>
  );
};

export const textAreaData = [
  {
    name: "aboutMe",
    textAreaId: "aboutMe",
    labelText: "О себе",
    placeholder: "О себе",
    id: "1",
  },
  {
    name: "techStack",
    textAreaId: "techStack",
    labelText: "Стек технологий",
    placeholder: "Стек технологий",
    id: "2",
  },
  {
    name: "aboutProject",
    textAreaId: "aboutProject",
    labelText: "Описание последнего проекта",
    placeholder: "Описание последнего проекта",
    id: "3",
  },
];

export default TextArea;
