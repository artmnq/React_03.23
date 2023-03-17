import React from "react";

import Field from "../Field";
import TextArea from "../TextArea";
import Button from "../Button";

import { textAreaData } from "../TextArea";
import { fieldData } from "../Field";
import formatPhoneNumber from "../../Utils";

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

const MAX_CHARS = 600;

function CharacterCount({ count, maxChars }) {
  if (count > maxChars) {
    return <div className={styles.error}>Превышен лимит символов в поле</div>;
  } else {
    const remainingChars = maxChars - count;
    return (
      <div className={styles.charCount}>
        Осталось {remainingChars}/{maxChars} символов
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState, errors: {} };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  validateForm() {
    const errors = {};
    fieldData.forEach((input) => {
      const { name, labelText } = input;
      if (!this.state[name]) {
        errors[
          name
        ] = `${labelText} не может быть пустой строкой. Заполните пожалуйста`;
      } else if (name === "name" || name === "surname") {
        const firstChar = this.state[name][0];
        const pattern = /^[a-zA-Zа-яА-Я]+$/;
        if (firstChar !== firstChar.toUpperCase()) {
          errors[name] = `Первая буква должна быть заглавной`;
        } else if (!pattern.test(this.state[name])) {
          errors[name] = `В ${labelText} можно вводить только буквы`;
        }
      } else if (
        name === "webSite" &&
        !/^https?:\/\//i.test(this.state[name])
      ) {
        errors[name] =
          "Введите корректный URL-адрес сайта, начинающийся с http:// или https://";
      } else if (name === "number" && this.state[name].length !== 12) {
        errors[name] = "Введите корректный номер телефона";
      } else if (
        name === "birthDate" &&
        new Date(this.state[name]) > new Date()
      ) {
        errors[name] = "Введите корректную дату рождения";
      }
    });
    textAreaData.forEach((el) => {
      const { name, labelText } = el;
      if (!this.state[name]) {
        errors[
          name
        ] = `${labelText} не может быть пустой строкой. Заполните пожалуйста`;
      }
    });
    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  handleChange(e) {
    const value =
      e.target.name === "number"
        ? formatPhoneNumber(e.target.value)
        : e.target.value.replace(/^\s+/g, "");
    const name = e.target.name;

    this.setState({ [name]: value });
  }

  handleReset() {
    this.setState({ ...initialState, errors: {} });
  }

  handleSubmitForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      console.log(this.state);
      this.setState({ ...initialState, errors: {} });
    }
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
              <div key={id}>
                <Field
                  type={type}
                  name={name}
                  labelText={labelText}
                  value={this.state[name]}
                  handleChange={this.handleChange}
                  placeholder={placeholder}
                />
                {this.state.errors[name] && (
                  <div className={styles.error}>{this.state.errors[name]}</div>
                )}
              </div>
            );
          })}
          {textAreaData.map((el) => {
            const { name, id, textareaId, labelText, placeholder } = el;
            const maxChars =
              name === "aboutMe" ||
              name === "techStack" ||
              name === "aboutProject"
                ? MAX_CHARS
                : null;
            const count = this.state[name]?.length || 0;
            return (
              <div key={id}>
                <TextArea
                  value={this.state[name]}
                  name={name}
                  id={textareaId}
                  labelText={labelText}
                  rows={7}
                  handleChange={this.handleChange}
                  placeholder={placeholder}
                />
                {maxChars && (
                  <CharacterCount count={count} maxChars={maxChars} />
                )}
                {this.state.errors[name] && (
                  <div className={styles.error}>{this.state.errors[name]}</div>
                )}
              </div>
            );
          })}
          <div className={styles.buttons}>
            <Button name="Отмена" type="reset" onClick={this.handleReset} />
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
