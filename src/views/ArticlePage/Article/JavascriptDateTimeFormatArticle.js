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

export default function UseEffectPost(props) {
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
                          <h2>Javascript DateTime Format</h2>
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
                      <p className={article.date}>Last update on 8 Nov 2020</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h3>Why bothering to use Javascript datetime library when you can do it without it?</h3>
                      <p className={article.text}>
                        Sometimes when people want to manipulate some simple javascript datetime format,
                        they simply use the javascript libraries. They dont know they can do it just with the
                        native javascript.
                        </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Type of DateTime Format </h3>
                      <p className={article.text} style={style.highlight}>
                        In general, there are 4 types of pattern of datetime format which are default format,
                        UTC format, locale format and ISO format.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={8}>
                          <Gist id="4981cff6cb21818814e5b7c435d0b005" file="GeneralPattern.js" />
                        </GridItem>
                      </center>
                      <p className={article.text}>
                        <b>1. Default format: </b>
                        Return the default javascript datetime format.<br />
                        <b>2. Locale format: </b>
                        Return the datetime which according to your timezone +00:00<br />
                        <b>3. UTC format: </b>
                        Return the datetime which scale to Coordinated Universal Time (UTC) +00:00.<br />
                        <b>4. ISO format: </b>
                        Return the datetime format which follow the ISO 8601 standard (TZD=Time Zone Designator )
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Date and Time Format</h3>
                      <p className={article.text} style={style.highlight}>
                        Two types of separated date and time format, default one and the locale one
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="4981cff6cb21818814e5b7c435d0b005" file="DateAndTime.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Modifying Locale DateTime Format</h3>
                      <p className={article.text} style={style.highlight}>
                        There is a second parameter accept by the locale format which allow you to modifying
                        the datetime format. (Also for date format and time format)
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Syntax: </b><br />
                        dateObj.toLocaleDateString(<i>[locales[, options]]</i>)
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="4981cff6cb21818814e5b7c435d0b005" file="LocaleOptions.js" />
                        </GridItem>
                      </center>
                      <p>More info about locale parameter =&#62;
                        <a target='_blank' rel="noopener noreferrer"
                          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat'>here</a>
                      </p>
                      <p className={article.text} style={style.highlight}>
                        <b>Note: </b> <br />
                        If you dont specify the some of the property in options, it wont display
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Constructor of Date</h3>
                      <p className={article.text} style={style.highlight}>
                        Before we manipulating and formating the datetime, we need to change the string to the date
                        object. We can use the date constructor to make our date string into date object.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="4981cff6cb21818814e5b7c435d0b005" file="DateConstructor.js" />
                        </GridItem>
                      </center>
                      <p>More info about date constructor =&#62;
                        <a target='_blank' rel="noopener noreferrer"
                          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date'>here</a>
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Get specific value from the date object</h3>
                      <p className={article.text} style={style.highlight}>
                        In order to get the specific value of the date such as such as the year, month, date and time.
                        Just use the get method will do.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="4981cff6cb21818814e5b7c435d0b005" file="GetValue.js" />
                        </GridItem>
                        <p>More get method =&#62;
                        <a target='_blank' rel="noopener noreferrer"
                            href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date'>here</a>
                        </p>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Tricks in manipulating datetime format</h3>
                      <p className={article.text} style={style.highlight}>
                        If you are not using any javascript datetime library. The tricks below could
                        help you a lot.
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>1. Get Name of Month and Day</b><br />
                        Since <i>getMonth()</i> and <i>getDay()</i> method return only number value, there are
                        two different ways to get the name of the month or day. First is using the appropriate way
                        (can choose short or long name) while second is quick hack to get short name of day or month.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="4981cff6cb21818814e5b7c435d0b005" file="GetDayMonthName.js" />
                        </GridItem>
                      </center>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>2. Add or substract day</b><br />
                        In order to add or substract number of day to the date. First convert your date object into
                        milliseconds by using <i>Date.parse() </i> or <i>getTime() </i>. Both of these function will
                        returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. After that add the value
                        according to your desired value where 1 second = 1000 milliseconds. Last, convert the milliseconds
                        back to the date object using the date constructor.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="4981cff6cb21818814e5b7c435d0b005" file="AddDay.js" />
                        </GridItem>
                      </center>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>3. Comparing dates</b><br />
                        Same with add or substract day. Convert the date into milliseconds by using <i>Date.parse() </i>
                        or <i>getTime() </i>. After that, compare it by using the compare operator.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="4981cff6cb21818814e5b7c435d0b005" file="ComparingDate.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Javascript datetime library</h3>
                      <p className={article.text} style={style.highlight}>
                        When you need a complex manipulation on the datetime format, a javascript datetime library will
                        make ease of you because the current Javascript datetime capabilities is not that great.
                        There are a lot of javascript datetime library available now and the most popular one is moment.js.
                        However, moment is now generally consider to be a legacy project in maintenance mode (
                        <a href="https://momentjs.com/docs/" target="_blank" rel="noopener noreferrer">why stop using moment?</a>).
                        There are a lot more javascript library avaialble such as date-fns which is perform better than moment.
                        Just feel free to use it when necessary.
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
                        <li>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date</li>
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
