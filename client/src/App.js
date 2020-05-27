import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Home from './components/Home'
import Characters from './components/Characters'
import Signup from './components/Signup'
import User from './components/User'

function App() {
  return (
   
  <Router>
    <div className="App">
    <Nav/>
    <Switch>
      {/* <Route exact path="/signup" component={Signup}/>
      <Route exact path="/characters" component={Characters}/>
      <Route exact path="/user/:id" component={User}/> */}
      <Route exact path="/user/:id" component={User}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/characters" component={Characters}/>
      <Route path="/" component={Home}/>


          </Switch>
    </div>
  </Router>      
      
    
  );
}

export default App;
