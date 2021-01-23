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
// bootstrap table
import Table from 'react-bootstrap/Table';
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

export default function SqlVSNosqlArticle(props) {
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
                          <h2>SQL vs NoSQL</h2>
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
                      <p className={article.date}>Last update on 13 Dec 2020</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h3>What is SQL and NoSQL</h3>
                      <p className={article.text}>
                        SQL database also known as relational database, it have a table-based data structure,
                        with a strict, predefined schema required MySQL. NoSQL database or known as non-relational database, can
                        be document based, graph databases, key-value pairs, or wide-column stores. NoSQL databases do not
                        require any predefined schema, allowing you to work more freely with "unstructured data".
                        Some of the sample of SQL databases include MySQL, Oracle, PostgreSQL, and Microsoft SQL Server while
                        NoSQL database examples include MongoDB, Cassandra, HBase and CouchDB.
                        </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Diffrences between SQL database and NoSQL database</h3>
                      <Table className={article.text} style={style.highlight} striped bordered hover responsive >
                        <thead style={{ textAlign: 'center' }}>
                          <tr>
                            <th></th>
                            <th>SQL</th>
                            <th>NoSQL</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><b>Data Storage Model</b></td>
                            <td>Tabular based design, relational database. Tables with fixed pre-defined columns and datatype, all the rows need to follows the columns datatype standard</td>
                            <td>Document based design, non-relational database. Collections with dynamic JSON type documents, does not have a fixed column or datatype required</td>
                          </tr>
                          <tr>
                            <td><b>Flexibility</b></td>
                            <td>Detailed database model is required before database creation. Not easy to scale with their rigid schema restrictions</td>
                            <td>No detailed modeling is required. Can easily scaled with their dynamic schema nature</td>
                          </tr>
                          <tr>
                            <td><b>Standardization</b></td>
                            <td>SQL is standard language</td>
                            <td>Lack of a standard query language</td>
                          </tr>
                          <tr>
                            <td><b>Scalability</b></td>
                            <td>Can only buy another bigger server to enhance your database. (Vertical scalability)</td>
                            <td>Can add another server to enhance your database. (Horizontal scalability)</td>
                          </tr>
                          <tr>
                            <td><b>Structure</b></td>
                            <td>ACID (Atomicity, Consistency, Isolation, and Durability) </td>
                            <td>Base (Basically Available, Soft State, Eventually Consistent)</td>
                          </tr>
                        </tbody>
                      </Table>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Sample CRUD of MySQL Database (SQL) and MongoDB (NoSQL)</h3>
                      <p className={article.text} style={style.highlight}>
                        The following example shows the sample CRUD (Create, Read, Update, Delete) using MySQL and MongoDB (with mongoose).
                        Note that all the programming language used is javascript.
                      </p>
                      <h4>1. Create/Insert</h4>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="0860aa298f0f19d4129072756673b25d" file="Create.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h4>2. Read/Select</h4>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="0860aa298f0f19d4129072756673b25d" file="Read.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h4>3. Update</h4>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="0860aa298f0f19d4129072756673b25d" file="Update.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h4>4. Delete</h4>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="0860aa298f0f19d4129072756673b25d" file="Delete.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h4>5. Transaction</h4>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="0860aa298f0f19d4129072756673b25d" file="Transaction.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h4>Conclusion</h4>
                      <p className={article.text} style={style.highlight}>
                        The samples above just a very little part of SQL and NoSQL. There are much more of thing
                        that can be achieve in both of these sql.
                        In conclusion, there are nothing good or bad in both of the sql and nosql. It just which one is more suitable
                        for you. Both of these database have their own benefit.
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
                        <li>https://www.mongodb.com/nosql-explained/nosql-vs-sql</li>
                        <li>https://www.mongodb.com/scale/nosql-vs-relational-databases</li>
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
