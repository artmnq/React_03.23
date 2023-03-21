import React from "react";
import styles from "./Field.module.css";

const Field = ({
  name,
  labelText,
  type,
  placeholder,
  id,
  handleChange,
  value,
}) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {labelText}
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
        />
      </label>
    </>
  );
};

export const fieldData = [
  {
    type: "text",
    name: "name",
    labelText: "Имя",
    id: "1",
    placeholder: "Имя",
  },
  {
    type: "text",
    name: "surname",
    labelText: "Фамилия",
    id: "2",
    placeholder: "Фамилия",
  },
  {
    type: "date",
    name: "birthDate",
    labelText: "Дата рождения",
    id: "3",
  },
  {
    type: "tel",
    name: "number",
    labelText: "Телефон",
    id: "4",
    placeholder: "Телефон",
  },

  {
    type: "url",
    name: "webSite",
    labelText: "Сайт",
    id: "5",
    placeholder: "Сайт",
  },
];

export default Field;
