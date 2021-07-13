//main 자바스크립트 관리 (body 태그) →client 부분
import React, {Component} from 'react';
import './App.css';
import Member from './components/Member';

//import Navbar from './components/Navbar';
import routes from './routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';



class App extends Component {  
  render(){
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            {routes.map(route => {
              return (
                <Route 
                  key={route.path} 
                  path={route.path} 
                  exact
                >
                  <route.component />
                </Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
  }
} //end app

export default App;
