import React, {useCallback, useState} from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('APP RUNNING');

    // const toggleParagraphHandler = useCallback() => {
    //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    // };


    // =>  JavaScript closes over the constant and basically stores that constant for that function definition.
    const toggleParagraphHandler = useCallback(() => {
        // console.log(allowToggle) => allows be false without dependency, because JS closes the constant in the beginning
        if(allowToggle) setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }, [allowToggle]);

    const allowToggleHandler = useCallback(() => {
        setAllowToggle(!allowToggle)
    }, [])


    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph}/>
            <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
