import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Close from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
// bootstrap component
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';

import modalStyle from "assets/jss/material-kit-react/modalStyle.js";

const useModalStyles = makeStyles(modalStyle);
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});
Transition.displayName = "Transition";

const mobileStyle = {
    container: {
        textAlign: "center"
    },
    imgContainer: {
        position: "relative",
    },
    text: {
        // color: "#FFFFFF",
        position: "absolute",
        top: "30%",
        left: "30 %",
        opacity: 0
    },
    middle: {
        position: "absolute",
        top: "30%",
        left: "30 %",
    }

};

const MobileData = [
    {
        title: "Jomedic",
        description: "A medical consultation app",
        cover: require('assets/img/mobile/jomedic/jomedic_cover.jpeg'),
        image: [
            require('assets/img/mobile/jomedic/jomedic_1.jpeg'),
            require('assets/img/mobile/jomedic/jomedic_2.jpeg'),
            require('assets/img/mobile/jomedic/jomedic_3.jpeg'),
            require('assets/img/mobile/jomedic/jomedic_4.jpeg'),
            require('assets/img/mobile/jomedic/jomedic_5.jpeg'),
            require('assets/img/mobile/jomedic/jomedic_6.jpeg'),
            require('assets/img/mobile/jomedic/jomedic_7.jpeg'),
            require('assets/img/mobile/jomedic/jomedic_8.jpeg'),
        ]
    },
];

export default function MobileSection() {
    const modalClasses = useModalStyles();
    const [showModal, setShowModal] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState([]);

    const showDescription = (e) => {
        e.target.style.opacity = 0.1;
        e.target.style.transition = ".2s ease";
    }

    const hideDesription = (e) => {
        e.target.style.opacity = 1;
    }

    const Project = ({ data }) => {
        return (
            <div style={mobileStyle.imgContainer} onMouseEnter={showDescription} onMouseLeave={hideDesription}
                onClick={() => {
                    setTitle(data.title);
                    setDescription(data.description);
                    setImage(data.image);
                    setShowModal(true);
                }} >
                <img src={data.cover} class="img-fluid" alt={data.title + "_cover_image"} style={{ height: 200 }} />
                {/* <div style={mobileStyle.middle}> */}
                <div style={mobileStyle.text} >John Doe</div>
                {/* </div> */}
            </div>
        )
    }

    const Modal = () => {
        return (
            <Dialog
                classes={{
                    root: modalClasses.center,
                    paper: modalClasses.modal
                }}
                open={showModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setShowModal(false)}
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
                        onClick={() => setShowModal(false)}
                    >
                        <Close className={modalClasses.modalClose} />
                    </IconButton>
                    <h4 className={modalClasses.modalTitle}>{title}</h4>
                </DialogTitle>
                <DialogContent
                    id="classic-modal-slide-description"
                    className={modalClasses.modalBody}
                >
                    <p>{description}</p>
                    <Container fluid="sm" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Carousel interval={null}>
                            {
                                image.map((value, index) => {
                                    return (
                                        <Carousel.Item style={{ backgroundColor: "#F5F5F5" }}>
                                            <img
                                                className="d-block w-40"
                                                src={value}
                                                alt={value}
                                                key={index}
                                                style={{ height: 400, margin: "auto" }}
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </Container>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <div style={mobileStyle.container}>
            <GridContainer justify="center">
                {
                    MobileData.map((value, index) => {
                        return (
                            <GridItem xs={12} sm={12} md={4} style={{ paddingBottom: 30 }}>
                                <Project data={value} key={index} />
                            </GridItem>
                        )
                    })
                }
            </GridContainer>
            {Modal()}
        </div>
    )
}

