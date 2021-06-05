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

export default function JavascriptArrayMethodArticle(props) {
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
                          <h2>Javascript Array Method</h2>
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
                      <p className={article.date}>
                        Last update on 11 April 2020
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h3>Javascript Array Method</h3>
                      <p className={article.text}>
                        There are a lot of useful array manipulating method in
                        javascript to get our desired output. Now, I will list
                        some of the array method which I think that is useful
                        and can be used in some situation.
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Array.filter()</h3>
                      <p className={article.text} style={style.highlight}>
                        Return an array of element that pass the given condition
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="1efcb96bcf8777c474f58450bfe7d36f"
                            file="Filter.js"
                          />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Array.sort()</h3>
                      <p className={article.text} style={style.highlight}>
                        Sort method can sort the element inside the array. More
                        about array sort method can be see in another article{" "}
                        <a href="/article/sort-method">here</a>.
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Array.reduce()</h3>
                      <p className={article.text} style={style.highlight}>
                        Reduce method apply a function or logic to array element
                        and result into a single output. The most common usage
                        of reduce method is adding all the array element or
                        concat string into one.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="1efcb96bcf8777c474f58450bfe7d36f"
                            file="Reduce.js"
                          />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Array.map()</h3>
                      <p className={article.text} style={style.highlight}>
                        Map method creates a new array with the function or
                        logic apply to array element.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="1efcb96bcf8777c474f58450bfe7d36f"
                            file="Map.js"
                          />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Array.includes(), Array.some(), Array.every()</h3>
                      <p className={article.text} style={style.highlight}>
                        For Includes method, it only works for primitive type
                        value and check whether the given value exist in the
                        array. Some and Every method check both primitive or
                        non-primitive value whether the element in array pass a
                        given condition. The difference is Some method return
                        true if at least one element pass the condition while
                        Every method return true if and only if all the element
                        pass the condition.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="1efcb96bcf8777c474f58450bfe7d36f"
                            file="Check.js"
                          />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Array.find(), Array.findIndex(), Array.IndexOf()</h3>
                      <p className={article.text} style={style.highlight}>
                        Find method return the first matching element and
                        undefined if nothing is matched. While FindIndex and
                        IndexOf method return the first matching element's index
                        of the given value. Return -1 if there is no matching
                        element. IndexOf only works in primitive type value
                        while FindIndex can use for both primitive type or
                        non-primitive type value (e.g. object)
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="1efcb96bcf8777c474f58450bfe7d36f"
                            file="Find.js"
                          />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>
                        Array.splice(start, [removeCount], [item1], [item2]....)
                      </h3>
                      <p className={article.text} style={style.highlight}>
                        Splice method is used to removing, replacing or adding
                        new element start from a specific index (start). If
                        removeCount parameter is ignore, all the element from
                        start to end will be removed. If removeCount is 0, there
                        will be no element removed, we can add new element into
                        the given index (start). Note that Splice method does
                        not return a new copy of array, it directs modify the
                        array instead.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="1efcb96bcf8777c474f58450bfe7d36f"
                            file="Splice.js"
                          />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Array.slice(start, [end])</h3>
                      <p className={article.text} style={style.highlight}>
                        Slice method return a new array by given the start to
                        end index. If end parameter is ignored, it will return
                        new array from start to the end of array. Note that end
                        index does not include in the returning array.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist
                            id="1efcb96bcf8777c474f58450bfe7d36f"
                            file="Slice.js"
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
                          https://morioh.com/p/3ba421a8a63d?f=5c21fb01c16e2556b555ab32
                        </li>
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
