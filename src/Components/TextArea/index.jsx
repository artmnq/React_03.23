import React from "react";
import styles from "./TextArea.module.css";

class TextArea extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.name} className={styles.label}>
          {this.props.labelText}
          <textarea
            className={styles.textArea}
            placeholder={this.props.placeholder}
            id={this.props.id}
            onChange={this.props.handleChange}
            rows="7"
            value={this.props.value}
            name={this.props.name}
          ></textarea>
        </label>
      </>
    );
  }
}

export const textAreaData = [
  {
    name: "aboutMyself",
    textAreaId: "aboutMyself",
    labelText: "О себе",
    placeholder: "О себе",
    id: "1",
  },
  {
    name: "technologies",
    textAreaId: "technologies",
    labelText: "Стек технологий",
    placeholder: "Стек технологий",
    id: "2",
  },
  {
    name: "projectDescription",
    textAreaId: "projectDescription",
    labelText: "Описание последнего проекта",
    placeholder: "Описание последнего проекта",
    id: "3",
  },
];

export default TextArea;
