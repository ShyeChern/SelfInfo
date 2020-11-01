import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import article from "assets/css/article.module.css";
import image from "assets/img/bg7.jpg";

import Gist from "views/Reuse/Gist";

const useStyles = makeStyles(styles);

const style = {
  highlight: {
    borderRadius: 5,
    padding: 5
  }
}

export default function UseEffectPost(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      {/* make go back or to next post etc */}
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
                      <h3>React Hooks</h3>
                    </GridItem>
                  </GridContainer>
                </CardHeader>
                <CardBody>
                  <GridContainer style={{ textAlign: 'center' }} justify="center">
                    <GridItem xs={12} sm={12} md={12}>
                      <p className={article.date}>Last update on 1 Nov 2020</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h4>What is React Hooks?</h4>
                      <p className={article.text}>
                        Hooks is a new feature introduce by React in 2018.
                        With Hooks, we can easily reuse the state logic easily. It breaks down the classes into
                        smaller function and increase the code reusability. The code below shows the original class pattern
                        and the function pattern (Hooks cannot use in the class pattern).
                        </p>
                      <center>
                        <GridItem xs={12} sm={12} md={8}>
                        <Gist id="b7b49f4939da8f9d76443a1be49853d4" file="ClassPattern.js"/>
                        <Gist id="b7b49f4939da8f9d76443a1be49853d4" file="FunctionPattern.js"/>
                        </GridItem>
                      </center>
                      <p className={article.text}>
                        Since the coding pattern is changed from class pattern to function pattern, the React Component
                        Lifecycle method can no longer be used. But there are several type of hooks is used to replace it.
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h4>1. useState</h4>
                      <p className={article.text} style={style.highlight}>
                        This hooks is use to get a value from variable or set a value to variable.
                        It replace the setState() in Class Component.
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Syntax: </b> <br />
                        const [<i>value, setValue</i>] = useState(<i>initialValue</i>);
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Explanation: </b> <br />
                        <i>value</i> is a variable while <i>setValue</i> is a function.
                        Simply call <i>value</i> variable to get the value of it while <i>setValue(newValue)</i>&nbsp;
                        to set a new value into the variable. useState(<i>initialValue</i>) is the initial value at the first render.
                        useState can store any type of variable such as number, string, boolean, array, object...
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h4>2. useEffect</h4>
                      <p className={article.text} style={style.highlight}>
                        This hooks will run on everytime screen is render.
                        It replace componentDidMount, componentDidUpate and componentWillUnmount in Class Component
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Syntax: </b><br /> useEffect( <i>function</i> [,<i>variable</i>] )
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Explanation: </b> <br />
                        <i>function</i> will run everytime screen is render.
                        componentWillUnmount function can be called by using return function.
                        However, when <i>variable</i> is set,
                        this useEffect will only run when the <i>variable</i> value is changed.
                        A clearer explanation with code is attached to make easier understanding.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="b7b49f4939da8f9d76443a1be49853d4" file="UseEffect.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h4>3. createContext, useContext</h4>
                      <p className={article.text} style={style.highlight}>
                        useContext allow us to pass variable without using props as long as the 
                        child component is still inside the parent component. 
                        It make ease of passing data from level to level in the component.
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Syntax: </b><br /> 
                        const <i>myContext</i> = createContext(<i>defaultValue</i>);<br /> 
                        const <i>value</i> = useContext(<i>MyContext</i>);
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Explanation: </b> <br />
                        We must create the context before using it. The defaultValue will only used when component
                        did not find the matching provider (parent) in the tree. When we want to pass data from parent to
                        child, myContext.Provider tag is used as parent and the value prop is used to pass the data.
                        While useContext(myContext) is used to get the data of parent from any of the child component.
                        An example code is attached to make easier understanding.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="b7b49f4939da8f9d76443a1be49853d4" file="CreateContextUseContext.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h4>4. useReducer</h4>
                      <p className={article.text} style={style.highlight}>
                        An advanced version of useState. It is used when we need to execute a complex logic or state
                        action.
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Syntax: </b><br /> 
                        const [<i>state, dispatch</i>] = useReducer(<i>reducerFunction, initialState, initialAction</i>);
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Explanation: </b> <br />
                        Work almost same like useState. When <i>dispatch</i> is called, <i>reducerFunction</i> will
                        received 2 parameter and execute logic to save as new state (previousState, action) =&#62; nextState.
                        All the value passed in dispatch will received inside the action parameter. After the logic execute,
                        the result will save as the current state.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="b7b49f4939da8f9d76443a1be49853d4" file="UseReducer.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h4>5. useMemo, useCallback</h4>
                      <p className={article.text} style={style.highlight}>
                        Hooks that help to store a callback or result of a callback. The value will not change unless the 
                        value in array of dependencies is changed. It is a technique to speed up program.
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Syntax: </b><br /> 
                        const <i>memoizedValue</i> = useMemo(() =&#62; <i>computeExpensiveValue(a, b), [a, b]</i>);<br /> 
                        const <i>memoizedCallback </i> = useCallback(() =&#62; <i>computeExpensiveValue(a, b), [a, b]</i>);
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Explanation: </b> <br />
                        useMemo store value while useCallback store callback. Look at the example.
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="b7b49f4939da8f9d76443a1be49853d4" file="UseMemoUseCallback.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h4>6. useRef</h4>
                      <p className={article.text} style={style.highlight}>
                        Hooks that helps returns a ref object with current property is initialized. 
                        Can use to make certain action such as focus. useRef will not re-render.
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Syntax: </b><br /> 
                        const <i>refContainer</i> = useRef(<i>initialValue</i>);
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>Explanation: </b> <br />
                        Just look at the example below
                      </p>
                      <center>
                        <GridItem xs={12} sm={12} md={10}>
                          <Gist id="b7b49f4939da8f9d76443a1be49853d4" file="UseRef.js" />
                        </GridItem>
                      </center>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h4>Note</h4>
                      <p style={{ textAlign: "justify" }}>
                        You need to import the hooks in order to use it e.g. &nbsp;
                        <b>import React, &#123;useState, useEffect&#125; from "react";</b>
                      </p>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <h6>Reference:</h6>
                      <ol>
                        <li>https://reactjs.org/docs/hooks-reference.html</li>
                        <li>https://webbrainsmedia.com/blogs/react-hooks-explained-useEffect-hook</li>
                        <li>and some Stack Overflow...</li>
                      </ol>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12} style={{textAlign:'center', marginTop:20}}>
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
