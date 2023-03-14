import React from "react";

import Field from "../Field";
import TextArea from "../TextArea";
import Button from "../Button";

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

    this.handleChangeNameInput = this.handleChangeNameInput.bind(this);
    this.handleChangeSurnameInput = this.handleChangeSurnameInput.bind(this);
    this.handleChangeBirthDateInput =
      this.handleChangeBirthDateInput.bind(this);
    this.handleChangeNumberInput = this.handleChangeNumberInput.bind(this);
    this.handleChangeWebSiteInput = this.handleChangeWebSiteInput.bind(this);
    this.handleChangeAboutMeInput = this.handleChangeAboutMeInput.bind(this);
    this.handleChangeTechStackInput =
      this.handleChangeTechStackInput.bind(this);
    this.handleChangeTechLastProjectInput =
      this.handleChangeTechLastProjectInput.bind(this);

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChangeNameInput(e) {
    this.setState({ name: e.target.value });
  }

  handleChangeSurnameInput(e) {
    this.setState({ surname: e.target.value });
  }

  handleChangeBirthDateInput(e) {
    this.setState({ birthDate: e.target.value });
  }

  handleChangeNumberInput(e) {
    this.setState({ number: e.target.value });
  }

  handleChangeWebSiteInput(e) {
    this.setState({ webSite: e.target.value });
  }

  handleChangeAboutMeInput(e) {
    this.setState({ aboutMe: e.target.value });
  }

  handleChangeTechStackInput(e) {
    this.setState({ techStack: e.target.value });
  }

  handleChangeTechLastProjectInput(e) {
    this.setState({ aboutProject: e.target.value });
  }

  handleSubmitForm(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmitForm}
          className={styles.form}
          id="form"
        >
          <Field
            name="Имя"
            type="text"
            value={this.state.name}
            onChange={this.handleChangeNameInput}
            id="name"
          />
          <Field
            name="Фамилия"
            type="text"
            value={this.state.surname}
            onChange={this.handleChangeSurnameInput}
            id="surname"
          />
          <Field
            name="Дата рождения"
            type="date"
            value={this.state.birthDate}
            onChange={this.handleChangeBirthDateInput}
            id="dateOfBirth"
          />
          <Field
            name="Номер телефона"
            type="tel"
            value={this.state.number}
            onChange={this.handleChangeNumberInput}
            id="number"
          />
          <Field
            name="Сайт"
            type="url"
            value={this.state.webSite}
            onChange={this.handleChangeWebSiteInput}
            id="website"
          />
          <TextArea
            name="О себе"
            value={this.state.aboutMe}
            onChange={this.handleChangeAboutMeInput}
            id="aboutMe"
          />
          <TextArea
            name="Стек технологий"
            value={this.state.techStack}
            onChange={this.handleChangeTechStackInput}
            id="stack"
          />
          <TextArea
            name="Описание последнего проекта"
            value={this.state.aboutProject}
            onChange={this.handleChangeTechLastProjectInput}
            id="lastProject"
          />
          <div className={styles.buttons}>
            <Button name="Отмена" type="reset" />
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
