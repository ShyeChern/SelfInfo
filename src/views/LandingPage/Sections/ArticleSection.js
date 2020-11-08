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
      <h2 className={classes.title}>Some of my Article</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Link to="/article/react-hooks">
                  <img src={team3} alt="Landing Page" className={imageClasses} />
                  <h5 className={classes.cardTitle}>
                    React Hooks
                  <br />
                    <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>Click to view</small>
                  </h5>
                </Link>
              </GridItem>
            </Card>
            
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Link to="/article/useeffect">
                  <img src={team3} alt="Profile Page" className={imageClasses} />
                  <h5 className={classes.cardTitle}>
                    Http TLS Https
                  <br />
                    <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>Click to view</small>
                  </h5>
                </Link>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Link to="/article/javascript-date-time-format">
                  <img src={team3} alt="Project Page" className={imageClasses} />
                  <h5 className={classes.cardTitle}>
                    Javascript DateTime Format
                  <br />
                    <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>Click to view</small>
                  </h5>
                </Link>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <Link to="/article/useeffect">
                  <img src={team3} alt="Contact Page" className={imageClasses} />
                  <h5 className={classes.cardTitle}>
                    Cron Job
                  <br />
                    <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>Click to view</small>
                  </h5>
                </Link>
              </GridItem>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
              <Link to="/article">
                <h4 className={classes.cardTitle}>
                  <small className={classes.smallTitle} style={{ fontStyle: "italic" }}>view all my article &gt;&gt;&gt;</small>
                </h4>
              </Link>
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
