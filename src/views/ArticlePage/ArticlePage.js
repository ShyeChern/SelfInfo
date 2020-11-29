import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatListBulleted from '@material-ui/icons/FormatListBulleted';
import Build from "@material-ui/icons/Build";
import MenuBook from '@material-ui/icons/MenuBook';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
// template style and own defined style (css is used, not detect by system)
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import css from "assets/css/style.css";
// Sections for this page
import ArticleSections from "./Sections/ArticleSections";

const useStyles = makeStyles(styles);

export default function PostPage(props) {
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
              <h1 className={classes.title} style={{ color: "#FFFFFF", marginTop: 0 }}>Article</h1>
              <h4 style={{ fontStyle: "italic" }}>Record of problems that I met and what I learn</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <div className={classes.profile}>
              <h3 className={classes.title}>Article</h3>
            </div>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} >
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "All",
                      tabIcon: FormatListBulleted,
                      tabContent: (
                        <ArticleSections tab="all" />
                      )
                    },
                    {
                      tabName: "Theory",
                      tabIcon: MenuBook,
                      tabContent: (
                        <ArticleSections tab="theory" />
                      )
                    },
                    {
                      tabName: "Technical",
                      tabIcon: Build,
                      tabContent: (
                        <ArticleSections tab="technical" />
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
