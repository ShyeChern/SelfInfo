import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class haha extends Component {
    componentDidMount(){
        document.title = "haha";
    }
    
    render(){
        return (
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <p>This is haha page</p>
                <Link to="/"><Button>back to main</Button></Link>
                <Link to="/test">to test</Link>
            </div>
        );
    }
    
}


