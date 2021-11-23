import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
    return <div> page one</div>
}

const PageTwo = () => {
    return (
        <div> page PageTwo
            <button>Click Me</button>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/page/2" exact component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App