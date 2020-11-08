import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const TheoryData = [
];

const TechnicalData = [
    {
        title: "React Hooks",
        cover: require('assets/img/article/technical/react-hooks.jpg'),
        date: "1 Nov 2020",
        link: "react-hooks"
    },
    {
        title: "Javascript DateTime Format",
        cover: require('assets/img/article/technical/react-hooks.jpg'),
        date: "8 Nov 2020",
        link: "javascript-date-time-format"
    },
];

const Article = ({ data }) => {
    return (
        <div>
            <Link to={"/article/" + data.link} style={{ textDecoration: "none", color: 'inherit', textAlign: 'center' }}>
                <div className={"imageContainer"}
                    onClick={() => {
                    }} >
                    <img src={data.cover} className="img-fluid" alt={data.title + "_cover_image"} style={{ height: 200 }} />
                    <div className={"imageDescriptionLayer"}>
                        <div className={"imageDescription"}>
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
                            <GridItem xs={12} sm={12} md={4} style={{ paddingBottom: 30 }} key={index}>
                                <Article data={value} />
                            </GridItem>
                        )
                    })
                }
            </GridContainer>
        </div>
    )
}

