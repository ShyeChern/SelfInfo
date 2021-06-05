import React, { useEffect, useState } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import VerticalAlignTop from "@material-ui/icons/VerticalAlignTop";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
// css
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import article from "assets/css/article.module.css";
import image from "assets/img/articleBackground.jpg";
// component to show github gist
import Gist from "views/Reuse/Gist";
// function to get and check article order
import articleOrder from "util/articleOrder";

const useStyles = makeStyles(styles);

const style = {
  highlight: {
    borderRadius: 5,
    padding: 5,
  },
  leftArrow: {
    margin: 0,
    padding: 0,
    alignSelf: "center",
    textAlign: "right",
  },
  rightArrow: {
    margin: 0,
    padding: 0,
    alignSelf: "center",
    textAlign: "left",
  },
};

export default function SortMethodArticle(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [prevArticle, setPrevArticle] = useState("");
  const [nextArticle, setNextArticle] = useState("");

  useEffect(() => {
    let order = articleOrder(window.location.pathname);
    if (order.hasOwnProperty("prev")) {
      setPrevArticle(order.prev);
    }
    if (order.hasOwnProperty("next")) {
      setNextArticle(order.next);
    }
  }, [prevArticle, nextArticle]);

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Shye Chern"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <GridItem xs={2} sm={2} md={1} style={style.leftArrow}>
                          <Link
                            to={prevArticle}
                            className={classNames(article.link, {
                              [article.disableLink]: prevArticle === "",
                            })}
                            title="Previous Article"
                          >
                            <ChevronLeft fontSize="large" />
                          </Link>
                        </GridItem>
                        <GridItem xs={10} sm={10} md={11}>
                          <h2>Sort Method</h2>
                        </GridItem>
                        <GridItem xs={2} sm={2} md={1} style={style.rightArrow}>
                          <Link
                            to={nextArticle}
                            className={classNames(article.link, {
                              [article.disableLink]: nextArticle === "",
                            })}
                            title="Next Article"
                          >
                            <ChevronRight fontSize="large" />
                          </Link>
                        </GridItem>
                      </div>
                    </GridItem>
                  </GridContainer>
                </CardHeader>
                <CardBody>
                  <GridContainer
                    style={{ textAlign: "center" }}
                    justify="center"
                  >
                    <GridItem xs={12} sm={12} md={12}>
                      <p className={article.date}>Last update on 08 Feb 2020</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h3>Sort method</h3>
                      <p className={article.text}>
                        Sorting is frequently used when we developed the
                        project. Nowadays, sort method have been provided in
                        most of the programming language. But do we really
                        understand how it works? Although the efficiency of the
                        sort cannot perform better than <b>O(n log n)</b> but it
                        is considered as stable. At the below, I will show and
                        explain some of the concept of in javascipt.
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Concept</h3>
                      <p className={article.text} style={style.highlight}>
                        Sort data always comes in array. The sort function will
                        compare two data of the array from index to index, batch
                        by batch. If the first element is greater than second
                        element, it will return result &#62; 0 (normally use 1),
                        else it will return result &#60; 0 (normally use -1). If
                        it is same, it will return result = 0. After that, if
                        the return value is greater than 0, it will move the
                        first element to a higher index, which mean the second
                        element will show first and vice versa.{" "}
                        <b>
                          In short, it will compare the element two by two, the
                          greater value (&#62;0) will move backward, lower value
                          (&#60;0) move forward, same value (=0) remain
                          unchanged.
                        </b>
                        Let us see the example below for a better understanding.
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Sort Number</h3>
                      <p className={article.text} style={style.highlight}>
                        When we sort the number, we can simply use - to
                        substract the first element to second element to check
                        the value whether it is greater or lower as it will
                        return the desired result (&#62;0, &#60;0, =0).
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="cb3a20edaee3c9ac4f41e3cd7419bf09"
                            file="SortNumber.js"
                          />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Sort String</h3>
                      <p className={article.text} style={style.highlight}>
                        To compare the string case-insensitively, we have to
                        change the string to lowercase or uppercase. Since, the
                        value is not a number anymore, we cannot simply
                        substract and return the value. We have to compare the
                        string value and check if it is greater, lower or equal.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="cb3a20edaee3c9ac4f41e3cd7419bf09"
                            file="SortString.js"
                          />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Reusable Sort Function</h3>
                      <p className={article.text} style={style.highlight}>
                        Reusable sort function found at stackoverflow in
                        javascript. The sortBy function receive 2 required
                        parameters and 1 optional parameter. First, we have to
                        specify which field we need to sort, and follow by
                        ascending (false) or descending order (true). At last,
                        we can specify how we want to modify the value such as
                        parseFloat, toLowerCase.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="cb3a20edaee3c9ac4f41e3cd7419bf09"
                            file="ReusableSort.js"
                          />
                        </GridItem>
                      </center>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <GridContainer>
                    <VerticalAlignTop
                      className={article.toTopBtn}
                      fontSize="large"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    />
                    <GridItem xs={12} sm={12} md={12}>
                      <h6>Reference:</h6>
                      <ol>
                        <li>
                          https://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_sorts
                        </li>
                        <li>
                          https://www.javascripttutorial.net/javascript-array-sort/
                        </li>
                        <li>https://stackoverflow.com/a/979325/10068816</li>
                        <li>and some Stack Overflow...</li>
                      </ol>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={12}
                      style={{ textAlign: "center", marginTop: 20 }}
                    >
                      <Link
                        to="/article"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <Button color="danger" size="lg">
                          Back to article Page
                        </Button>
                      </Link>
                    </GridItem>
                  </GridContainer>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
