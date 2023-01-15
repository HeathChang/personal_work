import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

//const pathName = window.location.pathname;
// const pathComponents = () => {
//   if(pathName === '/accordion'||'/'){
//     return <Accordion items = {items}/>
//   } else if(pathName === '/dropdown') {
//     return <Dropdown />
//   } else if (pathName === '/search'){
//     return <Search />
//   } else if (pathName === '/translate'){
//     return <Translate/>
//   }
// }

const pathComponents = () => {

}

const App = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path="/"><Accordion items={items} /* This becomes children*/ /></Route>
      <Route path="/dropdown"><Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} /* This becomes children*/ /></Route>
      <Route path="/search"><Search  /* This becomes children*/ /></Route>
      <Route path="/translate"><Translate /* This becomes children*/ /></Route>

    </div>
  );
};
export default App;
