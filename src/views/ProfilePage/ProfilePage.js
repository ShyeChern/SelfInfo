import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// image
import profile from "assets/img/faces/shyechern.jpg";
// template style
import styles from "assets/jss/material-kit-react/views/profilePage.js";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import BarSection from "./Sections/BarSection.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

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
              <h1 className={classes.title} style={{ color: "#FFFFFF", marginTop: 0 }}>Profile</h1>
              <h4 style={{ fontStyle: "italic" }}>Details about myself</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="Profile" className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Lim Shye Chern</h3>
                    <h6>Age: {new Date().getFullYear() - 1997}</h6>
                    <h6>Gender: Male</h6>
                    <h6>Nationality: Malaysian</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>

            <div className={classes.description}>
              <p>
                Explore and learn in the new areas and work in as dynamic stable organization to enhance my
                knowledge about new and emerging trends in the IT sector as well as finding an opportunity to improve
                my skills along with the organization objective.
              </p>
            </div>
            
            <BarSection />
            <ProductSection />

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center", margin: 0, marginBottom: 20 }}>
                <Link to="/project" style={{ textDecoration: "none", color: 'inherit' }}>
                  <Button
                    color="danger"
                    size="lg"
                    // href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                    // target="_blank"
                    rel="noopener noreferrer"
                    style={{ justifyContent: "none" }}
                  >
                    View My Project Now&nbsp;<i className="fas fa-angle-right" />
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
