import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import ContactPage from "views/ContactPage/ContactPage.js";
import ProjectPage from "views/ProjectPage/ProjectPage.js";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ScrollToTop from "util/scrollToTop";

export default function App() {
    var history = createBrowserHistory();

    return (
        <div>
            <Router history={history}>
                <ScrollToTop />
                <Switch>
                    <Route exact path="/contact" component={ContactPage}></Route>
                    <Route exact path="/project" component={ProjectPage}></Route>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/profile" component={ProfilePage} />
                    <Route exact path="/login-page" component={LoginPage} />
                    <Route exact path="/component" component={Components} />
                </Switch>

            </Router>
        </div>
    )


}

