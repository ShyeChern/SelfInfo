import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// template style
import styles from "assets/jss/material-kit-react/views/landingPage.js";
// Sections for this page
import ArticleSection from "./Sections/ArticleSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Shye Chern"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Hello, I'm Shye Chern</h1>
              <h4 style={{ fontStyle: "italic" }}>
                A software developer. Click the button below to know more about me...
              </h4>
              <br />
              <Link to="/profile" style={{ textDecoration: "none", color: 'inherit' }}>
                <Button
                  color="danger"
                  size="lg"
                  // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                  // target="_blank"
                  rel="noopener noreferrer"
                  style={{ justifyContent: "none" }}
                >
                  View My Profile&nbsp;<i className="fas fa-angle-right" />
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ArticleSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
