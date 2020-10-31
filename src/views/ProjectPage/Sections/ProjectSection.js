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

const webStyle = {
    carouselItem: {
        margin: "auto"
    }
};

const mobileStyle = {
    carouselItem: {
        margin: "auto",
        height: 400
    }
}

const WebData = [
    {
        title: "goMed",
        description: "A medical consultation website. User can check the disease information and consult with doctor through live chat.",
        cover: require('assets/img/project/web/gomed/gomed_cover.jpg'),
        language: "HTML/CSS/Javascript/PHP",
        image: [
            require('assets/img/project/web/gomed/gomed_1.png'),
            require('assets/img/project/web/gomed/gomed_2.png'),
            require('assets/img/project/web/gomed/gomed_3.png'),
            require('assets/img/project/web/gomed/gomed_4.png'),
            require('assets/img/project/web/gomed/gomed_5.png')
        ]
    },
];

const MobileData = [
    {
        title: "Jomedic",
        description: "A medical consultation application. User can make appointment to consult with doctor via video call or live chat.",
        cover: require('assets/img/project/mobile/jomedic/jomedic_cover.jpg'),
        language: "React Native/Node.js",
        image: [
            require('assets/img/project/mobile/jomedic/jomedic_1.jpeg'),
            require('assets/img/project/mobile/jomedic/jomedic_2.jpeg'),
            require('assets/img/project/mobile/jomedic/jomedic_3.jpeg'),
            require('assets/img/project/mobile/jomedic/jomedic_4.jpeg'),
            require('assets/img/project/mobile/jomedic/jomedic_5.jpeg'),
            require('assets/img/project/mobile/jomedic/jomedic_6.jpeg'),
            require('assets/img/project/mobile/jomedic/jomedic_7.jpeg'),
            require('assets/img/project/mobile/jomedic/jomedic_8.jpeg'),
            require('assets/img/project/mobile/jomedic/jomedic_9.jpeg'),
        ]
    },
];

export default function ProjectSection({ platform }) {
    const modalClasses = useModalStyles();
    const [showModal, setShowModal] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [language, setLanguage] = React.useState("");
    const [image, setImage] = React.useState([]);

    const Project = ({ data }) => {
        return (
            <div>
                <div class={"imageContainer"}
                    onClick={() => {
                        setTitle(data.title);
                        setDescription(data.description);
                        setImage(data.image);
                        setLanguage(data.language);
                        setShowModal(true);
                    }} >
                    <img src={data.cover} class="img-fluid" alt={data.title + "_cover_image"} style={{ height: 200 }} />
                    <div class={"imageDescriptionLayer"}>
                        <div class={"imageDescription"}>
                            <b>Develop using</b><br />
                            <i style={{ fontSize: 20 }}>{data.language}</i>
                        </div>

                    </div>
                </div>
                <h5>{data.title}</h5>
            </div>
        )
    }

    // display modal when clicked
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
                    <p><b>Description:</b> {description}</p>
                    <p><b>Language used:</b> {language}</p>
                    <Container fluid="sm" style={{ paddingLeft: 0, paddingRight: 0 }}>
                        <Carousel interval={null}>
                            {
                                image.map((value, index) => {
                                    return (
                                        <Carousel.Item style={{ backgroundColor: "#F5F5F5" }}>
                                            <img
                                                className={platform === 'web' ? "d-block w-100" : "d-block w-40"}
                                                src={value}
                                                alt={value}
                                                key={index}
                                                style={platform === 'web' ? webStyle.carouselItem : mobileStyle.carouselItem}
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
        <div>
            <GridContainer justify="center">
                {
                    (platform === 'web' ? WebData : MobileData).map((value, index) => {
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

