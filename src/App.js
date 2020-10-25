import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// major page
import ContactPage from "views/ContactPage/ContactPage.js";
import ProjectPage from "views/ProjectPage/ProjectPage.js";
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
// post page
import PostPage from "views/PostPage/PostPage.js";
import UseEffectPost from "views/PostPage/Post/UseEffectPost.js";
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
                    <Route exact path="/post" component={PostPage} />

                    <Route exact path="/post/useeffect" component={UseEffectPost} />



                    
                    <Route exact path="/component" component={Components} />
                </Switch>

            </Router>
        </div>
    )


}

