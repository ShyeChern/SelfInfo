import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

const webStyle = {
    container: {
        textAlign: "center"
    },
};

export default function WebSection() {
    const classes = useStyles();
    return (
        <div className={webStyle.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} style={{backgroundColor:"red"}}>
                    <p>webwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebweb
                    webwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebweb
                    webwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebweb
                    webwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebweb
                    webwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebweb
                    webwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebweb
                    webwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebwebweb
                    </p>
                </GridItem>
            </GridContainer>
        </div>
    )
}

