import React from "react";
import Form from "./Components/Form";
import Title from "./Components/Title";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.general}>
      <Title />
      <Form />
    </div>
  );
}

export default App;
