import React from "react";
import styles from "./Field.module.css";

class Field extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.name} className={styles.label}>
          {this.props.labelText}
          <input
            className={styles.input}
            type={this.props.type}
            placeholder={this.props.placeholder}
            id={this.props.id}
            name={this.props.name}
            onChange={this.props.handleChange}
            value={this.props.value}
          />
        </label>
      </>
    );
  }
}

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
