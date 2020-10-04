import React, { Component, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, useLocation } from "react-router-dom";

import dotenv from 'dotenv'
dotenv.config();

export default function Contact() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // useEffect(() => {
    //     console.log("Will run only on every render");
    //     document.title = "Shye Chern";
    // });

    useEffect(() => {
        document.title = "Shye Chern";
        console.log("Will run only on first render");
    }, []);

    useEffect(() => {
        console.log("Will run only everytime x changes");
    }, [count, count1]);

    useEffect(() => {
        // some task like calling service
        // to avoid Can't perform a React state update on an unmounted component. 
        // This is a no-op, but it indicates a memory leak in your application
        console.log("Will run on every render");

        return () => {
            // console.log("I do cleanups");
            // console.log("will first run on component mount then, will run before useeffect and lastly before unmounting");
        };
    });

    const sendEmail = () => {
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userId = process.env.REACT_APP_EMAILJS_USER_ID;
        const subject = "Email from Heroku Sample App";

        window.emailjs.send(
            serviceId, templateId,
            { senderName: name, subject: subject, message: message, senderEmail: email }
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    return (
        <div>
            mainpagesdf<br />
            <Link to="/test">to test</Link>
            <Link to="/haha"><Button>to haha</Button></Link>
            <p>You clicked count {count} times</p>
            <button onClick={() => setCount(count + 1)}>Count</button>
            <p>You clicked count1 {count1} times</p>
            <button onClick={() => setCount1(count1 + 1)}>Count1</button>

            <form className="test-mailing">
                <h1>Let's see if it works</h1>
                <div>
                    <textarea
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        value={name}
                        style={{ width: '100%', height: '150px' }}
                    />
                    <textarea
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        value={email}
                        style={{ width: '100%', height: '150px' }}
                    />
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        required
                        value={message}
                        style={{ width: '100%', height: '150px' }}
                    />
                </div>
                <input type="button" value="Submit" className="btn btn--submit" onClick={sendEmail} />
            </form>
            <p>you will receive auto generate email Check if it is at junk </p>
        </div>
    )

}

