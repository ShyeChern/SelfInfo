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
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";

// Sections for this page
import WebSection from "./Sections/WebSection.js";
import MobileSection from "./Sections/MobileSection.js";

const useStyles = makeStyles(styles);
const useModalStyles = makeStyles(modalStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";

export default function ProfilePage(props) {
  const classes = useStyles();

  //modal to be change
  const modalClasses = useModalStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  // github link

  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
            <Button
              color="primary"
              block
              onClick={() => setClassicModal(true)}
            >
              Open
                </Button>
            <Dialog
              classes={{
                root: modalClasses.center,
                paper: modalClasses.modal
              }}
              open={classicModal}
              TransitionComponent={Transition}
              keepMounted
              onClose={() => setClassicModal(false)}
              aria-labelledby="classic-modal-slide-title"
              aria-describedby="classic-modal-slide-description"
              fullWidth={true}
              maxWidth={"md"}
            >
              <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={modalClasses.modalHeader}
              >
                <IconButton
                  className={modalClasses.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={() => setClassicModal(false)}
                >
                  <Close className={modalClasses.modalClose} />
                </IconButton>
                <h4 className={modalClasses.modalTitle}>Modal title</h4>
              </DialogTitle>
              <DialogContent
                id="classic-modal-slide-description"
                className={modalClasses.modalBody}
                style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 5 }}
              >
                <Container fluid="sm">
                  <Carousel interval={null} style={{ paddingTop: 20 }}>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Container>
              </DialogContent>
            </Dialog>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>

                {/* fyp gomed */}
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Web",
                      tabIcon: Language,
                      tabContent: (
                        <WebSection />
                      )
                    },
                    {
                      tabButton: "Mobile",
                      tabIcon: Smartphone,
                      tabContent: (
                        <MobileSection />
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
