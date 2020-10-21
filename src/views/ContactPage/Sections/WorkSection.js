import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Facebook from "@material-ui/icons/Facebook";
import WhatsApp from "@material-ui/icons/WhatsApp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";


import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

import { sendEmail } from "util/sendEmail.js";


import dotenv from 'dotenv'
dotenv.config();

const useStyles = makeStyles(styles);

export default function WorkSection() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [sendEmailSuccess, setSendEmailSuccess] = useState(false);

    const sendMessage = () => {
        setErrorMessage("");
        //refine code
        if (name === "" || email === "" || message === "") {
            setSendEmailSuccess(false);
            setErrorMessage("Please fill in all the field")
        }
        else {
            sendEmail(name, email, message).then(res => {
                console.log(res);
                if (res === true) {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setSendEmailSuccess(true);
                }
                else {
                    setSendEmailSuccess(false);
                    setErrorMessage("Something error to the email function. Please use another method to contact me");
                }

            });

        }
    }

    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h4 className={classes.description}>You can contact me via...</h4>
                    <center>
                        <Button justIcon link size={"lg"}
                            href="http://m.me/shye.chern"
                            target="_blank"
                        >
                            <Facebook htmlColor={"#3b5998"}/>
                        </Button>
                        <Button justIcon link size={"lg"} disabled> / </Button>
                        <Button justIcon link size={"lg"}
                            href="https://wa.me/+60178243395?text=Hi,%20Shye%20Chern."
                            target="_blank">
                            <WhatsApp htmlColor={"#25D366"}/>
                        </Button>
                    </center>
                    <h4 className={classes.description}>or by filling up the email form here....</h4>
                    <br/>
                    <Form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} >
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                {
                                    errorMessage === '' ?
                                        null
                                        :
                                        <Alert variant={"danger"} style={{ textAlign: "center" }}>
                                            {errorMessage}
                                        </Alert>
                                }
                                {
                                    sendEmailSuccess ?
                                        <Alert variant={"success"} style={{ textAlign: "center" }}>
                                            <p>Email sent to me successfully. Will reply to you shortly</p>
                                        </Alert>
                                        :
                                        null
                                }
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                            </GridItem>

                            <GridItem xs={12} sm={12} md={6}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12}>
                                <Form.Group controlId="message">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} style={{ resize: "none" }} placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                                </Form.Group>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <Button color="danger" type="submit">Send Message</Button>
                            </GridItem>
                        </GridContainer>
                    </Form>
                </GridItem>
            </GridContainer>
        </div>
    );
}
