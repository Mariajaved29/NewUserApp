import './App.css';
import React from 'react';
import {Register} from "./Features/Signup/Index";
import { Login } from './Features/Login/Index';
import {Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import { Navbar,Nav } from 'react-bootstrap';


function App() {
  return (
      <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    </Nav>
                                    </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/"
                                component={Register}/>
                                <Route exact path="/login"
                                component={Login}/>
                                </Switch>
                        </Router>
                    </div>
                </div>
        )  
}

export default App;
