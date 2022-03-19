//import from 3rd party
import React, { Fragment } from "react";

//import from src/files
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <h2>Let's get started!</h2>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
