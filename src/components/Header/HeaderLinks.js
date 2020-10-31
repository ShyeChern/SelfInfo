/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Home, Person, Work, Email, Description } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link to="/" style={{ textDecoration: "none", color: 'inherit' }}>
          <Button
            // href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
            // target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Home className={classes.icons} /> Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/article" style={{ textDecoration: "none", color: 'inherit' }}>
          <Button
            // href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
            // target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Description className={classes.icons} /> Article
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/profile" style={{ textDecoration: "none", color: 'inherit' }}>
          <Button
            // href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
            // target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Person className={classes.icons} /> Profile
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/project" style={{ textDecoration: "none", color: 'inherit' }}>
          <Button
            // href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
            // target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Work className={classes.icons} /> Project
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/contact" style={{ textDecoration: "none", color: 'inherit' }}>
          <Button
            // href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
            // target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Email className={classes.icons} /> Contact
          </Button>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}
