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
import ScrollToTop from "util/scrollToTop";

export default function App() {

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



                    <Route exact path="/component" component={Components} />
                    {/* capture invalid route */}
                    <Route render={() => <Redirect to={{ pathname: "/pagenotfound" }} />} />
                </Switch>

            </Router>
        </div>
    )


}

