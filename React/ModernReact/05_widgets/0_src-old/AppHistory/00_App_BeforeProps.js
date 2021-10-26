//from npm
import React from "react";

//components
import Accordion from "./components/Accordion";
//import Accordion from "./components/Accordion";

const items = [
    {
        title: 'What is React',
        content: 'React is a front end JS framework'
    },
    {
        title: 'Why use React',
        content: 'React is a famous JS library among engs'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by making components'
    }
]

export default () => {
  return (
    <div>
      <Accordion />
    </div>
  );
};
