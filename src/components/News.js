import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Nav from "./Nav";

const styles = () => ({
  root: {
    width: "100%",
    maxWidth: 360
  }
});

class News extends Component {
  constructor(props) {
    super(props);
    let { currentTitle } = this.props;
    console.log(`[News] currentTitle: `, currentTitle);
    this.props.store.updateTitle(currentTitle);
  }

  render() {
    const { classes } = this.props;
    let store = this.props.store;
    return (
      <React.Fragment>
        <Nav store={store} />
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Title"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Im content
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </React.Fragment>
    );
  }
}

News.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(News);
