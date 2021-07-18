import './App.css';
import React from 'react';
import {Register} from "./Features/Signup/Index";
import { Login } from './Features/Login/Index';
import {Route, Switch, Link, BrowserRouter as Router, } from 'react-router-dom';


function App() {
  return (
      <div>
           <Router>
                            
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <br />                 
                    <Switch>
                     <Route exact path="/"
                        component={Register}/>
                        <Route exact path="/login"
                           component={Login}/>
                    </Switch>
          </Router>
    </div>
              
        )  
}

export default App;
