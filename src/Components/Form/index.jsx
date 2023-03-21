import React, { useState } from "react";

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

const Form = () => {
  const [formState, setFormState] = useState({
    ...initialState,
    errors: {},
    formSubmitted: false,
  });

  const validateForm = () => {
    const errors = {};

    fieldData.forEach((input) => {
      const { name, labelText } = input;
      switch (name) {
        case "name":
        case "surname": {
          if (!formState[name]) {
            errors[
              name
            ] = `${labelText} не может быть пустой строкой. Заполните пожалуйста`;
            break;
          }

          const firstChar = formState[name][0];
          const pattern = /^[a-zA-Zа-яА-Я]+$/;
          if (firstChar !== firstChar.toUpperCase()) {
            errors[name] = `Первая буква должна быть заглавной`;
            break;
          }

          if (!pattern.test(formState[name])) {
            errors[name] = `В ${labelText} можно вводить только буквы`;
            break;
          }

          break;
        }
        case "webSite": {
          if (!/^https?:\/\//i.test(formState[name])) {
            errors[name] =
              "Введите корректный URL-адрес сайта, начинающийся с http:// или https://";
            break;
          }

          break;
        }
        case "number": {
          if (formState[name].length !== 12) {
            errors[name] = "Введите корректный номер телефона";
            break;
          }

          break;
        }
        case "birthDate": {
          if (new Date(formState[name]) > new Date()) {
            errors[name] = "Введите корректную дату рождения";
            break;
          }

          break;
        }
        default:
          break;
      }
    });

    textAreaData.forEach((el) => {
      const { name, labelText } = el;
      if (!formState[name]) {
        errors[
          name
        ] = `${labelText} не может быть пустой строкой. Заполните пожалуйста`;
      }
    });

    setFormState({ ...formState, errors });
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const value =
      e.target.name === "number"
        ? formatPhoneNumber(e.target.value)
        : e.target.value.replace(/^\s+/g, "");
    const name = e.target.name;
    setFormState({ ...formState, [name]: value });
  };

  const handleReset = () => {
    setFormState({ ...initialState, errors: {} });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formState);
      setFormState({ ...formState, formSubmitted: true });
    }
  };

  const { formSubmitted } = formState;

  return formSubmitted ? (
    <div className={styles.profileDiv}>
      <h3 className={styles.title}>
        {formState.name} {formState.surname}
      </h3>
      <div className={styles.info}>
        <div className={styles.field}>
          <span>Дата рождения:</span>
          <span>{formState.birthDate}</span>
        </div>
        <div className={styles.field}>
          <span>Номер телефона:</span>
          <span>{formState.number}</span>
        </div>
        <div className={styles.field}>
          <span>Веб-сайт:</span>
          <span>{formState.webSite}</span>
        </div>
        <div className={styles.field}>
          <span>О себе:</span>
          <span>{formState.aboutMe}</span>
        </div>
        <div className={styles.field}>
          <span>Стек технологий:</span>
          <span>{formState.techStack}</span>
        </div>
        <div className={styles.field}>
          <span>О проекте:</span>
          <span>{formState.aboutProject}</span>
        </div>
        <Button name="Вернуться" onClick={() => window.location.reload()} />
      </div>
    </div>
  ) : (
    <>
      <Title />
      <form onSubmit={handleSubmitForm} className={styles.form} id="form">
        {fieldData.map((input) => {
          const { type, name, id, labelText, placeholder } = input;
          return (
            <div key={id}>
              <Field
                type={type}
                name={name}
                labelText={labelText}
                value={formState[name]}
                handleChange={handleChange}
                placeholder={placeholder}
              />
              {formState.errors[name] && (
                <div className={styles.error}>{formState.errors[name]}</div>
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
          const count = formState[name]?.length || 0;
          return (
            <div key={id}>
              <TextArea
                value={formState[name]}
                name={name}
                id={textareaId}
                labelText={labelText}
                rows={7}
                handleChange={handleChange}
                placeholder={placeholder}
              />
              {maxChars && <CharacterCount count={count} maxChars={maxChars} />}
              {formState.errors[name] && (
                <div className={styles.error}>{formState.errors[name]}</div>
              )}
            </div>
          );
        })}
        <div className={styles.buttons}>
          <Button name="Отмена" type="reset" onClick={handleReset} />
          <Button name="Сохранить" type="submit" onClick={handleSubmitForm} />
        </div>
      </form>
    </>
  );
};

export default Form;
