import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// template style
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import team3 from "assets/img/landing.jpg";

const useStyles = makeStyles(styles);


export default function PostSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Some of my Post</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Link to="/">
                  <img src={team3} alt="Landing Page" className={imageClasses} />
                  <h4 className={classes.cardTitle}>
                    Landing Page
                  <br />
                    <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>Click to view the page</small>
                  </h4>
                </Link>
              </GridItem>
            </Card>
            {/* see whether need underline or not and make card carousel? with background image width 100% */}
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Link to="/profile">
                  <img src={team3} alt="Profile Page" className={imageClasses} />
                  <h4 className={classes.cardTitle}>
                    Profile Page
                  <br />
                    <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>Click to view the page</small>
                  </h4>
                </Link>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Link to="/project">
                  <img src={team3} alt="Project Page" className={imageClasses} />
                  <h4 className={classes.cardTitle}>
                    Project Page
                  <br />
                    <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>Click to view the page</small>
                  </h4>
                </Link>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Link to="/contact">
                  <img src={team3} alt="Contact Page" className={imageClasses} />
                  <h4 className={classes.cardTitle}>
                    Contact Page
                  <br />
                    <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>Click to view the page</small>
                  </h4>
                </Link>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
              <Link to="/post">
                <h4 className={classes.cardTitle}>
                  <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>view all my post&gt;&gt;&gt;</small>
                </h4>
              </Link>
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
