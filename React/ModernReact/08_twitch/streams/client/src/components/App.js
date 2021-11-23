import React from 'react';
import { BrowserRouter, Route , Link } from 'react-router-dom';

const PageOne = () => {
    return <div> page one
        <Link to="/page/2">Navigate to page 2</Link>
    </div>
}
//navigate via a tag is not preferable
//<a href="/">Navigate to page 1</a>
//-> because: all data is gone
//=> solution: use Link to prevent reloading

const PageTwo = () => {
    return (
        <div> Page Two
            <Link to="/">Navigate to page 1</Link>
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

//BrowserROuter: Uses everything after  TLD or Port
//HashRouter: uses everything after a # as the path
//MemoryRouter: dont use URL to track navigation

export default App