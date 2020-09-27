import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class test extends Component {
    componentDidMount(){
        document.title = "test";
    }
    render() {
        return (

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <p>test page</p>
                <Link to="/haha"><Button>to haha</Button></Link>
                <Link to="/"><Button>back to main</Button></Link>
            </div>
        );
    }

}


