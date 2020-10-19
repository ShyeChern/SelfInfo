import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Language from "@material-ui/icons/Language";
import Smartphone from "@material-ui/icons/Smartphone";
import GitHub from "@material-ui/icons/GitHub";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import css from "assets/css/style.css";

import Slide from "@material-ui/core/Slide";

// Sections for this page
import ProjectSection from "./Sections/ProjectSection.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";

export default function ProfilePage(props) {
  const classes = useStyles();

  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        brand="Shye Chern"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} >
        <div className={classes.container} style={{ zIndex: 12, color: "#FFFFFF" }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title} style={{ color: "#FFFFFF", marginTop: 0 }}>Project</h1>
              <h4 style={{ fontStyle: "italic" }}>Some of my past project</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10} className={classes.navWrapper} >
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Web",
                      tabIcon: Language,
                      tabContent: (
                        <ProjectSection platform="web" />
                      )
                    },
                    {
                      tabButton: "Mobile",
                      tabIcon: Smartphone,
                      tabContent: (
                        <ProjectSection platform="mobile" />
                      )
                    },

                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center", margin: 0, marginBottom: 20 }}>
                <GitHub /><a href="https://github.com/ShyeChern" target="_blank"> Click to view more project at my GitHub </a><GitHub />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
