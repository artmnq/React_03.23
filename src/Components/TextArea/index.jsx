import React from "react";
import styles from "./TextArea.module.css";

class TextArea extends React.Component {
  render() {
    return (
      <>
        <label htmlFor={this.props.name} className={styles.label}>
          {this.props.name}
          <textarea
            className={styles.textArea}
            placeholder={this.props.name}
            id={this.props.id}
            onChange={this.props.onChange}
            rows="7"
          ></textarea>
        </label>
      </>
    );
  }
}

export default TextArea;
