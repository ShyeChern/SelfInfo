import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

const mobileStyle = {
    container: {
        textAlign: "center"
    },
};


export default function MobileSection() {
    const classes = useStyles();
    return (
        <div className={mobileStyle.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} style={{backgroundColor:"blue"}}>
                   <p>mobilemobilemobilemobilemobilemobilemobilemobilemobile
                   mobilemobilemobilemobilemobilemobilemobilemobilemobile
                   mobilemobilemobilemobilemobilemobilemobilemobilemobile
                   mobilemobilemobilemobilemobilemobilemobilemobilemobile
                   mobilemobilemobilemobilemobilemobilemobilemobilemobile
                   mobilemobilemobilemobilemobilemobilemobilemobilemobile
                   mobilemobilemobilemobilemobilemobilemobilemobilemobile
                   mobilemobilemobilemobilemobilemobilemobilemobilemobile
                   
                   </p>
                </GridItem>
            </GridContainer>
        </div>
    )
}

