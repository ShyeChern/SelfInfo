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
// component to show github gist 
import Gist from "views/Reuse/Gist";
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

export default function VanillaJavascriptArticle(props) {
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
                          <h2>Vanilla Javascript</h2>
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
                      <p className={article.date}>Last update on 19 Nov 2020</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h3>What is Vanilla Javascript</h3>
                      <p className={article.text}>
                        VanillaJS means using plain JavaScript without any additional libraries like jQuery.
                        People use it as a joke to remind other developers that many things can be done nowadays
                        without the need for additional JavaScript libraries. At the below, I will show some common 
                        jQuery action which can be done via plain Javascript.
                        </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Display</h3>
                      <p className={article.text} style={style.highlight}>
                        In jQeury, we use <i>show()</i>and <i>hide()</i>. Now in can be replaced by <i>document.querySelector.style</i>
                        It is not limited to the display style but every style.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={8}>
                        <Gist id="acbea18f1892a7310b271c120d0b0e88" file="Display.html" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Get Value</h3>
                      <p className={article.text} style={style.highlight}>
                        Ways of getting and modifying value in jQeury and plain javascript
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="acbea18f1892a7310b271c120d0b0e88" file="GetValue.html" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Listener</h3>
                      <p className={article.text} style={style.highlight}>
                        Sample event listener of jQuery and plain javascript
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="acbea18f1892a7310b271c120d0b0e88" file="Listener.html" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Api Call</h3>
                      <p className={article.text} style={style.highlight}>
                        One of the most important thing in software development, api call.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="acbea18f1892a7310b271c120d0b0e88" file="ApiCall.js" />
                        </GridItem>
                      </center>
                      <p>
                        <a target='_blank' rel="noopener noreferrer"
                          href='https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch'>Click for more info about the fetch</a>
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Others Info</h3>
                      <p className={article.text} style={style.highlight}>
                        For your information, in Bootstrap 5, jQeury was removed and switched to Vanilla Javascript.
                        Vanilla JS can really achieved what jQuery can do and Vanilla JS has a better performance compared with 
                        it.  
                        Moreover, JavaScript frameworks like Angular, Vue and React dominate the web development
                        community nowadays, jQuery has been losing its popularity as most of these modern
                        frameworks have a better performance...
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
                        <li>https://snipcart.com/blog/learn-vanilla-javascript-before-using-js-frameworks</li>
                        <li>https://designmodo.com/bootstrap-5/</li>
                        <li>and some Stack Overflow...</li>
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
