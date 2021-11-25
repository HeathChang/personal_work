import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';

// const PageOne = () => {
//     return <div> page one
//         <Link to="/page/2">Navigate to page 2</Link>
//     </div>
// }
//navigate via a tag is not preferable
//<a href="/">Navigate to page 1</a>
//-> because: all data is gone
//=> solution: use Link to prevent reloading


const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />

                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit" component={StreamEdit} />
                    <Route path="/streams/delete" component={StreamDelete} />
                    <Route path="/streams/show" component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

//BrowserROuter: Uses everything after  TLD or Port
//HashRouter: uses everything after a # as the path
//MemoryRouter: dont use URL to track navigation

export default App