//from npm
import React from "react";

//components
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'What is React',
        content: 'React is a front end JS framework'
    },
    {
        title: 'Why use React',
        content: 'React is a famous JS library among us'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by making components'
    }
]

export default () => {
  return (
    <div>
      <Search/>
    </div>
  );
};
