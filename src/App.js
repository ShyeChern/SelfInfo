import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from "./mainpage";
import Test from "./test";
import Haha from "./test/haha";



export default class mainpage extends Component {
  render() {
    return (
      <div>
        <Router>

          <Switch>
            {/* <Route path="/test" ><Test/></Route>
            <Route path="/"><MainPage/></Route>
            <Route path="/haha"><Haha/></Route> */}
            
            
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/test" component={Test}></Route>
            <Route exact path="/haha" component={Haha}></Route>
          </Switch>

        </Router>
      </div>
    )

  }
}

