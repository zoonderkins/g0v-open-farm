import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import Nav from "./Nav";

const styles = () => ({
  root: {
    width: "100%",
    maxWidth: 360
  }
});

class About extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Nav />
        <List className={classes.root}>
          <ListItem>
            <Avatar>
              <Icon>mail</Icon>
            </Avatar>
            <ListItemText
              primary="Send email"
              secondary="Send an email if you have any questions or suggestions"
            />
          </ListItem>
          <ListItem>
            <Avatar>
              <Icon>star</Icon>
            </Avatar>
            <ListItemText
              primary="Rate us"
              secondary="Love it? Give us a Star"
            />
          </ListItem>
          <ListItem>
            <Avatar>
              <Icon>facebook</Icon>
            </Avatar>
            <ListItemText primary="Facebook" secondary="Find us on facebook" />
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}
About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
