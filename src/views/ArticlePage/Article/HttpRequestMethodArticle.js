import React, { useEffect, useState } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import VerticalAlignTop from '@material-ui/icons/VerticalAlignTop';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
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
// function to get and check article order
import articleOrder from "util/articleOrder";

const useStyles = makeStyles(styles);

const style = {
  highlight: {
    borderRadius: 5,
    padding: 5
  },
  leftArrow: {
    margin: 0,
    padding: 0,
    alignSelf: 'center',
    textAlign: 'right'
  },
  rightArrow: {
    margin: 0,
    padding: 0,
    alignSelf: 'center',
    textAlign: 'left'
  }
}

export default function HttpRequestMethodArticle(props) {
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
    if (order.hasOwnProperty('prev')) {
      setPrevArticle(order.prev);
    }
    if (order.hasOwnProperty('next')) {
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
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <GridItem xs={2} sm={2} md={1} style={style.leftArrow}>
                          <Link to={prevArticle} className={classNames(article.link, { [article.disableLink]: prevArticle === "" })} title='Previous Article' >
                            <ChevronLeft fontSize="large" />
                          </Link>
                        </GridItem>
                        <GridItem xs={10} sm={10} md={11} >
                          <h2>Http Request Method</h2>
                        </GridItem>
                        <GridItem xs={2} sm={2} md={1} style={style.rightArrow}>
                          <Link to={nextArticle} className={classNames(article.link, { [article.disableLink]: nextArticle === "" })} title='Next Article'>
                            <ChevronRight fontSize="large" />
                          </Link>
                        </GridItem>
                      </div>
                    </GridItem>
                  </GridContainer>
                </CardHeader>
                <CardBody>
                  <GridContainer style={{ textAlign: 'center' }} justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                      <p className={article.date}>Last update on 14 Nov 2020</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h3>Method other than GET &amp; POST?</h3>
                      <p className={article.text}>
                        Nowadays, I believe most of us are familiar with the GET and POST method.
                        But have u heard PUT, PATCH and DELETE method in http? All of these are the most commonly
                        used http methods. POST, GET, PUT, PATCH and DELETE are correspond to Create, Read, Update
                        and Delete (CRUD) operations.
                        </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>1. POST</h3>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Usage</b>: To create a new resource
                      </p>

                      <p className={article.text} style={style.highlight}>
                        The POST is used to create new resources. On successful creation, return HTTP status 201 or
                        returning a Location header with a link to the newly-created resource with
                        the 201 HTTP status. If the resource is already exist, it will return a status 409 instead.
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>2. GET</h3>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Usage</b>: To read a resource
                      </p>
                      <p className={article.text} style={style.highlight}>
                        The HTTP GET method is used to read a representation of a resource.
                        On success, GET returns a representation in XML or JSON and an HTTP response code of
                        200 (OK). In an error case, it most often returns a 404 (NOT FOUND) or 400 (BAD REQUEST).
                      </p>
                      <p className={article.text} style={style.highlight}>
                        <b>*Data should never be modified on the server side with GET request</b>
                      </p>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>3. PUT</h3>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Usage</b>: To update/replace a resource
                      </p>
                      <p className={article.text} style={style.highlight}>
                        PUT is use for update resource. However, PUT can also be used to create a resource in
                        the case where the resource ID is not exist (when resouce ID defined by client is not exist).
                        On successful update, return 200 (or 204 if not returning any content in the body) from a PUT.
                        If using PUT for create, return HTTP status 201 on successful creation.
                      </p>
                      <p className={article.text} style={style.highlight}>
                        <b>*When use PUT request, you need to send all parameter with their value</b>
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>4. PATCH</h3>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Usage</b>: To update/modify a resource
                      </p>
                      <p className={article.text} style={style.highlight}>
                        PATCH is used for modify capabilities. The PATCH request only needs to contain the
                        changes to the resource, not the complete resource. The return status code will be same as
                        PUT request.
                      </p>
                      <p className={article.text} style={style.highlight}>
                        <b>*When use PATCH request, you only need to send the parameter that need to modify</b>
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>5. DELETE</h3>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Usage</b>: To update a resource
                      </p>
                      <p className={article.text} style={style.highlight}>
                        It is used to delete a resource identified by a URI.
                        On successful deletion, return HTTP status 200 (OK) along with a response body or
                        return HTTP status 204 (NO CONTENT) with no response body.
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Other Notes....</h3>
                      <p className={article.text} style={style.highlight}>
                        More info of the http status code =&#62;
                      <a target='_blank' rel="noopener noreferrer"
                          href='https://www.restapitutorial.com/httpstatuscodes.html'>here</a>
                      </p>
                    </GridItem>

                  </GridContainer>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <GridContainer>
                    <VerticalAlignTop className={article.toTopBtn} fontSize="large"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
                    <GridItem xs={12} sm={12} md={12}>
                      <h6>Reference:</h6>
                      <ol>
                        <li>https://www.restapitutorial.com/lessons/httpmethods.html</li>
                      </ol>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} style={{ textAlign: 'center', marginTop: 20 }}>
                      <Link to="/article" style={{ textDecoration: "none", color: 'inherit' }}>
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
