import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function UseEffectPost(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Shye Chern"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <h4>React Hooks</h4>
                    </GridItem>
                  </GridContainer>
                </CardHeader>
                <CardBody>
                  <GridContainer style={{ textAlign: 'center' }}>
                    <GridItem xs={12} sm={12} md={12}>
                      <p style={{ textAlign: 'right', margin: 0, padding: 0 }}>Last update on 31 Oct 2020</p>
                    </GridItem>
                    {/* classname divider to make divider */}
                    {/* <GridItem xs={12} sm={12} md={12}>
                      <h4 className={classes.divider}>What is React Hooks?</h4>
                    </GridItem> */}
                    <GridItem xs={12} sm={12} md={12}>
                      <h4>What is React Hooks?</h4>
                      <p style={{textAlign:"justify"}}>
                        werwerwerwerwerwerwerwerwerwerwerwerwerwerwerwerwerwerwerwer
                      </p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <h4>useState</h4>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                      <h6>reference:</h6>
                      <ol>
                        <li>https://www.sad</li>
                        <li>list item </li>
                        <li>list item </li>
                      </ol>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <Link to="/article" style={{ textDecoration: "none", color: 'inherit' }}>
                        <Button color="danger" size="lg">
                          Back to article Page
                       </Button>
                      </Link>
                    </GridItem>
                  </GridContainer>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
