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

export default function GitArticle(props) {
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
                          <h2>Git</h2>
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
                      <p className={article.date}>Last update on 29 Apr 2021</p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <h3>What is git?</h3>
                      <p className={article.text}>
                        Git is a distributed version-control system for tracking changes in source code during software development.
                        It is designed for coordinating work among programmers, but it can be used to track changes in any
                        set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.
                        </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Git Basic Command</h3>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>git config --global user.name [name]</b> <br />
                        <b>git config --global user.email [email]</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Define the username and email of the user for all the git command. Only require for the
                        first time.
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>git remote add [name] [url]</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Add a new connection to a remote repository. After adding a remote, you can use [name] as
                        a shortcut for [url] in other commands. For example: <b><i>git remote add origin [url]</i></b> and follow by
                        <b><i> git pull origin master</i></b>
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>git add [directory]</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Stage all changes in [directory] for the next commit. Replace <b><i>[directory]</i></b> with
                        a <b><i>[filename]</i></b> to change a specific file. If period is used (<b><i>git add .</i></b>) It will stage
                        all changes in the current
                        directory
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>git commit -m "[message]"</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Commit the staged changes with <b><i>[message]</i></b> as the commit message.
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>git push [remote] [branch]</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Push the commit into live and merge with the remote branch. For example,
                        <b><i>git push origin master</i></b> will push all your changes in local repository and merge with remote
                        master branch.
                      </p>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>git pull [remote] [branch]</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Fetch the specified remote update and immediately merge it into the local copy. For example,
                        <b><i> git pull origin master</i></b> will update your local repository with the latest one in the remote
                        master branch.
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>Git Advanced Command</h3>
                      <p className={article.highlightText} style={style.highlight}>
                        <b>git branch </b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        List down all the branch in local repository. User with <b><i>git branch -r</i></b> to view list of branch
                        in remote. There are more branch argument availale....
                      </p>

                      <p className={article.highlightText} style={style.highlight}>
                        <b>git checkout [branch/commit]</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Switched to another branch or commit. If use with <b><i>git checkout -b [branch]</i></b> will create the branch if
                        it is not exist. If branch is not in local yet (in remote) use git pull/fetch to pull down the branch then only
                        checkout to switch to it.
                      </p>

                      <p className={article.highlightText} style={style.highlight}>
                        <b>git merge [branch]</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Merge branch into current branch. If you current pointing at the master branch,
                        <b><i> git merge [branch]</i></b> will merge the <b><i>[branch]</i></b> into master branch.
                      </p>

                      <p className={article.highlightText} style={style.highlight}>
                        <b>git update-index --assume-unchanged [path-to-file]<br />
                         git update-index --no-assume-unchanged [path-to-file]</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Untrack the file changes for temporary with <b><i>--assumes-unchanged</i></b>, and then continue update the changes
                        with <b><i>--no--assumes-unchanged</i></b>. Can be use to make some changes to file locally without affecting the source.
                      </p>

                      <p className={article.highlightText} style={style.highlight}>
                        <b>git stash</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Save all your changes (staged and unstaged) for later use and then revert them from your working directory.
                        Use when you want to record your local changes and go back to previous commit.
                        Oftenly use to make some experimental changes.
                      </p>

                      <p className={article.highlightText} style={style.highlight}>
                        <b>git stash pop</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        Re-apply the previous stashed changes to your current working directory.
                      </p>

                      <p className={article.highlightText} style={style.highlight}>
                        <b>git reset --[state] [commit]</b>
                      </p>
                      <p className={article.text}>
                        <b>Explanation: </b>
                        There are three states available which are soft, mixed (default) and hard. Soft uncommit your changes,
                        mixed uncommit and unstage your changes while hard uncommit, unstage and delete your changes. For example,
                        when you want to revert all your changes to specific commit, you can use <b><i>git reset --hard eucdf84</i></b>
                        to back to the commit.
                      </p>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={10}>
                      <hr />
                      <h3>gitignore</h3>
                      <p className={article.text} style={style.highlight}>
                        Gitignore (.gitignore) is a plain text file where each line in file contains a pattern for files/directories to
                        ignore. The files/directories will then not staged and committed to the repository. Gitignore always used to
                        ignore files like node_modules, .env, log and some other file which is sensitive or not related to the live
                        project. Note that files already tracked by Git are not affected when you add it into gitignore, so you have
                        to use one of these commands to untrack your file (<b><i>git rm --cached [path-to-file]</i></b>,
                        &nbsp;<b><i>git rm -r --cached [folder]</i></b>)
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
                        <li>https://en.wikipedia.org/wiki/Git</li>
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
