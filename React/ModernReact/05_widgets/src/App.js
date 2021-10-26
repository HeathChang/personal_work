import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const pathName = window.location.pathname;
const pathComponents = () => {
  if(pathName === '/accordion'||'/'){
    return <Accordion items = {items}/>
  } else if(pathName === '/dropdown') {
    return <Dropdown />
  } else if (pathName === '/search'){
    return <Search />
  } else if (pathName === '/translate'){
    return <Translate/>
  }
}

const App = () => {
  return (
    <div>
      {pathComponents()}
    </div>
  );
};
export default App;
