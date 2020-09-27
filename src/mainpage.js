import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class mainpage extends Component {
    render(){
        return(
            <div>
                mainpage
                <Link to="/test">to test</Link>
                <Link to="/haha"><Button>to haha</Button></Link>
            </div>
        )

    }
}

