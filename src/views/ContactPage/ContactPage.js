import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// template style
import styles from "assets/jss/material-kit-react/views/profilePage.js";
// Sections for this page
import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
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
                            <h1 className={classes.title} style={{ color: "#FFFFFF", marginTop: 0 }}>Contact</h1>
                            <h4 style={{ fontStyle: "italic" }}>Ways to contact me</h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <WorkSection />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
