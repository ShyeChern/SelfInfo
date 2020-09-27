import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

// export default class mainpage extends Component {

export default function Mainpage() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);

    useEffect(() => {
        console.log("Will run only on every render");
    });

    useEffect(() => {
        console.log("Will run only on first render");
    }, []);

    useEffect(() => {
        console.log("Will run only everytime x changes");
    }, [count, count1]);

    useEffect(() => {
        // some task like calling service
        // to avoid Can't perform a React state update on an unmounted component. 
        // This is a no-op, but it indicates a memory leak in your application


        return () => {
            console.log("I do cleanups");
            console.log("will first run on component mount then, will run before useeffect and lastly before unmounting");
        };
    });

    return (
        <div>
            mainpagesdf<br />
            <Link to="/test">to test</Link>
            <Link to="/haha"><Button>to haha</Button></Link>
            <p>You clicked count {count} times</p>
            <button onClick={() => setCount(count + 1)}>Count</button>
            <p>You clicked count1 {count1} times</p>
            <button onClick={() => setCount1(count1 + 1)}>Count1</button>
        </div>
    )

}

