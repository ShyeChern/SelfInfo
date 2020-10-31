import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const TheoryData = [
    {
        title: "React Hooks",
        cover: require('assets/img/article/theory/react-hooks.jpg'),
        date: "31 Oct 2020",
        link: "react-hooks"
    },
];

const TechnicalData = [
    {
        title: "React Hooks",
        cover: require('assets/img/article/technical/react-hooks.jpg'),
        date: "31 Oct 2020",
        link: "react-hooks"
    },
];

const Article = ({ data }) => {
    return (
        <div>
            <Link to={"/article/" + data.link} style={{ textDecoration: "none", color: 'inherit', textAlign: 'center' }}>
                <div class={"imageContainer"}
                    onClick={() => {
                    }} >
                    <img src={data.cover} class="img-fluid" alt={data.title + "_cover_image"} style={{ height: 200 }} />
                    <div class={"imageDescriptionLayer"}>
                        <div class={"imageDescription"}>
                            <b>Written on</b><br />
                            <i style={{ fontSize: 20 }}>{data.date}</i>
                        </div>
                    </div>
                </div>
                <h5>{data.title}</h5>
            </Link>
        </div>
    )
}

export default function ArticleSection({ tab }) {

    let tabData;

    if (tab === 'all') {
        tabData = [...TheoryData, ...TechnicalData];
    } else if (tab === 'theory') {
        tabData = TheoryData;
    } else if (tab === 'technical') {
        tabData = TechnicalData;
    }

    return (
        <div>
            <GridContainer justify="center">
                {
                    tabData.map((value, index) => {
                        return (
                            <GridItem xs={12} sm={12} md={4} style={{ paddingBottom: 30 }}>
                                <Article data={value} key={index} />
                            </GridItem>
                        )
                    })
                }
            </GridContainer>
        </div>
    )
}

