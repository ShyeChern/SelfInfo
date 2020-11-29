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
import SqlVsNosql from "assets/img/article/theory/sql-vs-nosql.jpg";
import ReactHooks from "assets/img/article/technical/react-hooks.jpg";
import Git from "assets/img/article/technical/git.jpg";
import VanillaJavascript from "assets/img/article/technical/vanilla-javascript.png";

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
                  <img src={ReactHooks} alt="React Hooks" className={imageClasses} style={{ height: 120, width: 300 }} />
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
                <Link to="/article/git">
                  <img src={Git} alt="Git" className={imageClasses} style={{ height: 120, width: 300 }} />
                  <h5 className={classes.cardTitle}>
                    Git
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
                <Link to="/article/vanilla-javascript">
                  <img src={VanillaJavascript} alt="Vanilla Javascript" className={imageClasses} style={{ height: 120, width: 300 }} />
                  <h5 className={classes.cardTitle}>
                    Vanilla Javascript
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
                <Link to="/article/sql-vs-nosql">
                  <img src={SqlVsNosql} alt="SQL vs NoSQL" className={imageClasses} style={{ height: 120, width: 300 }} />
                  <h5 className={classes.cardTitle}>
                    SQL vs NoSQL
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
