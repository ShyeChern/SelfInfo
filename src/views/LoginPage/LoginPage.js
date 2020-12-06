import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// bootstrap form
import Form from 'react-bootstrap/Form';
// style
import styles from "assets/jss/material-kit-react/views/loginPage.js";
//background image
import backgroundImage from "assets/img/articleBackground.jpg";
// base url
import { baseUrl, secret } from "util/constant.js";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();

  const login = async () => {
    // alert(`${username} ${password}`);
    // alert(`${'Basic ' + secret}`);
    console.log(document.cookie);
    fetch(baseUrl, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Basic ' + secret,
        timestamp: new Date().getTime(),
        // 'Access-Control-Allow-Credentials': true
      }, 
      credentials: 'include',
      // body: JSON.stringify(""),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.statusText);
      }
    })
      .then((resBody) => {
        alert(resBody);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login</h4>
                </CardHeader>
                <CardBody style={{ alignItem: 'center' }}>
                  <Form onSubmit={(e) => { e.preventDefault(); login(); }} >
                    <Form.Group controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group style={{ textAlign: 'center' }}>
                      <Button color="primary" type="submit">Login</Button>
                    </Form.Group>
                  </Form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
