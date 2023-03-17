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
