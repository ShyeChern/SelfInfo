import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// template style
import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);

const barStyle = {
    container: {
        padding: "70px 0",
        textAlign: "center"
    },
    barBackground: {
        backgroundColor: "#F0F0F0",
        height: 30,
        marginBottom: 10,
    },
    barValue: {
        color: "#FFFFFF",
        marginRight: 5
    }
};

const skillData = [
    { name: "HTML, CSS, Bootstrap", value: 80 },
    { name: "React", value: 80 },
    { name: "PHP (Laravel & CodeIgniter)", value: 90 },
    { name: "Javascript", value: 95 },
    { name: "Java", value: 70 },
    { name: "React Native", value: 85 },
    { name: "SQL", value: 90 },
    { name: "Node.js", value: 85 },
    { name: "MongoDB", value: 80 },
    { name: "TypeScript", value: 60 },
    { name: "Native Android", value: 60 },
    { name: "Firebase", value: 70 },
    { name: "cPanel", value: 80 },
    { name: "Heroku", value: 80 },
];

const Bar = ({ name, value }) => {

    const bar = {
        backgroundColor: "#2F51FF",
        height: 30,
        width: value + "%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    }
    return (
        <GridItem xs={12} sm={12} md={5}>
            <h6>{name}</h6>
            <div style={barStyle.barBackground}>
                <div style={bar}>
                    <span style={barStyle.barValue}>{value}%</span>
                </div>
            </div>
        </GridItem>
    )
}

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div style={barStyle.container}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.profile}>
                        <h2 className={classes.title}>Skills</h2>
                    </div>
                </GridItem>
                {
                    skillData.map((value, index) => {
                        return (
                            <Bar name={value.name} value={value.value} key={index} />
                        )
                    })
                }
            </GridContainer>
        </div>
    )
}

