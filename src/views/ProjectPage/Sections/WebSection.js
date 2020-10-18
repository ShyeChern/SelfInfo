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
    container: {
        textAlign: "center",
    },

};

const WebData = [
    {
        title: "goMed",
        description: "A medical consultation website",
        cover: require('assets/img/web/gomed/gomed_cover.png'),
        image: [
            require('assets/img/web/gomed/gomed_1.png'),
            require('assets/img/web/gomed/gomed_2.png'),
            require('assets/img/web/gomed/gomed_3.png'),
            require('assets/img/web/gomed/gomed_4.png'),
            require('assets/img/web/gomed/gomed_5.png')
        ]
    },
];

export default function WebSection() {
    const modalClasses = useModalStyles();
    const [showModal, setShowModal] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState([]);

    const Project = ({ data }) => {
        return (
            // set hover display some description do css and check hover in mobile
            // add description below image
            // add frontend backend
            // code available: yes no github link
            // live site? link
            <div>
                <div style={webStyle.imgContainer} class={"imageContainer"}
                    onClick={() => {
                        setTitle(data.title);
                        setDescription(data.description);
                        setImage(data.image);
                        setShowModal(true);
                    }} >
                    <img src={data.cover} class="img-fluid" alt={data.title + "_cover_image"} style={{ height: 200 }} />
                    <div class={"imageDescriptionLayer"}>
                        <div class={"imageDescription"}>John Doe<br/>sdf</div>
                    </div>
                </div>
                {data.title}
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
                                                className="d-block w-100"
                                                src={value}
                                                alt={value}
                                                key={index}
                                                style={{ margin: "auto" }}
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
        <div style={webStyle.container}>
            <GridContainer justify="center">
                {
                    WebData.map((value, index) => {
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

