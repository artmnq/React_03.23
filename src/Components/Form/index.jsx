import React from "react";

import Field from "../Field";
import TextArea from "../TextArea";
import Button from "../Button";

import { textAreaData } from "../TextArea";
import { fieldData } from "../Field";

import styles from "./Form.module.css";

const initialState = {
  name: "",
  surname: "",
  birthDate: "",
  number: "",
  webSite: "",
  aboutMe: "",
  techStack: "",
  aboutProject: "",
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  }
  reset() {
    this.setState({ ...initialState });
  }

  handleSubmitForm(event) {
    event.preventDefault();
    console.log(this.state);
    this.setState({ ...initialState });
  }

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmitForm}
          className={styles.form}
          id="form"
        >
          {fieldData.map((input) => {
            const { type, name, id, labelText, placeholder } = input;
            return (
              <Field
                type={type}
                key={id}
                name={name}
                labelText={labelText}
                value={this.state[name]}
                handleChange={this.handleChange}
                placeholder={placeholder}
              />
            );
          })}
          {textAreaData.map((el) => {
            const { name, id, textareaId, labelText, placeholder } = el;
            return (
              <TextArea
                key={id}
                value={this.state[name]}
                name={name}
                id={textareaId}
                labelText={labelText}
                rows={7}
                handleChange={this.handleChange}
                placeholder={placeholder}
              />
            );
          })}
          <div className={styles.buttons}>
            <Button name="Отмена" type="reset" onClick={this.reset} />
            <Button
              name="Сохранить"
              type="submit"
              onClick={this.handleSubmitForm}
            />
          </div>
        </form>
      </>
    );
  }
}

export default Form;
