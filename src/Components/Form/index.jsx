import React from "react";

import Field from "../Field";
import TextArea from "../TextArea";
import Button from "../Button";
import Title from "../Title";

import { textAreaData } from "../TextArea";
import { fieldData } from "../Field";
import { formatPhoneNumber, MAX_CHARS, CharacterCount } from "../../Utils";

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

    this.state = { ...initialState, errors: {}, formSubmitted: false };

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
      this.setState({ formSubmitted: true });
    }
  }

  render() {
    const { formSubmitted } = this.state;

    if (formSubmitted) {
      return (
        <div className={styles.profileDiv}>
          <h3 className={styles.title}>
            {this.state.name} {this.state.surname}
          </h3>
          <div className={styles.info}>
            <div className={styles.field}>
              <span>Дата рождения:</span>
              <span>{this.state.birthDate}</span>
            </div>
            <div className={styles.field}>
              <span>Номер телефона:</span>
              <span>{this.state.number}</span>
            </div>
            <div className={styles.field}>
              <span>Веб-сайт:</span>
              <span>{this.state.webSite}</span>
            </div>
            <div className={styles.field}>
              <span>О себе:</span>
              <span>{this.state.aboutMe}</span>
            </div>
            <div className={styles.field}>
              <span>Стек технологий:</span>
              <span>{this.state.techStack}</span>
            </div>
            <div className={styles.field}>
              <span>О проекте:</span>
              <span>{this.state.aboutProject}</span>
            </div>
            <Button name="Вернуться" onClick={() => window.location.reload()} />
          </div>
        </div>
      );
    }
    return (
      <>
        <Title />
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
