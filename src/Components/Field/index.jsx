import React from "react";
import styles from "./Field.module.css";

class Field extends React.Component {
  render() {
    return (
      <>
        <label className={styles.label}>
          {this.props.name}
          <input
            className={styles.input}
            type={this.props.type}
            placeholder={this.props.name}
            id={this.props.id}
            onChange={this.props.onChange}
          />
        </label>
      </>
    );
  }
}

export default Field;
