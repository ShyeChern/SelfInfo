import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Facebook from "@material-ui/icons/Facebook";
import WhatsApp from "@material-ui/icons/WhatsApp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

import { sendEmail } from "util/sendEmail.js"

import dotenv from 'dotenv'
dotenv.config();

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    sendEmail(name, email, message).then(res => {
      console.log(res === true ? "Email successfully sent!" : res.text)
    });

  }
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          {/* <h2 className={classes.title}>Contact Me</h2> */}
          <h4 className={classes.description}>
            You can contact me via...
          </h4>
          <center>
            <Button justIcon link size={"lg"}
              href="http://m.me/shye.chern"
              target="_blank"
            >
              <Facebook />
            </Button>
            <Button justIcon link size={"lg"}
              href="https://www.facebook.com/shye.chern/"
              target="_blank"
            >
              <Facebook />
            </Button>
            <Button justIcon link size={"lg"} disabled>
              /
            </Button>
            <Button justIcon link size={"lg"}
            href="https://wa.me/+60178243395?text=Hi,%20Shye%20Chern."
              target="_blank">
              <WhatsApp />
            </Button>
          </center>
          <h4 className={classes.description}>
            or by filling up the email form here....
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: (e) => { setName(e.target.value) }
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: (e) => { setEmail(e.target.value) }
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  onChange: (e) => { setMessage(e.target.value) }
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" onClick={() => sendMessage()}>Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
