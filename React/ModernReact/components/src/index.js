import React from 'react'
import  ReactDOM  from 'react-dom'

//faker: to use fake data
import faker from 'faker'


const App = () => {
    return (
        <div className ="ui container comments"> 
            <div className = "comment">
                <a href="/" className="avatar">
                    <img alt = "avatar" src = {faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href ="/" className = "author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:00 PM
                        </span>
                    </div>
                        <div className ="text">
                            Nice blog post ! XD
                        </div>
                </div>
            </div>

            <div className = "comment">
                <a href="/" className="avatar">
                    <img alt = "avatar" src = {faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href ="/" className = "author">
                        Taylor
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:01 PM
                        </span>
                    </div>
                        <div className ="text">
                            lol
                        </div>
                </div>
            </div>

            <div className = "comment">
                <a href="/" className="avatar">
                    <img alt = "avatar" src = {faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href ="/" className = "author">
                        Andrew
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Today at 6:10 PM
                        </span>
                    </div>
                        <div className ="text">
                            Thx
                        </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#root')) 