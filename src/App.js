import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// major page
import ContactPage from "views/ContactPage/ContactPage.js";
import ProjectPage from "views/ProjectPage/ProjectPage.js";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import ArticlePage from "views/ArticlePage/ArticlePage.js";
import PageNotFoundPage from "views/Reuse/PageNotFound.js";
// article page
import ReactHooksArticle from "views/ArticlePage/Article/ReactHooksArticle.js";
import JavascriptDateTimeFormatArticle from "views/ArticlePage/Article/JavascriptDateTimeFormatArticle.js";
import GitArticle from "views/ArticlePage/Article/GitArticle.js";
import HttpRequestMethodArticle from "views/ArticlePage/Article/HttpRequestMethodArticle.js";
import VanillaJavascriptArticle from "views/ArticlePage/Article/VanillaJavascriptArticle.js";
import SqlVsNosqlArticle from "views/ArticlePage/Article/SqlVsNosqlArticle.js";
import ScrollToTop from "util/scrollToTop";

import LoginPage from "views/LoginPage/LoginPage.js";
import Finance from "views/Finance/Finance.js";

import Cookies from 'js-cookie'


export default function App() {


  // session expire after 30 minutes
  Cookies.set('test', 'randomgenerate cookie session', {
    expires: new Date(new Date().getTime() + 30 * 60 * 1000),
    httpOnly: false,
    sameSite: 'none',
    secure: true
  });


  // Cookies.remove('shyechern');

  const checkCookie = () => {
    if (Cookies.get('shyechern') !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  const PrivateRoute = ({ children, ...rest }) => {
    let isLogin = checkCookie();
    return (
      <Route {...rest} render={() => isLogin ? (children) : (<Redirect to={{ pathname: "/login" }} />)} />
    );
  }

  const LoginRoute = ({ children, ...rest }) => {
    let isLogin = checkCookie();
    return (
      <Route {...rest} render={() => isLogin ? (<Redirect to={{ pathname: "/finance" }} />) : (children)} />
    );
  }


  return (
    <div>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/pagenotfound" component={PageNotFoundPage} />
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route exact path="/project" component={ProjectPage}></Route>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/article" component={ArticlePage} />

          <Route exact path="/article/react-hooks" component={ReactHooksArticle} />
          <Route exact path="/article/javascript-date-time-format" component={JavascriptDateTimeFormatArticle} />
          <Route exact path="/article/http-request-method" component={HttpRequestMethodArticle} />
          <Route exact path="/article/git" component={GitArticle} />
          <Route exact path="/article/vanilla-javascript" component={VanillaJavascriptArticle} />
          <Route exact path="/article/sql-vs-nosql" component={SqlVsNosqlArticle} />

          <LoginRoute exact path="/login" ><LoginPage /> </LoginRoute>
          <PrivateRoute exact path="/finance"><Finance /> </PrivateRoute>


          <Route exact path="/component" component={Components} />
          {/* capture invalid route */}
          <Route render={() => <Redirect to={{ pathname: "/pagenotfound" }} />} />
        </Switch>

      </Router>
    </div>
  )


}

